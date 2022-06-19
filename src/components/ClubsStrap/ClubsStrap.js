import React from 'react';
import { useNavigate } from 'react-router-dom';
import season2122 from '../../data/Season21-22';
// import Loading from '../BaseComponents/Loading';
import './ClubsStrap.scss';

const ClubsStrap = () => {
	let navigate = useNavigate();

	// if (!clubsList) {
	// 	return <Loading />;
	// } else {
	return (
		<div className='clubs__strap'>
			{season2122.clubs.map((el, index) => {
				return (
					<span
						key={index}
						onClick={() => {
							navigate(`/clubs/${el.id}`);
						}}
					>
						<img
							className='club__logo'
							src={el.logo}
							alt={`${el.name}'s logo`}
						/>
					</span>
				);
			})}
		</div>
	);
};
// };

export default ClubsStrap;
