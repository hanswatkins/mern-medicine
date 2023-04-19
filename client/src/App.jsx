import './App.css';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MedicinePage from './pages/MedicinePage';
import CreateMedicine from './pages/CreateMedicine';
import { Route, Routes } from 'react-router-dom';
import { UserContextProvider } from './UserContext';

function App() {
	return (
		<UserContextProvider>
			<Routes>
				<Route path='/' element={<Layout />}>
					
					<Route index element={<IndexPage />} />
					
					<Route path={'/login'} element={<LoginPage />} />
					
					<Route path={'/register'} element={<RegisterPage />} />
					
					<Route path={'/medicine'} element={<MedicinePage />} />

					<Route path={'/medicine/:id'} element={<MedicinePage />} />
					
					<Route path={'/create'} element={<CreateMedicine />} />

				</Route>
			</Routes>
		</UserContextProvider>
	);
}

export default App;
