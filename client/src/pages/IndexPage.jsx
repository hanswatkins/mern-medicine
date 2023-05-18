import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import Medicine from '../Medicine';
import baseURL from '../BaseUrl';

const IndexPage = () => {
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

	if (!userInfo) {
		return (
			<div className='flex flex-col justify-center h-screen-header items-center gap-1 lg:gap-3'>
				<h1 className='text-5xl text-center lg:text-7xl font-bold opacity-70'>
					Welcome to ManyMeds.
				</h1>
				<p className='lg:text-2xl font-extralight'>
					<Link to={'/login'} className=' hover:text-green-500 italic'>
						Log in
					</Link>{' '}
					or{' '}
					<Link to={'/register'} className=' hover:text-green-500 italic'>
						Register
					</Link>{' '}
					to get started
				</p>
			</div>
		);
	} else {
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
	}
};

export default IndexPage;
