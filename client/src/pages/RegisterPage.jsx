import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	async function register(ev) {
		ev.preventDefault();

		const response = await fetch('https://manymeds-backend.onrender.com/api/register', {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: { 'Content-Type': 'application/json' },
		});
		if (response.status === 200) {
			alert('Registration successful');
		} else {
			alert('Registration failed');
		}
	}
	return (
		<div>
			<form
				className='h-[calc(100vh-100px)] flex flex-col justify-center px-16 py-24 lg:mx-auto lg:max-w-lg'
				onSubmit={register}
			>
				<h1 className='font-light text-xl text-center mt-7'>Register</h1>
				<Link
					to='/login'
					className='italic text-center text-slate-400 hover:text-green-500 text-xs'
				>
					Already signed up? Click here to log in.
				</Link>
				<input
					className='px-3 py-2 rounded-full shadow-inner my-3 border border-gray-300'
					type='text'
					placeholder='Username'
					value={username}
					onChange={(ev) => setUsername(ev.target.value)}
				/>
				<input
					className='px-3 py-2 rounded-full shadow-inner border border-gray-300'
					type='password'
					placeholder='Password'
					value={password}
					onChange={(ev) => setPassword(ev.target.value)}
				/>
				<button className='bg-slate-300 py-1 px-6 rounded-lg text-xs mx-6 my-6'>
					Register
				</button>
			</form>
		</div>
	);
};

export default RegisterPage;
