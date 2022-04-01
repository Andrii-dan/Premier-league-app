import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopScorers from '../TopPlayers/TopScorers';
import './FullStanding.scss';

const FullStanding = () => {
	const [standing, setStanding] = useState(false);
	let navigate = useNavigate();

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

	if (!standing) {
		return <h1>Loading...</h1>;
	} else {
		return (
			<>
				<div className='col-9 full-standing__container'>
					<ul className='full-standing'>
						<li className='full-standing-title'>
							<span className='club__rank'></span>
							<span className='club__logo'></span>
							<span className='club__name'></span>
							<span className='club__games'>GP</span>
							<span className='club__wins'>Win</span>
							<span className='club__draws'>Draw</span>
							<span className='club__loses'>Lose</span>
							<span className='club__goals-for'>G</span>
							<span className='club__goals-against'>GA</span>
							<span className='club__goals-difference'>GD</span>
							<span className='club__points'>Pts</span>
							<span className='club__form'>Form</span>
							{/* <span className='club__status'></span> */}
						</li>
						{standing.map((el, index) => {
							return (
								<li
									key={index}
									className={
										el.rank === 4
											? 'col-12 club ucl-zone'
											: el.rank === 17
											? 'col-12 club relegation-zone'
											: 'col-12 club'
									}
									onClick={() => {
										navigate(`/clubs/${el.team.id}`);
									}}
								>
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
									<span className='club__wins'>{el.all.win}</span>
									<span className='club__draws'>{el.all.draw}</span>
									<span className='club__loses'>{el.all.lose}</span>
									<span className='club__goals-for'>{el.all.goals.for}</span>
									<span className='club__goals-against'>
										{el.all.goals.against}
									</span>
									<span className='club__goals-difference'>{el.goalsDiff}</span>
									<span className='club__points'>{el.points}</span>
									<span className='club__form'>{el.form}</span>
									{/* <span className='club__status'>{el.status}</span> */}
								</li>
							);
						})}
					</ul>
				</div>
				<TopScorers />
			</>
		);
	}
};

export default FullStanding;
