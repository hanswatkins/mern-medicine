import React, { useEffect, useState } from 'react';
import Medicine from '../Medicine';

const IndexPage = () => {
	const [medicine, setMedicine] = useState([]);
	useEffect(() => {
		fetch('http://localhost:4000/medicine').then((response) => {
			response.json().then((medicine) => {
				setMedicine(medicine);
			});
		});
	}, []);
	return (
        <>
            {/* <p>IndexPage.js</p> */}
			{medicine.length > 0 &&
				medicine.map((medicine, index) => <Medicine {...medicine} key={index} />)}
		</>
	);
};

export default IndexPage;
