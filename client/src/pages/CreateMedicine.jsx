import { React, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const timeOptions = ['Morning', 'Afternoon', 'Evening'];
const typeOptions = ['Homeopathic', 'Medication', 'Supplement'];

const CreateMedicine = () => {
	const [title, setTitle] = useState('');
	const [instructions, setInstructions] = useState('');
	const [notes, setNotes] = useState('');
	const [time, setTime] = useState([]);
	const [type, setType] = useState(typeOptions[0]);
	const [redirect, setRedirect] = useState(false);

	const TimeCheckBoxes = () => {
		return (
			<div className='flex justify-between'>
				<label>
					<input
						type='checkbox'
						value='Morning'
						checked={time.includes('Morning')}
						onChange={handleCheckboxChange}
						/>
						Morning
				</label>
				<label>
					<input
						type='checkbox'
						value='Afternoon'
						checked={time.includes('Afternoon')}
						onChange={handleCheckboxChange}
						/>
						Afternoon
				</label>
				<label>
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
		<div className=''>
			<form onSubmit={createNewMedicine} className='flex flex-col mx-8 text-center [&>*]:p-2'>
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
				<TimeCheckBoxes />
				<select
					type={'type'}
					placeholder={'Type'}
					value={type}
					onChange={(e) => setType(e.target.value)}
					className=''
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
