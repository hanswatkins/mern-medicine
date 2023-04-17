import React from 'react';
import { Link } from 'react-router-dom';

const Medicine = ({ _id, title, instructions, notes, patient, time, type }) => {
	return (
		<div className='medicine'>
			{/* <div className='image'>
				<Link to={`/medicine/${_id}`}>
					<img src={'http://localhost:4000/' + cover} alt='' />
				</Link>
			</div> */}
			<div className='texts'>
				<Link to={`/medicine/${_id}`}>
					<h2>{title}</h2>
				</Link>
				<p className='type'>
					<a className='type'>{type}</a>
				</p>
				<p className='instructions'>{instructions}</p>
				<p className='time'>{time}</p>
			</div>
		</div>
	);
};

export default Medicine;
