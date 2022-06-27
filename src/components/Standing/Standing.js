import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../BaseComponents/Loading';
import db from '../../firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import './Standing.scss';

const Standing = () => {
	const [standing, setStanding] = useState(false);
	const [standingTop, setStandingTop] = useState([0, 10]);
	let navigate = useNavigate();

	const handleClick = (top, bottom) => {
		setStandingTop([top, bottom]);
	};

	useEffect(() => {
		onSnapshot(doc(db, 'season_22_23', 'K8H74IHjWeLk9lObxABX'), (doc) => {
			setStanding(doc.data().standing);
		});
	}, []);

	if (!standing) {
		return <Loading />;
	} else {
		return (
			<div className='col-3 standing__container'>
				<ul className='standing'>
					<li className='standing-title'>
						<span className='club__rank'></span>
						<span className='club__logo'></span>
						<span className='club__name'></span>
						<span className='club__games'>GP</span>
						<span className='club__goals'>GD</span>
						<span className='club__points'>Pts</span>
					</li>
					{standing.slice(standingTop[0], standingTop[1]).map((el, index) => {
						return (
							<li
								key={index}
								className={
									el.position === 4
										? 'col-12 club ucl-zone'
										: el.position === 17
										? 'col-12 club relegation-zone'
										: 'col-12 club'
								}
								onClick={() => {
									navigate(`/clubs/${el.id}`);
								}}
							>
								<span className='club__rank'>{el.position}</span>
								<span className='club__logo'>
									<img
										style={{ width: '25px', height: '25px' }}
										src={el.logo}
										alt={`${el.name}'s logo`}
									/>
								</span>
								<span className='club__name'>{el.name}</span>
								<span className='club__games'>{el.matches.played}</span>
								<span className='club__goals'>
									{parseInt(el.goals.for) - parseInt(el.goals.against)}
								</span>
								<span className='club__points'>{el.points}</span>
							</li>
						);
					})}

					<li className='col-12 standing__buttons'>
						<button onClick={() => handleClick(0, 10)}>
							<i className='fas fa-arrow-left'></i> Top{' '}
						</button>
						<button
							onClick={() => {
								navigate('/standing');
							}}
						>
							See Full
						</button>
						<button onClick={() => handleClick(10, 20)}>
							Bottom <i className='fas fa-arrow-right'></i>
						</button>
					</li>
				</ul>
			</div>
		);
	}
};

export default Standing;
