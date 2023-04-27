import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../UserContext';
import Medicine from '../Medicine';

const IndexPage = () => {
	const [medicineInfo, setMedicine] = useState([]);
	const { userInfo } = useContext(UserContext);
	useEffect(() => {
		fetch('http://localhost:4000/medicine').then((response) => {
			response.json().then((medicine) => {
				setMedicine(medicine);
			});
		});
	}, []);

	return (
		<div className='my-8 py-2'>
			<h1 className='mx-6 text-xl font-light opacity-70'>
				Hi {userInfo.username}, here are your meds!
			</h1>
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
