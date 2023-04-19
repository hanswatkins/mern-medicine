import { React, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const timeOptions = ['Morning', 'Afternoon', 'Evening'];
const typeOptions = ['Homeopathic', 'Medication', 'Supplement'];

const CreateMedicine = () => {
	const [title, setTitle] = useState('');
	const [instructions, setInstructions] = useState('');
	const [notes, setNotes] = useState('');
	const [time, setTime] = useState(timeOptions[0]);
	const [type, setType] = useState(typeOptions[0]);
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
		<div className="form-page">
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
				<select
					type={'administration time'}
					placeholder={'Time'}
					value={time}
					onChange={(e) => setTime(e.target.value)}
				>
					{timeOptions.map((value) => (
						<option value={value} key={value}>
							{value}
						</option>
					))}
				</select>
				<select
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
			
				<button style={{ marginTop: '5px' }}>Add Medicine</button>
			</form>
		</div>
	);
};

export default CreateMedicine;
