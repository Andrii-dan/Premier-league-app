import { useState, useEffect } from 'react';
import './Fixtures.scss';

const Fixtures = () => {
	const [matchDay, setMatchDay] = useState();
	const [fixtures, setFixtures] = useState(false);
	const [fixtureDate, setFixtureDate] = useState([]);
	const [error, setError] = useState(true);
	const [fixturesByDate, setFixturesByDate] = useState();
	const todaysDate = new Date().getDate();
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	useEffect(() => {
		fetch(
			'https://api-football-v1.p.rapidapi.com/v3/fixtures/rounds?league=39&season=2021&current=true',
			{
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
					'x-rapidapi-key':
						'38d50a19bfmsh71acbf14c0d41aep1f5e8ejsnf0f32a832cf7',
				},
			}
		)
			.then((res) => {
				if (!res.ok) {
					setError(false);
					// throw Error('Something went wrong! Date');
				} else {
					return res.json();
				}
			})
			.then((data) => data.response[0].match(/\d/g).join(''))
			.then((data) => setMatchDay(parseInt(data)))
			.catch((err) => {
				console.error(err);
			});
	}, [todaysDate]);

	useEffect(() => {
		fetch(
			`https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2021&round=Regular%20Season%20-%20${matchDay}`,
			{
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
					'x-rapidapi-key':
						'38d50a19bfmsh71acbf14c0d41aep1f5e8ejsnf0f32a832cf7',
				},
			}
		)
			.then((response) => {
				if (!response.ok) {
					setError(false);
					// throw Error('Something went wrong! Fixtures');
				} else {
					return response.json();
				}
			})
			.then((res) => {
				setFixtures(
					res.response.sort((a, b) => {
						return a.fixture.timestamp - b.fixture.timestamp;
					})
				);
				setFixtureDate([
					...new Set(
						res.response.map((item) => item.fixture.date.slice(0, 10))
					),
				]);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [matchDay]);

	const handleChangeRound = (e) => {
		if (matchDay === 38 && e) {
			return;
		} else if (matchDay === 1 && !e) {
			return;
		} else {
			setMatchDay((prev) => (e ? prev + 1 : prev - 1));
		}
	};

	// console.log(fixtureDate);

	useEffect(() => {
		const result = fixtureDate.map((el) => {
			return fixtures.filter((item) => {
				return item.fixture.date.slice(0, 10) === el;
			});
		});
		setFixturesByDate(result);
	}, [fixtureDate]);

	if (!fixtures) {
		return <h2>loading...</h2>;
	} else if (!error) {
		return (
			<h1>
				<i className='fas fa-exclamation-triangle'></i>
			</h1>
		);
	} else {
		return (
			<>
				<h2>Matchday {matchDay}</h2>

				<table className='fixtures'>
					<tbody>
						{fixturesByDate.map((el, index) => {
							return (
								<>
									<tr key={index} className='fixtures-date'>
										<td colSpan={5}>
											{days[new Date(fixtureDate[index]).getDay()]}{' '}
											{new Date(fixtureDate[index]).getDate()}{' '}
											{months[new Date(fixtureDate[index]).getMonth()]}
										</td>
									</tr>

									{el.map((el, index) => {
										return (
											<tr key={index} className='fixtures-match'>
												<td>{el.teams.home.name}</td>
												<td>
													<img
														style={{ width: '25px', height: '25px' }}
														src={el.teams.home.logo}
													/>
												</td>
												<td>
													{el.goals.home === null
														? el.fixture.date.slice(11, 16)
														: `${el.goals.home} : ${el.goals.away}`}
												</td>
												<td>
													<img
														style={{ width: '25px', height: '25px' }}
														src={el.teams.away.logo}
													/>
												</td>
												<td>{el.teams.away.name}</td>
											</tr>
										);
									})}
								</>
							);
						})}
					</tbody>
				</table>
				<div className='buttons'>
					<button onClick={() => handleChangeRound(false)}>
						Previous round
					</button>
					<button onClick={() => handleChangeRound(true)}>Next round</button>
				</div>
			</>
		);
	}
};

export default Fixtures;
