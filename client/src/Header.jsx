import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const Header = () => {
	const { setUserInfo, userInfo } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		fetch('https://manymeds-backend.onrender.com/api/profile', {
			credentials: 'include',
		}).then((response) => {
			response.json().then((userInfo) => {
				setUserInfo(userInfo);
			});
		});
	}, []);

	function logout() {
		fetch('https://manymeds-backend.onrender.com/api/logout', {
			credentials: 'include',
			method: 'POST',
		});
		setUserInfo(null);
		navigate('/login');
	}

	const username = userInfo?.username;

	return (
		<header className='flex justify-between mx-3 my-4'>
			<Link to='/' className='font-bold text-2xl opacity-70'>
				<h1>ManyMeds</h1>
			</Link>
			<nav>
				{username && (
					<div className='[&>*]:text-xs flex gap-3'>
						<a
							onClick={logout}
							className='rounded-lg py-2 px-5 flex items-center justify-center transition hover:duration-300 shadow-md hover:shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)] hover:cursor-pointer'
						>
							<p>Log out</p>
						</a>
					</div>
				)}
				{!username && (
					<div className='flex gap-2'>
						<Link to='/login'>
							<p>Login</p>
						</Link>
						<Link to='/register'>
							<p>Register</p>
						</Link>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
