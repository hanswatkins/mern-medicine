import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DeletePage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate('/', { replace: true });
		}, 1000);
	}, []);
	return (
		<div className='flex flex-col justify-center items-center h-48 text-xl font-thin'>
			<p>Medicine deleted</p>
			<p>Redirecting...</p>
		</div>
	);
};

export default DeletePage;
