import React from 'react';
import './Player.scss';

const Player = ({ playerPhoto, playerName, club, goals }) => {
	return (
		<li className='col-12 player'>
			<div className='player__photo'>
				<img
					src={playerPhoto}
					alt={`${playerName}'s photo`}
				/>
			</div>
			<div className='player__info'>
				<h3>{playerName}</h3>
				<h4>{club}</h4>
			</div>
			<div className='player__goals'>{goals}</div>
		</li>
	);
};

export default Player;
