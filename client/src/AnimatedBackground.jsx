import React from 'react';

const AnimatedBackground = () => {
	return (
		<div className='background pointer-events-none'>
			<div className='absolute top-0 -right-4 w-72 h-72 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] xl:w-[800px] xl:h-[800px] 2xl:w-[900px] 2xl:h-[900px] bg-indigo-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000'></div>

			<div className='absolute top-56 -left-4 w-72 h-72 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] xl:w-[800px] xl:h-[800px] 2xl:w-[900px] 2xl:h-[900px] bg-sky-300 rounded-full opacity-63 mix-blend-multiply filter blur-xl animate-blob'></div>

			<div className='absolute top-1/2 right-5 w-72 h-72 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] xl:w-[800px] xl:h-[800px] 2xl:w-[900px] 2xl:h-[900px] bg-red-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob'></div>

			<div className='absolute -bottom-8 w-72 h-72 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] xl:w-[800px] xl:h-[800px] 2xl:w-[900px] 2xl:h-[900px] bg-cyan-200  rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000'></div>

			<div className='absolute -bottom-60 right-4 w-72 h-72 md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] xl:w-[800px] xl:h-[800px] 2xl:w-[900px] 2xl:h-[900px] bg-orange-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000'></div>
		</div>
	);
};

export default AnimatedBackground;
