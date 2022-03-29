import React, { useState, useEffect } from 'react';
import './ClubSquad.scss';
import Player from '../TopPlayers/Player';

const ClubSquad = ({ clubId }) => {
	const [squad, setSquad] = useState(false);

	useEffect(() => {
		fetch(
			`https://api-football-v1.p.rapidapi.com/v3/players/squads?team=${clubId}`,
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
			.then((data) => setSquad(data.response[0]))
			.catch((err) => {
				console.error(err);
			});
	}, [clubId]);

	if (!squad) {
		return <h2>loading...</h2>;
	} else {
		return (
			<>
				<div className='col-3 club-squad__container'>
					<ul className='col-12'>
						<li>
							<h2 className='club-squad__title'>Goalkeeper</h2>
						</li>
						{squad.players
							.filter((item) => {
								return item.position === 'Goalkeeper';
							})
							.map((el, index) => {
								return (
									<Player
										key={index}
										playerPhoto={el.photo}
										playerName={el.name}
										club={''}
										goals={el.number}
										additionalClass={'last-player'}
									/>
								);
							})}
					</ul>
					<ul className='col-12'>
						<li>
							<h2 className='club-squad__title'>Defence</h2>
						</li>
						{squad.players
							.filter((item) => {
								return item.position === 'Defender';
							})
							.map((el, index) => {
								return (
									<Player
										key={index}
										playerPhoto={el.photo}
										playerName={el.name}
										club={''}
										goals={el.number}
										additionalClass={'last-player'}
									/>
								);
							})}
					</ul>
					<ul className='col-12'>
						<li>
							<h2 className='club-squad__title'>Midfield</h2>
						</li>
						{squad.players
							.filter((item) => {
								return item.position === 'Midfielder';
							})
							.map((el, index) => {
								return (
									<Player
										key={index}
										playerPhoto={el.photo}
										playerName={el.name}
										club={''}
										goals={el.number}
										additionalClass={'last-player'}
									/>
								);
							})}
					</ul>
					<ul className='col-12'>
						<li>
							<h2 className='club-squad__title'>Attack</h2>
						</li>
						{squad.players
							.filter((item) => {
								return item.position === 'Attacker';
							})
							.map((el, index) => {
								return (
									<Player
										key={index}
										playerPhoto={el.photo}
										playerName={el.name}
										club={''}
										goals={el.number}
										additionalClass={'last-player'}
									/>
								);
							})}
					</ul>
				</div>
			</>
		);
	}
};

export default ClubSquad;
