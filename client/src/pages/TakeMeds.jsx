import { React } from 'react';
import { Link } from 'react-router-dom';

const TakeMeds = () => {
	return (
		<div className='h-[calc(100vh-64px)] flex justify-center items-center'>
			<div className='flex flex-col gap-8 justify-between items-center my-7 [&>*]:bg-blue-100 mx-5 w-2/3'>
				<Link
					to={'/take-meds/am'}
					className='rounded-lg w-full py-10 mx-2 flex flex-grow items-center justify-center transition hover:duration-300 shadow-md hover:shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)]'
				>
					<p>AM</p>
				</Link>
				<Link
					to={'/take-meds/pm'}
					className='rounded-lg w-full py-10 mx-2 flex flex-grow items-center justify-center transition hover:duration-300 shadow-md hover:shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)]'
				>
					<p>PM</p>
				</Link>
				<Link
					to={'/take-meds/evening'}
					className='rounded-lg w-full py-10 mx-2 flex flex-grow items-center justify-center transition hover:duration-300 shadow-md hover:shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)]'
				>
					<p>Evening</p>
				</Link>
			</div>
		</div>
	);
};

export default TakeMeds;
