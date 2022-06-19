import React from 'react';
import './ClubSquad.scss';
import Player from '../TopPlayers/Player';
import Loading from '../BaseComponents/Loading';

const ClubSquad = ({ clubInfo }) => {
	// const [squad, setSquad] = useState(false);

	// useEffect(() => {
	// 	fetch(
	// 		`https://api-football-v1.p.rapidapi.com/v3/players/squads?team=${clubId}`,
	// 		{
	// 			method: 'GET',
	// 			headers: {
	// 				'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
	// 				'X-RapidAPI-Key': process.env.REACT_APP_API_FOOTBALL_KEY,
	// 			},
	// 		}
	// 	)
	// 		.then((res) => {
	// 			return res.json();
	// 		})
	// 		.then((data) => setSquad(data.response[0]))
	// 		.catch((err) => {
	// 			console.error(err);
	// 		});
	// }, [clubId]);

	if (!clubInfo) {
		return <Loading />;
	} else {
		return (
			<div className='col-3 club-squad__container'>
				<ul className='col-12'>
					<li>
						<h2 className='club-squad__title'>Goalkeeper</h2>
					</li>
					{clubInfo.goalkeeper.map((el, index) => {
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
					{clubInfo.defence.map((el, index) => {
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
					{clubInfo.midfield.map((el, index) => {
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
					{clubInfo.attack.map((el, index) => {
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
		);
	}
};

export default ClubSquad;
