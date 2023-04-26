import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

const Header = () => {
	const { setUserInfo, userInfo } = useContext(UserContext);

	useEffect(() => {
		fetch('http://localhost:4000/profile', {
			credentials: 'include',
		}).then((response) => {
			response.json().then((userInfo) => {
				setUserInfo(userInfo);
			});
		});
	}, []);

	function logout() {
		fetch('http://localhost:4000/logout', {
			credentials: 'include',
			method: 'POST',
		});
		setUserInfo(null);
	}

	const username = userInfo?.username;

	return (
		<header className='flex justify-between mx-2 my-2'>
			<Link to='/' className='font-bold text-2xl'>
				<h1>ManyMeds</h1>
			</Link>
			<nav className='flex gap-3 items-center'>
				{username && (
					<div className='[&>*]:bg-slate-300 [&>*]:py-1 [&>*]:px-6 [&>*]:rounded-lg [&>*]:text-xs [&>*]:mx-1'>
						<Link to='/create'>Add Medicine</Link>
						<a onClick={logout}>Log out</a>
					</div>
				)}
				{!username && (
					<>
						<Link to='/login'>Login</Link>
						<Link to='/register'>Register</Link>
					</>
				)}
			</nav>
		</header>
	);
};

export default Header;
