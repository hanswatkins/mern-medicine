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
				// console.log('patient id: ', medicine), console.log('userInfo: ', token);
			});
		});
	}, []);

	

	return (
		<>
			{/* <h1 className='greeting'>Hi {userInfo.username}</h1> */}
			{/* {console.log(medicineInfo._id === userInfo.id)} */}
			{/* <p>IndexPage.js</p> */}
			<h1 className='mx-6 my-8 text-xl font-light'>Hi {userInfo.username}, here are your meds!</h1>
			{medicineInfo.length > 0 &&
				medicineInfo.map((medicine, index) => (
					<Medicine {...medicine} key={index} />
				))}
		</>
	);
};

export default IndexPage;
