import React, { useState } from 'react';
import { createRoutesFromChildren } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import season2122 from '../../data/Season21-22';
import Loading from '../BaseComponents/Loading';
import './Standing.scss';

const ClubStanding = ({ clubId }) => {
	// const [standing, setStanding] = useState(false);
	let navigate = useNavigate();

	const findObject = () => {
		return season2122.standing.find((el) => {
			return el.id === clubId;
		});
	};
	console.log(findObject().position);
	// useEffect(() => {
	// 	fetch(
	// 		'https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=39',
	// 		{
	// 			method: 'GET',
	// 			headers: {
	// 				'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
	// 				'x-rapidapi-key': process.env.REACT_APP_API_FOOTBALL_KEY,
	// 			},
	// 		}
	// 	)
	// 		.then((response) => response.json())
	// 		.then((res) => setStanding(res.response[0].league.standings[0]))
	// 		.catch((err) => {
	// 			console.error(err);
	// 		});
	// }, []);

	// if (!standing) {
	// 	return <Loading />;
	// } else {
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
			{season2122.standing.slice(0, 2).map((el, index) => {
				return (
					<li
						key={index}
						className={
							el.position === 4 && el.id === clubId
								? 'col-12 club-zone ucl-zone mark'
								: el.position === 17 && el.id === clubId
								? 'col-12 club-zone relegation-zone mark'
								: el.position === 4
								? 'col-12 club-zone ucl-zone'
								: el.position === 17
								? 'col-12 club-zone relegation-zone'
								: el.id === clubId
								? 'col-12 club-zone mark'
								: 'col-12 club-zone'
						}
						onClick={() => {
							navigate(`/clubs/${el.id}`);
						}}
					>
						<span className='club__rank'>{el.position}</span>
						<span className='club__logo'>
							<img
								style={{ width: '25px', height: '25px' }}
								src={el.logo}
								alt={`${el.name} logo`}
							/>
						</span>
						<span className='club__name'>{el.name}</span>
						<span className='club__games'>{el.matches.played}</span>
						{/* <span className='club__'>{el.all.win}</span> */}
						{/* <span className='club__'>{el.all.draw}</span> */}
						{/* <span className='club__'>{el.all.lose}</span> */}
						{/* <span className='club__'>{el.all.goals.for}</span>
								<span className='club__'>{el.all.goals.against}</span> */}
						<span className='club__goals'>
							{el.goals.for - el.goals.against}
						</span>
						<span className='club__points'>{el.points}</span>
						{/* <span className='club__'>{el.form}</span> */}
						{/* <span className='club__'>{el.status}</span> */}
					</li>
				);
			})}
			<li
				className='col-12 club-zone'
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: '24px',
				}}
			>
				<p>...</p>
			</li>
			{season2122.standing
				.slice(findObject().position - 2, findObject().position + 1)
				.map((el, index) => {
					return (
						<li
							key={index}
							className={
								el.position === 4 && el.id === clubId
									? 'col-12 club-zone ucl-zone mark'
									: el.position === 17 && el.id === clubId
									? 'col-12 club-zone relegation-zone mark'
									: el.position === 4
									? 'col-12 club-zone ucl-zone'
									: el.position === 17
									? 'col-12 club-zone relegation-zone'
									: el.id === clubId
									? 'col-12 club-zone mark'
									: 'col-12 club-zone'
							}
							onClick={() => {
								navigate(`/clubs/${el.id}`);
							}}
						>
							<span className='club__rank'>{el.position}</span>
							<span className='club__logo'>
								<img
									style={{ width: '25px', height: '25px' }}
									src={el.logo}
									alt={`${el.name} logo`}
								/>
							</span>
							<span className='club__name'>{el.name}</span>
							<span className='club__games'>{el.matches.played}</span>
							{/* <span className='club__'>{el.all.win}</span> */}
							{/* <span className='club__'>{el.all.draw}</span> */}
							{/* <span className='club__'>{el.all.lose}</span> */}
							{/* <span className='club__'>{el.all.goals.for}</span>
								<span className='club__'>{el.all.goals.against}</span> */}
							<span className='club__goals'>
								{el.goals.for - el.goals.against}
							</span>
							<span className='club__points'>{el.points}</span>
							{/* <span className='club__'>{el.form}</span> */}
							{/* <span className='club__'>{el.status}</span> */}
						</li>
					);
				})}
			<li
				className='col-12 club-zone'
				style={{ display: 'flex', justifyContent: 'center' }}
			>
				<p>...</p>
			</li>
			{season2122.standing.slice(16, 18).map((el, index) => {
				return (
					<li
						key={index}
						className={
							el.position === 4 && el.id === clubId
								? 'col-12 club-zone ucl-zone mark'
								: el.position === 17 && el.id === clubId
								? 'col-12 club-zone relegation-zone mark'
								: el.position === 4
								? 'col-12 club-zone ucl-zone'
								: el.position === 17
								? 'col-12 club-zone relegation-zone'
								: el.id === clubId
								? 'col-12 club-zone mark'
								: 'col-12 club-zone'
						}
						onClick={() => {
							navigate(`/clubs/${el.id}`);
						}}
					>
						<span className='club__rank'>{el.position}</span>
						<span className='club__logo'>
							<img
								style={{ width: '25px', height: '25px' }}
								src={el.logo}
								alt={`${el.name} logo`}
							/>
						</span>
						<span className='club__name'>{el.name}</span>
						<span className='club__games'>{el.matches.played}</span>
						{/* <span className='club__'>{el.all.win}</span> */}
						{/* <span className='club__'>{el.all.draw}</span> */}
						{/* <span className='club__'>{el.all.lose}</span> */}
						{/* <span className='club__'>{el.all.goals.for}</span>
								<span className='club__'>{el.all.goals.against}</span> */}
						<span className='club__goals'>
							{el.goals.for - el.goals.against}
						</span>
						<span className='club__points'>{el.points}</span>
						{/* <span className='club__'>{el.form}</span> */}
						{/* <span className='club__'>{el.status}</span> */}
					</li>
				);
			})}
		</ul>
	);
};
// };

export default ClubStanding;
