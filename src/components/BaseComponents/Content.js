import React from 'react';
import ClubsStrap from '../ClubsStrap/ClubsStrap';
import './Content.scss';
import Loading from './Loading';

const Content = (props) => {
	return (
		<main className='container content__container'>
			<ClubsStrap />
			<div className='row'>{props.children}</div>
		</main>
	);
};

export default Content;
