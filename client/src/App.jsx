import './App.css';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MedicinePage from './pages/MedicinePage';
import DeletePage from './pages/DeletePage';
import CreateMedicine from './pages/CreateMedicine';
import TakeMeds from './pages/TakeMeds';
import AmMeds from './pages/AmMeds'
import PmMeds from './pages/PmMeds'
import EveningMeds from './pages/EveningMeds'
import { Route, Routes } from 'react-router-dom';
import { UserContextProvider } from './UserContext';
import EditMedicine from './pages/EditMedicine';

function App() {
	return (
		<div className=''>
			<UserContextProvider>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<IndexPage />} />
						<Route path={'/login'} element={<LoginPage />} />
						<Route path={'/register'} element={<RegisterPage />} />
						<Route path={'/medicine'} element={<MedicinePage />} />
						<Route path={'/create'} element={<CreateMedicine />} />
						<Route path={'/medicine/:id'} element={<MedicinePage />} />
						<Route path='/delete/:id' element={<DeletePage />} />
						<Route path='/edit/:id' element={<EditMedicine />} />
						<Route path='/take-meds' element={<TakeMeds />} />
						<Route path='/take-meds/am' element={<AmMeds />} />
						<Route path='/take-meds/pm' element={<PmMeds />} />
						<Route path='/take-meds/evening' element={<EveningMeds />} />

					</Route>
				</Routes>
			</UserContextProvider>
		</div>
	);
}

export default App;
