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
			<Link to={`/medicine/${_id}`}><div className='texts'>
				
					<h2>{title}</h2>
				
				<p className='instructions'>{instructions}</p>
				<p className='notes'>{notes}</p>
				<p className='time'>{time}</p>
				<p className='type'>{type}</p>
			</div></Link>
		</div>
	);
};

export default Medicine;
