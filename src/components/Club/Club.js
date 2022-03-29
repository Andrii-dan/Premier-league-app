import React, { useState, useEffect } from 'react';
import ClubSquad from './ClubSquad';

const Club = ({ clubId }) => {
	const todaysDate = new Date().toISOString().slice(0, 10);
	const [clubInfo, setClubInfo] = useState(false);

	useEffect(() => {
		fetch(
			`https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=39&season=2021&team=${clubId}&date=${todaysDate}`,
			{
				method: 'GET',
				headers: {
					'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
					'X-RapidAPI-Key':
						'38d50a19bfmsh71acbf14c0d41aep1f5e8ejsnf0f32a832cf7',
				},
			}
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => setClubInfo(data.response))
			.catch((err) => {
				console.error(err);
			});
	}, [clubId]);

	console.log(clubInfo);

	if (!clubInfo) {
		return <h2>loading...</h2>;
	} else {
		return (
			<>
				<h1 className='col-12' style={{ color: 'white', textAlign: 'center' }}>
					{clubInfo.team.name}
				</h1>
				<ClubSquad clubId={clubId} />
			</>
		);
	}
};

export default Club;
