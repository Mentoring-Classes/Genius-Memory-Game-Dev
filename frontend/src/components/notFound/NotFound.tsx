import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
	return (
		<div>
			<h1>Página não encontrada</h1>
			<p>Desculpe, a página que você está tentando acessar não existe.</p>
			<Link to="/">Voltar para a página inicial</Link>
		</div>
	);
};

export default NotFound;
