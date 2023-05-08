import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';

const MedicinePage = () => {
	const { id } = useParams();
	const [medicineInfo, setMedicineInfo] = useState(null);
	const { userInfo } = useContext(UserContext);
	useEffect(() => {
		fetch(`http://localhost:4000/medicine/${id}`).then((response) => {
			response.json().then((medicineInfo) => {
				setMedicineInfo(medicineInfo);
			});
		});
	}, []);

	async function handleDelete(id) {
		fetch(`http://localhost:4000/delete/${id}`, {
			method: 'DELETE',
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.log(error));
	}

	if (!medicineInfo) return 'no meds';
	return (
		<div className='h-screen flex flex-col justify-center items-center'>
			<div className='card bg-opacity-75 backdrop-filter backdrop-blur-lg border border-gray-500 border-opacity-30 shadow-lg mx-6 rounded-lg p-8'>
				{/* <h1>{medicineInfo._id}</h1> */}
				<h1 className='text-2xl font-medium opacity-70'>
					{medicineInfo.title}
				</h1>
				<ul>
					<li>
						<i>Instructions:</i> {medicineInfo.instructions}
					</li>
					<li>
						<i>Notes:</i> {medicineInfo.notes}
					</li>
					<li>
						<i>Medication type:</i> {medicineInfo.type}
					</li>
					<li>
						<i>Prescriber:</i> {medicineInfo.doctor}
					</li>
					<li>
						<i>Prescriber Specialty:</i> {medicineInfo.doctorSpecialty}
					</li>
				</ul>
				<ul className='flex justify-between mt-3'>
					<li> {medicineInfo.time.join(' | ')}</li>
				</ul>
			</div>
			{userInfo.id === medicineInfo.patient && (
				<div className='flex gap-5 my-5 [&>*]:shadow-lg [&>*]:p-3 [&>*]:rounded-lg'>
					<Link
						className='transition hover:duration-300 shadow-md hover:shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)] hover:cursor-pointer'
						to={`/edit/${medicineInfo._id}`}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
							/>
						</svg>
					</Link>
					<Link
						to={`/delete/${medicineInfo._id}`}
						onClick={() => handleDelete(medicineInfo._id)}
						className='transition hover:duration-300 shadow-md hover:shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)] hover:cursor-pointer'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
							/>
						</svg>
					</Link>
				</div>
			)}
		</div>
	);
};

export default MedicinePage;
