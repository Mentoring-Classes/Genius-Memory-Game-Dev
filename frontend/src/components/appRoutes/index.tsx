import { Routes, Route } from 'react-router-dom';
import Home from '../homePage';
import SoloGame from '../soloGame';
import createUser from '../createUserPage';
import NotFound from '../notFound';

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/register" element={<createUser />} />
			<Route path="/soloGame" element={<SoloGame />} />
		</Routes>
	);
};

export default AppRoutes;
