import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../BaseComponents/Loading';
import './Standing.scss';

const Standing = () => {
	const [standing, setStanding] = useState(false);
	const [standingTop, setStandingTop] = useState([0, 10]);
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

	const handleClick = (top, bottom) => {
		setStandingTop([top, bottom]);
	};

	if (!standing) {
		return <Loading />;
	} else {
		return (
			<div className='col-3 standing__container'>
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
								<span className='club__goals'>{el.goalsDiff}</span>
								<span className='club__points'>{el.points}</span>
							</li>
						);
					})}

					<li className='col-12 standing__buttons'>
						<button onClick={() => handleClick(0, 10)}>
							<i class='fas fa-arrow-left'></i> Top{' '}
						</button>
						<button
							onClick={() => {
								navigate('/standing');
							}}
						>
							See Full
						</button>
						<button onClick={() => handleClick(10, 20)}>
							Bottom <i class='fas fa-arrow-right'></i>
						</button>
					</li>
				</ul>
			</div>
		);
	}
};

export default Standing;
