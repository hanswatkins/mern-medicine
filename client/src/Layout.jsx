import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
	return (
		<main className=''>
			<div className='pointer-events-none '>
				<div class='absolute top-0 -right-4 w-72 h-72 md:w-1/2 md:h-1/2 bg-indigo-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000'></div>
				<div class='absolute top-56 -left-4 w-72 h-72 md:w-1/2 md:h-1/2 bg-sky-300 rounded-full opacity-63 mix-blend-multiply filter blur-xl animate-blob'></div>
				<div class='absolute top-1/2 right-5 w-72 h-72 md:w-1/2 md:h-1/2 bg-red-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob'></div>
				<div class='absolute -bottom-8 w-72 h-72 bg-cyan-200 md:w-1/2 md:h-1/2 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000'></div>
				<div class='absolute -bottom-60 right-4 w-72 h-72 md:w-1/2 md:h-1/2 bg-orange-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000'></div>
			</div>
			<Header />
			<Outlet />
		</main>
	);
};

export default Layout;
