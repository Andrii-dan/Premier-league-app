import React, { useState, useEffect } from 'react';
import Player from './Player';

const Assists = () => {
	const [assists, setAssists] = useState(false);

	useEffect(() => {
		fetch(
			'https://api-football-v1.p.rapidapi.com/v3/players/topassists?league=39&season=2021',
			{
				method: 'GET',
				headers: {
					'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
					'X-RapidAPI-Key':
						'38d50a19bfmsh71acbf14c0d41aep1f5e8ejsnf0f32a832cf7',
				},
			}
		)
			.then((res) => res.json())
			.then((res) => setAssists(res.response))
			.catch((err) => console.error(err));
	}, []);

	if (!assists) {
		return 'Loading...';
	} else {
		return assists.slice(0, 5).map((el, index) => {
			return (
				<Player
					key={index}
					playerPhoto={el.player.photo}
					playerName={el.player.name}
					club={el.statistics[0].team.name}
					goals={el.statistics[0].goals.assists}
				/>
			);
		});
	}
};

export default Assists;
