import './App.css';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MedicinePage from './pages/MedicinePage';
import DeletePage from './pages/DeletePage';
import CreateMedicine from './pages/CreateMedicine';
import { Route, Routes } from 'react-router-dom';
import { UserContextProvider } from './UserContext';
import EditMedicine from './pages/EditMedicine';

function App() {
	return (
		<div className=' overflow-clip'>
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
					</Route>
				</Routes>
			</UserContextProvider>
		</div>
	);
}

export default App;
