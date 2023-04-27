import React from 'react';
import { Link } from 'react-router-dom';

const Medicine = ({ _id, title, instructions, notes, patient, time, type }) => {
	const timeArray = [...time].reverse();
	return (
		<Link to={`/medicine/${_id}`} className='rounded-2xl p-3 shadow-md mx-6 mt-4 bg-clip-padding backdrop-filter backdrop-blur-sm border border-gray-50 border-opacity-30 w-screen ' >
			<div>
				{/* <div className='image'>
				<Link to={`/medicine/${_id}`}>
					<img src={'http://localhost:4000/' + cover} alt='' />
				</Link>
			</div> */}
				<div className=''>
					<h2 className='text-xl font-medium'>{title} -- {type}</h2>

					<div className='medicine-details'>
						{/* <p className=''>
							<i>Type:</i> {type}
						</p> */}
						<p className='instructions'>
							<i>Instructions:</i> {instructions}
						</p>
						<p className='notes'>
							<i>Notes:</i> {notes}
						</p>
						<span className='flex justify-between mt-4 md:justify-start md:gap-4'>
							{timeArray.map((time, index) => (
								<p
									className='bg-white py-1 px-3 rounded-2xl shadow-md bg-clip-padding backdrop-filter backdrop-blur-sm border border-gray-50 border-opacity-30'
									key={index}
								>
									{time}
								</p>
							))}
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Medicine;
