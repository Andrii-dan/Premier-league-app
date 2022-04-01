import { useState, useEffect } from 'react';
import './Fixtures.scss';
import FixturesDate from './FixturesDate';

const Fixtures = () => {
	const [matchDay, setMatchDay] = useState();
	const [fixtures, setFixtures] = useState(false);
	const [error, setError] = useState(true);
	const [fixtureDate, setFixtureDate] = useState([]);
	const [fixturesByDate, setFixturesByDate] = useState();
	const todaysDate = new Date().getDate();
	const selectOption = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
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

	useEffect(() => {
		const result = fixtureDate.map((el) => {
			return fixtures.filter((item) => {
				return item.fixture.date.slice(0, 10) === el;
			});
		});
		setFixturesByDate(result);
	}, [fixtureDate, fixtures]);

	const handleChangeRound = (e) => {
		if (matchDay === 38 && e) {
			return;
		} else if (matchDay === 1 && !e) {
			return;
		} else {
			setMatchDay((prev) => (e ? prev + 1 : prev - 1));
		}
	};

	const onSelectChange = (e) => {
		setMatchDay(parseInt(e.target.value));
	};

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
			<div className='col-6 fixtures'>
				<div className='col-12'>
					<form>
						<h2 className='fixtures__title'>
							<select value={`Matchday ${matchDay}`} onChange={onSelectChange}>
								<option value={`Matchday ${matchDay}`}>
									{`Matchday ${matchDay}`}
								</option>
								{selectOption.map((el, index) => {
									return (
										<option key={index} value={el}>
											Matchday {el}
										</option>
									);
								})}
							</select>
						</h2>
					</form>
					<FixturesDate
						fixturesByDate={fixturesByDate}
						fixtureDate={fixtureDate}
					/>
					<div className='fixtures__buttons col-12'>
						<button onClick={() => handleChangeRound(false)}>
							<i class='fas fa-arrow-left'></i> Previous round
						</button>
						<button onClick={() => handleChangeRound(true)}>
							Next round <i className='fas fa-arrow-right'></i>
						</button>
					</div>
				</div>
			</div>
		);
	}
};

export default Fixtures;
