import React from 'react';
import { useParams } from 'react-router-dom';
import Club from '../../Club/Club';

const Clubs = () => {
	let { clubId } = useParams();

	return (
		<>
			<Club clubId={parseInt(clubId)} />
		</>
	);
};

export default Clubs;
