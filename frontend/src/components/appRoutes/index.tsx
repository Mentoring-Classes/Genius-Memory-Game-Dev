import { Routes, Route } from 'react-router-dom';
import Home from '../homePage';
import NotFound from '../notFound';

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default AppRoutes;
