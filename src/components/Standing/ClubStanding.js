import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Standing.scss';

const ClubStanding = ({ clubId }) => {
	const [standing, setStanding] = useState(false);
	let navigate = useNavigate();

	useEffect(() => {
		fetch(
			'https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=39',
			{
				method: 'GET',
				headers: {
					'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
					'x-rapidapi-key': process.env.REACT_APP_API_FOOTBALL_KEY,
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
			<ul className='col-12 standing'>
				<li className='standing-title'>
					<span className='club__rank'></span>
					<span className='club__logo'></span>
					<span className='club__name'></span>
					<span className='club__games'>GP</span>
					<span className='club__goals'>GD</span>
					<span className='club__points'>Pts</span>
				</li>
				{standing.map((el, index) => {
					return (
						<li
							key={index}
							className={
								el.rank === 4 && el.team.id === parseInt(clubId)
									? 'col-12 club-zone ucl-zone mark'
									: el.rank === 17 && el.team.id === parseInt(clubId)
									? 'col-12 club-zone relegation-zone mark'
									: el.rank === 4
									? 'col-12 club-zone ucl-zone'
									: el.rank === 17
									? 'col-12 club-zone relegation-zone'
									: el.team.id === parseInt(clubId)
									? 'col-12 club-zone mark'
									: 'col-12 club-zone'
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
			</ul>
		);
	}
};

export default ClubStanding;
