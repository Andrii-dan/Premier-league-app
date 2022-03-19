import { useState, useEffect } from 'react';
import './Fixtures.scss';

const Fixtures = () => {
	const [matchDay, setMatchDay] = useState('Matchday 30');
	const [fixtures, setFixtures] = useState([]);

	useEffect(() => {
		fetch(
			`https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2021&round=Regular%20Season%20-%2030`,
			{
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
					'x-rapidapi-key':
						'38d50a19bfmsh71acbf14c0d41aep1f5e8ejsnf0f32a832cf7',
				},
			}
		)
			.then((response) => response.json())
			.then((res) => {
				setFixtures(res.response);
				console.log(res.response)
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	
	return (
		<>
			<h2>{matchDay}</h2>

			<table className='fixtures'>
				<tbody>
					{fixtures.map((el, index) => {
						return (
							<>
								<tr key={el.fixture.id} className='fixtures-date'>
									<td colSpan={5}>{days[new Date(el.fixture.date).getDay()]} {months[new Date(el.fixture.date).getMonth()]}</td>
								</tr>
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
							</>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default Fixtures;
