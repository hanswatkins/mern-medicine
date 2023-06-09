import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import Medicine from '../Medicine';
import baseURL from '../BaseUrl';

const AmMeds = () => {
	const [medicineInfo, setMedicine] = useState([]);
	const { userInfo } = useContext(UserContext);

	useEffect(() => {
		fetch(baseURL + '/medicine', {
			credentials: 'include',
		})
			.then((response) => response.json())
			.then((medicine) => {
				setMedicine(medicine);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const eveningMedicines = medicineInfo.filter((medicine) =>
		medicine.time.includes('Evening')
	);

	if (eveningMedicines.length === 0) {
		return (
			<div className='my-6'>
				<h1 className='mx-6 text-xl font-light opacity-70'>
					You have no medications to take in the Evening.
				</h1>
				<Link
					to={'/take-meds'}
					className='mx-5 my-6 bg-blue-100 rounded-lg py-2 px-5 flex items-center justify-center transition hover:duration-300 shadow-md hover:shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)]'
				>
					<p>Go Back</p>
				</Link>
			</div>
		);
	}

	return (
		<div>
			<div className='flex justify-center items-center mt-7 mb-3 mx-6'>
				<h1 className='mx-6 text-xl font-light opacity-70'>
					Evening Medications
				</h1>
				<Link
					to={'/'}
					className='bg-blue-100 rounded-lg py-2 px-5 flex items-center justify-center transition hover:duration-300 shadow-md hover:shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)]'
				>
					<p>View all Medications</p>
				</Link>
			</div>

			{eveningMedicines.length > 0 &&
				eveningMedicines.map((medicine, index) => (
					<div className='flex hover:bg-white transition-colors duration-400'>
						<Medicine {...medicine} key={index} />
					</div>
				))}
		</div>
	);
};

export default AmMeds;
