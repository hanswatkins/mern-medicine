import { React, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';
import baseURL from '../BaseUrl';

const timeOptions = ['Morning', 'Afternoon', 'Evening'];
const typeOptions = ['Homeopathic', 'Medication', 'Supplement'];

const EditMedicine = () => {
	const { id } = useParams();
	const [title, setTitle] = useState('');
	const [instructions, setInstructions] = useState('');
	const [notes, setNotes] = useState('');
	const [time, setTime] = useState([]);
	const [doctor, setDoctor] = useState('');
	const [doctorSpecialty, setDoctorSpecialty] = useState('');
	const [type, setType] = useState(typeOptions[0]);
	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		fetch(baseURL + '/medicine/' + id).then((response) => {
			response.json().then((medicineInfo) => {
				setTitle(medicineInfo.title);
				setInstructions(medicineInfo.instructions);
				setNotes(medicineInfo.notes);
				setTime(medicineInfo.time);
				setType(medicineInfo.type);
				setDoctor(medicineInfo.doctor);
				setDoctorSpecialty(medicineInfo.doctorSpecialty);
			});
		});
	}, []);

	async function updateMedicine(ev) {
		ev.preventDefault();
		const data = {
			title,
			instructions,
			notes,
			time,
			type,
			doctor,
			doctorSpecialty,
		};

		console.log(data);

		try {
			const response = await axios.put(baseURL + '/medicine/' + id, data, {
				withCredentials: true,
			});
			if (response.status === 200) {
				setRedirect(true);
			}
		} catch (error) {
			console.error(error);
		}
	}

	if (redirect) {
		return <Navigate to={'/medicine/' + id} />;
	}

	const TimeCheckBoxes = () => {
		return (
			<div className='flex justify-between'>
				<label className='flex gap-1 text-gray-600 accent-red-300 p-2 [&>*]:text-xs'>
					<input
						type='checkbox'
						value='Morning'
						checked={time.includes('Morning')}
						onChange={handleCheckboxChange}
					/>
					Morning
				</label>
				<label className='flex gap-1 text-gray-600 accent-red-300 p-2'>
					<input
						type='checkbox'
						value='Afternoon'
						checked={time.includes('Afternoon')}
						onChange={handleCheckboxChange}
					/>
					Afternoon
				</label>
				<label className='flex gap-1 text-gray-600 accent-red-300 p-2'>
					<input
						type='checkbox'
						value='Evening'
						checked={time.includes('Evening')}
						onChange={handleCheckboxChange}
					/>
					Evening
				</label>
			</div>
		);
	};

	function handleCheckboxChange(event) {
		const value = event.target.value;
		if (time.includes(value)) {
			setTime(time.filter((item) => item !== value));
		} else {
			setTime([...time, value]);
		}
	}

	return (
		<div className=''>
			<form
				onSubmit={updateMedicine}
				className='flex flex-col mx-8 text-center [&>*]:p-2'
			>
				<input
					className='px-3 py-2 rounded-full shadow-inner my-3 border border-gray-300 placeholder:text-gray-500 focus:outline-slate-200'
					type='title'
					placeholder={'Title'}
					value={title}
					onChange={(ev) => setTitle(ev.target.value)}
				/>
				<input
					className='px-3 py-2 rounded-full shadow-inner my-3 border border-gray-300 placeholder:text-gray-500 focus:outline-slate-200'
					type='instructions'
					placeholder={'Instructions'}
					value={instructions}
					onChange={(ev) => setInstructions(ev.target.value)}
				/>
				<input
					className='px-3 py-2 rounded-full shadow-inner my-3 border border-gray-300 placeholder:text-gray-500 focus:outline-slate-200'
					type='notes'
					placeholder={'Notes'}
					value={notes}
					onChange={(ev) => setNotes(ev.target.value)}
				/>
				<TimeCheckBoxes />
				<select
					className='px-3 py-2 rounded-full shadow-inner my-3 border border-gray-300 text-gray-500 focus:outline-slate-200'
					type={'type'}
					placeholder={'Type'}
					value={type}
					onChange={(e) => setType(e.target.value)}
				>
					{typeOptions.map((value) => (
						<option value={value} key={value}>
							{value}
						</option>
					))}
				</select>
				<input
					className='px-3 py-2 rounded-full shadow-inner my-3 border border-gray-300 placeholder:text-gray-500 focus:outline-slate-200 '
					type='doctor'
					placeholder={'Prescribing Doctor Name'}
					value={doctor}
					onChange={(ev) => setDoctor(ev.target.value)}
				/>
				<input
					className='px-3 py-2 rounded-full shadow-inner my-3 border border-gray-300 placeholder:text-gray-500 focus:outline-slate-200'
					type='doctor specialty'
					placeholder={'Doctor Specialty'}
					value={doctorSpecialty}
					onChange={(ev) => setDoctorSpecialty(ev.target.value)}
				/>

				<button class='rounded-lg py-4 my-10 flex items-center justify-center transition hover:duration-300 shadow-md hover:shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)] text-gray-900'>
					<p>Update</p>
				</button>
			</form>
		</div>
	);
};

export default EditMedicine;
