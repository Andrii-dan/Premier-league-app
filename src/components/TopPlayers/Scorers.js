import React, { useState, useEffect } from 'react';
import Loading from '../BaseComponents/Loading';
import Player from './Player';

const Scorers = () => {
	const [scorers, setScorers] = useState(false);

	useEffect(() => {
		fetch(
			'https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2021',
			{
				method: 'GET',
				headers: {
					'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
					'X-RapidAPI-Key': process.env.REACT_APP_API_FOOTBALL_KEY,
				},
			}
		)
			.then((res) => res.json())
			.then((res) => setScorers(res.response))
			.catch((err) => console.error(err));
	}, []);

	if (!scorers) {
		return <Loading />;
	} else {
		return scorers.slice(0, 3).map((el, index) => {
			return (
				<Player
					key={index}
					playerPhoto={el.player.photo}
					playerName={el.player.name}
					club={el.statistics[0].team.name}
					goals={el.statistics[0].goals.total}
				/>
			);
		});
	}
};

export default Scorers;
