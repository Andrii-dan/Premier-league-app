import React, { useState, useEffect } from 'react';
import './Standing.scss';

const Standing = () => {
	const [standing, setStanding] = useState(false);
	const [standingTop, setStandingTop] = useState([0, 10]);

	// const standingLegend = [
	// 	'Rank',
	// 	'Logo',
	// 	'Club',
	// 	'GP',
	// 	// 'Wins',
	// 	// 'Draws',
	// 	// 'Loses',
	// 	// 'GF',
	// 	// 'GA',
	// 	'GD',
	// 	'Pts',
	// 	// 'Form',
	// 	// 'Position Changing',
	// ];

	useEffect(() => {
		fetch(
			'https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=39',
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
			.then((res) => setStanding(res.response[0].league.standings[0]))
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const handleClick = (top, bottom) => {
		setStandingTop([top, bottom]);
	};

	if (!standing) {
		return <h1>Loading...</h1>;
	} else {
		return (
			<div className='col-3'>
				<ul className='standing'>
					<li className='standing-title'>
						<span className='club__rank'></span>
						<span className='club__logo'></span>
						<span className='club__name'></span>
						<span className='club__games'>GP</span>
						<span className='club__goals'>GD</span>
						<span className='club__points'>Pts</span>
					</li>
					{standing.slice(standingTop[0], standingTop[1]).map((el, index) => {
						return (
							<li key={index} className='col-12 club'>
								<span className='club__rank'>{el.rank}</span>
								<span className='club__logo'>
									<img
										style={{ width: '25px', height: '25px' }}
										src={el.team.logo}
										alt={`${el.team.name} logo`}
									/>
								</span>
								<span className='club__name'>{el.team.name}</span>
								<span className='club__games'>{el.all.played}</span>
								{/* <span className='club__'>{el.all.win}</span> */}
								{/* <span className='club__'>{el.all.draw}</span> */}
								{/* <span className='club__'>{el.all.lose}</span> */}
								{/* <span className='club__'>{el.all.goals.for}</span>
								<span className='club__'>{el.all.goals.against}</span> */}
								<span className='club__goals'>{el.goalsDiff}</span>
								<span className='club__points'>{el.points}</span>
								{/* <span className='club__'>{el.form}</span> */}
								{/* <span className='club__'>{el.status}</span> */}
							</li>
						);
					})}

					<li className='col-12 standing__buttons'>
						<button onClick={() => handleClick(0, 10)}>Top</button>
						<button onClick={() => handleClick(10, 20)}>Bottom</button>
					</li>
				</ul>
			</div>
		);
	}
};

export default Standing;
