import React from 'react';
import './AllScorers.scss';
import Standing from '../Standing/Standing';
import season2122 from '../../data/Season21-22';
// import Loading from '../BaseComponents/Loading';

const AllAssistants = () => {
	// const [assists, setAssists] = useState(false);

	// if (!assists) {
	// 	return <Loading />;
	// } else {
	return (
		<>
			<div className='col-9 all-scorers__container'>
				<ul className='all-scorers'>
					<li className='all-scorers-title'>
						<span className='scorer__rank'></span>
						<span className='scorer__photo'></span>
						<span className='scorer__name'></span>
						<span className='scorer__appearences'>Appearences</span>
						<span className='scorer__minutes'>Minutes</span>
						<span className='scorer__penalty'>Passes</span>
						<span className='scorer__scored'>Assists</span>
					</li>
					{season2122.topAssists.map((el, index) => {
						return (
							<li key={index} className='col-12 scorer'>
								<span className='scorer__rank'>{index + 1}</span>
								<span className='scorer__photo'>
									<img src={el.photo} alt={`${el.name}'s`} />
								</span>
								<span className='scorer__name'>
									<h3>{el.name}</h3>
									<h4>{el.team}</h4>
								</span>

								<span className='scorer__appearences'>{el.appearences}</span>
								<span className='scorer__minutes'>{el.minutes}</span>
								<span className='scorer__penalty'>{el.passes}</span>
								<span className='scorer__scored'>{el.assists}</span>
							</li>
						);
					})}
				</ul>
			</div>
			<Standing />
		</>
	);
};
// };

export default AllAssistants;
