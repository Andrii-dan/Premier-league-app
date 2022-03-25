import React, { useState, useEffect } from 'react';
import './FixturesDate.scss';
import SingleFixture from './SingleFixture';

const FixturesDate = ({ fixturesByDate, fixtureDate }) => {
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	return (
		<div className='fixture__date-container'>
			{fixturesByDate.map((el, index) => {
				return (
					<>
						<div index={index} className='col-12 fixture__date'>
							<h3 className='fixture__date-info'>
								{days[new Date(fixtureDate[index]).getDay()]}{' '}
								{new Date(fixtureDate[index]).getDate()}{' '}
								{months[new Date(fixtureDate[index]).getMonth()]}
							</h3>
						</div>

						{el.map((el, index) => {
							return <SingleFixture key={index} matchData={el} />;
						})}
					</>
				);
			})}
		</div>
	);
};

export default FixturesDate;
