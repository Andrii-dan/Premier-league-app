import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../BaseComponents/Loading';
import './ClubsStrap.scss';

const ClubsStrap = () => {
	const [clubsList, setClubsList] = useState(false);
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
			.then((res) =>
				setClubsList(
					res.response[0].league.standings[0].sort((a, b) => {
						return a.team.id - b.team.id;
					})
				)
			)
			.catch((err) => {
				console.error(err);
			});
	}, []);

	if (!clubsList) {
		return <Loading />;
	} else {
		return (
			<div className='clubs__strap'>
				{clubsList.map((el, index) => {
					return (
						<span
							key={index}
							onClick={() => {
								navigate(`/clubs/${el.team.id}`);
							}}
						>
							<img
								className='club__logo'
								src={el.team.logo}
								alt={`${el.team.name}'s logo`}
							/>
						</span>
					);
				})}
			</div>
		);
	}
};

export default ClubsStrap;
