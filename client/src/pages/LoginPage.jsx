import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

const LoginPage = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [redirect, setRedirect] = useState(false);
	const { setUserInfo } = useContext(UserContext);

	// login function
	async function login(ev) {
		ev.preventDefault();
		const response = await fetch('https://www.manymeds.net/api/login', {
			method: 'POST',
			body: JSON.stringify({ username, password }),
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
		});

		if (response.ok) {
			response.json().then((userInfo) => {
				setUserInfo(userInfo);
				setRedirect(true);
			});
		} else {
			alert('wrong credentials');
		}
	}

	if (redirect) {
		return <Navigate to={'/'} />;
	}

	return (
		<form
			className='h-[calc(100vh-100px)] flex flex-col justify-center px-16 py-24 lg:mx-auto lg:max-w-lg'
			onSubmit={login}
		>
			<h1 className='font-light text-xl text-center mt-7'>
				Log in to view your meds
			</h1>
			<Link
				to='/register'
				className='italic text-center text-slate-400 hover:text-green-500 text-xs my-1'
			>
				New user? Click here to get started.
			</Link>
			<input
				className='px-3 py-2 rounded-full shadow-inner my-3 border border-gray-300'
				type='text'
				placeholder='Username'
				value={username}
				autoComplete='true'
				onChange={(ev) => setUsername(ev.target.value)}
			/>
			<input
				className='px-3 py-2 rounded-full shadow-inner border border-gray-300'
				type='password'
				placeholder='Password'
				value={password}
				autoComplete='true'
				onChange={(ev) => setPassword(ev.target.value)}
			/>
			<button className='bg-slate-300 py-1 px-6 rounded-lg text-xs mx-6 my-6'>
				Login
			</button>
		</form>
	);
};

export default LoginPage;
