import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './components/appRoutes';

function App() {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	);
}

export default App;
