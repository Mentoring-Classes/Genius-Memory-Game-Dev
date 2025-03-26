import 'intro.js/introjs.css';

import ButtonLink from '../buttonLink';
import './HomePage.css'

const Home = () => {
	return (
		<div className="HomePage">
			<h1>Genius Game</h1>
			<div className="GameModes">
				<ButtonLink buttontext="Solo Game" to="/soloGame" id="Solo-Game" />
				<ButtonLink buttontext="1 vs 1" to="/" id="One-vs-One" />
				<ButtonLink buttontext="Co-op" to="/" id="Co-op" />
				<ButtonLink buttontext="Conta" to="/register" id="Conta" />
			</div>
		</div>
	);
};

export default Home;
