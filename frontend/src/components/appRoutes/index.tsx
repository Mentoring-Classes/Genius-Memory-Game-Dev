import { Routes, Route } from 'react-router-dom';
import Home from '../homePage';
import SoloGame from '../soloGame';
import NotFound from '../notFound';

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/soloGame" element={<SoloGame />} />
		</Routes>
	);
};

export default AppRoutes;
