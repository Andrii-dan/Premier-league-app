import React, { useState, useEffect } from 'react';
import Player from './Player';

const ScorersPlusAssists = () => {
	const [scorers, setScorers] = useState(false);

	useEffect(() => {
		fetch(
			'https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2021',
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
			.then((res) => {
				setScorers(
					res.response.sort((a, b) => {
						return ((b.statistics[0].goals.total + b.statistics[0].goals.assists) -
							(a.statistics[0].goals.total + a.statistics[0].goals.assists)
						);
					})
				);
			})
			.catch((err) => console.error(err));
	}, []);

	if (!scorers) {
		return 'Loading...';
	} else {
		return scorers.slice(0, 3).map((el, index) => {
			return (
				<Player
					key={index}
					playerPhoto={el.player.photo}
					playerName={el.player.name}
					club={el.statistics[0].team.name}
					goals={el.statistics[0].goals.total + el.statistics[0].goals.assists}
				/>
			);
		});
	}
};

export default ScorersPlusAssists;
