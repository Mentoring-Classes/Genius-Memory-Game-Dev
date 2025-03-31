import './styles/App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/appRoutes';
import './styles/global.css'
import BackgroundProvider from './components/BackgroundContext/BackgroundContext';

function App() {
	return (
		<BackgroundProvider>
			<BrowserRouter basename='/Genius-Memory-Game'>
				<AppRoutes />
			</BrowserRouter>
		</BackgroundProvider>
	);
}

export default App;
