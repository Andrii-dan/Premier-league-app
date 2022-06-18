import React from 'react';
import season2122 from '../../data/Season21-22';
// import Loading from '../BaseComponents/Loading';
import Player from './Player';

const Assists = () => {
	// const [assists, setAssists] = useState(false);

	// if (!assists) {
	// 	return <Loading />;
	// } else {
	return season2122.topAssists.slice(0, 3).map((el, index) => {
		return (
			<Player
				key={index}
				playerPhoto={el.photo}
				playerName={el.name}
				club={el.team}
				goals={el.assists}
			/>
		);
	});
};
// };

export default Assists;
