import React, { useEffect, useState } from 'react';
import './ClubsStrap.scss';

const ClubsStrap = () => {
	const [clubsList, setClubsList] = useState(false);

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
		return <h2>loading...</h2>;
	} else {
		return (
			<div className='clubs__strap'>
				{clubsList.map((el, index) => {
					return (
						<span key={index}>
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
