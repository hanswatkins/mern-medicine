import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';

const MedicinePage = () => {
	const { id } = useParams();
	const [medicineInfo, setMedicineInfo] = useState(null);
	const { patientInfo } = useContext(UserContext);
	useEffect(() => {
		fetch(`http://localhost:4000/medicine/${id}`).then((response) => {
			response.json().then((medicineInfo) => {
				setMedicineInfo(medicineInfo);
			});
		});
	}, []);

	if (!medicineInfo) return 'no meds';
	return (
		<div className='medicine-page'>
			{/* <h1>{medicineInfo._id}</h1> */}
			<h1>{medicineInfo.title}</h1>
			<ul>
				<li>{medicineInfo.instructions}</li>
				<li>{medicineInfo.notes}</li>
				<li>{medicineInfo.time}</li>
				<li>{medicineInfo.type}</li>
			</ul>
		</div>
	);
};

export default MedicinePage;
