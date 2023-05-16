import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import Medicine from '../Medicine';

const IndexPage = () => {
	const [medicineInfo, setMedicine] = useState([]);
	const { userInfo } = useContext(UserContext);

	useEffect(() => {
		fetch('https://api.manymeds.net/medicine', {
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

	return (
		<div className='my-8 py-2'>
			<h1 className='mx-6 text-2xl font-light opacity-70'>
				Hi {userInfo.username}! Welcome back.
			</h1>

			<h2 className='mx-6 my-2 text-lg font-light opacity-70'>
				What would you like to do?
			</h2>

			<div className='flex justify-evenly my-7 [&>*]:bg-blue-100 [&>*]:w-56 flex-grow gap-5 mx-6'>
				<Link
					to={'/take-meds'}
					className='rounded-lg py-2 px-5 flex items-center justify-center transition hover:duration-300 shadow-md hover:shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)]'
				>
					<p>Take Medication</p>
				</Link>
				<Link
					to='/create'
					className='rounded-lg py-2 px-5 flex items-center justify-center transition hover:duration-300 shadow-md hover:shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)]'
				>
					<p>Add Medicine</p>
				</Link>
			</div>

			{medicineInfo.length > 0 &&
				medicineInfo.map((medicine, index) => (
					<div className='flex hover:bg-white transition-colors duration-400'>
						<Medicine {...medicine} key={index} />
					</div>
				))}
		</div>
	);
};

export default IndexPage;
