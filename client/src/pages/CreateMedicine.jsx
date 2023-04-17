import { React, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const CreateMedicine = () => {
	const [title, setTitle] = useState('');
	const [instructions, setInstructions] = useState('');
	const [notes, setNotes] = useState('');
	const [time, setTime] = useState('');
	const [type, setType] = useState('');
	const [redirect, setRedirect] = useState(false);

	async function createNewMedicine(ev) {
		ev.preventDefault();

		const data = {
			title,
			instructions,
			notes,
			time,
			type,
		};

		console.log(data);

		try {
			const response = await axios.post(
				'http://localhost:4000/medicine',
				data,
				{
					withCredentials: true,
				}
			);
			if (response.status === 200) {
				setRedirect(true);
			}
		} catch (error) {
			console.error(error);
		}
	}

	if (redirect) {
		return <Navigate to={'/'} />;
	}

	return (
		<form onSubmit={createNewMedicine}>
			<input
				type='title'
				placeholder={'Title'}
				value={title}
				onChange={(ev) => setTitle(ev.target.value)}
			/>
			<input
				type='instructions'
				placeholder={'Instructions'}
				value={instructions}
				onChange={(ev) => setInstructions(ev.target.value)}
			/>
			<input
				type='notes'
				placeholder={'Notes'}
				value={notes}
				onChange={(ev) => setNotes(ev.target.value)}
			/>
			<input
				type={'administration time'}
				placeholder={'Time'}
				value={time}
				onChange={(ev) => setTime(ev.target.value)}
			/>

			<input
				type='type'
				placeholder={'Type of Medicine'}
				value={type}
				onChange={(ev) => setType(ev.target.value)}
			/>

			<button style={{ marginTop: '5px' }}>Add Medicine</button>
		</form>
	);
};

export default CreateMedicine;
