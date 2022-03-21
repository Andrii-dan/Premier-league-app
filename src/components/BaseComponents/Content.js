import React from 'react';
import './Content.scss';

const Content = (props) => {
	return (
		<main className='container'>
			<div className='row'>{props.children}</div>
		</main>
	);
};

export default Content;
