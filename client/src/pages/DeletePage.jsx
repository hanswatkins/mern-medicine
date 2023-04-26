import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DeletePage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate('/', { replace: true });
		}, 500);
	}, []);
	return (
		<div className='redirect-page'>
			<p>Medicine deleted</p>
			<p>Redirecting...</p>
		</div>
	);
};

export default DeletePage;
