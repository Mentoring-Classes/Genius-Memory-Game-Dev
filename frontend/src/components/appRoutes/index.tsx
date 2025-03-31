import { Routes, Route } from 'react-router-dom';
import Home from '../homePage';
import SoloGame from '../soloGame';
import CreateUser from '../createUserPage';
import LoginPage from '../loginPage';
import NotFound from '../notFound';

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/Genius-Memory-Game" element={<Home />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/Genius-Memory-Game/register" element={<CreateUser/>} />
			<Route path="/Genius-Memory-Game/login" element={<LoginPage />} />
			<Route path="/Genius-Memory-Game/soloGame" element={<SoloGame />} />
		</Routes>
	);
};

export default AppRoutes;
