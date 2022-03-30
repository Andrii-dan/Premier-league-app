import React from 'react';
import './SingleStatContainer.scss';

const SingleStatContainer = ({
	containerTitle,
	firstTitle,
	secondTitle,
	thirdTitle,
	firstStat,
	secondStat,
	thirdStat,
}) => {
	return (
		<div className='col-12 stat__info-container'>
			<div className='col-12'>
				<h3 className='stat__info-container-title'>{containerTitle}</h3>
			</div>
			<div className='col-12 stat__info-box'>
				<div className='col-4 stat__info'>
					<span className='stat__info-title'>{firstTitle}</span>
					<span>{firstStat}</span>
				</div>
				<div className='col-4 stat__info'>
					<span className='stat__info-title'>{secondTitle}</span>
					<span>{secondStat}</span>
				</div>
				<div className='col-4 stat__info'>
					<span className='stat__info-title'>{thirdTitle}</span>
					<span>{thirdStat}</span>
				</div>
			</div>
		</div>
	);
};

export default SingleStatContainer;
