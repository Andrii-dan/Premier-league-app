import React from 'react';
import './Player.scss';

const Player = ({ playerPhoto, playerName, club, goals, additionalClass }) => {
	return (
		<li className={`col-12 player  ${additionalClass}`}>
			<div className='player__photo'>
				<img
					src={
						playerPhoto === 'null'
							? 'https://cdn-icons.flaticon.com/png/512/3024/premium/3024605.png?token=exp=1655577739~hmac=9694fd685b0240f81db92f9ec4b08a83'
							: playerPhoto
					}
					alt={`${playerName}'s`}
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
