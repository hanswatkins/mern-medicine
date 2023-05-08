import React from 'react';
import { Link } from 'react-router-dom';

const Medicine = ({
	_id,
	title,
	instructions,
	notes,
	patient,
	time,
	type,
	doctor,
	doctorSpecialty,
}) => {
	const timeArray = [...time].reverse();

	// Create an array of key-value pairs
	const fields = Object.entries({
		title,
		instructions,
		notes,
		doctor,
		doctorSpecialty,
	});

	// Filter out any pairs where the value is null or an empty string
	const filteredFields = fields.filter(
		([key, value]) => value != null && value !== ''
	);

	return (
		<Link to={`/medicine/${_id}`} className='rounded-2xl p-3 shadow-md mx-6 mt-4 bg-clip-padding backdrop-filter backdrop-blur-sm border border-gray-50 border-opacity-30 w-screen'>
			<div>
				<div className=''>
					<h2 className='text-xl font-medium'>{title} -- {type}</h2>

					<div className='medicine-details'>
						{filteredFields.map(([key, value]) => (
							<p className={key} key={key}>
								<i>{key.charAt(0).toUpperCase() + key.slice(1)}:</i> {value}
							</p>
						))}
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
