import { useEffect } from 'react';
import introJs from 'intro.js';
import 'intro.js/introjs.css';

import { ButtonLink } from '../buttonLink';
import './HomePage.css'

const Home = () => {
	const setupIntro = () => {
		introJs().setOptions({
			steps: [
				{
					intro: `
						<div style="text-align: center;">
							Bem-vindo ao Genius Game 
							<img src="/maka.gif" class='gif' alt="Gif de boas-vindas" />
						</div>
					`,
				},
				{ element: '.GameModes', intro: 'Escolha seu modo de jogo aqui' },
				{ element: '#Solo-Game', intro: 'Nesse modo de jogo é igual aos tradicionais' },
				{ element: '.NaoLogado', intro: 'Para jogar os outros modos, faça login pelo Google' },
				{ element: '#One-vs-One', intro: 'Nesse modo você pode desafiar outras pessoas' },
				{ element: '#Co-op', intro: 'Nesse modo você e outro jogador revezam os rounds' },
			],
		}).start();
	};

	useEffect(() => {
		setupIntro();
	}, []);

	return (
		<div className="HomePage">
			<h1>Genius Game</h1>
			<div className="GameModes">
				<ButtonLink buttontext="Solo Game" to="/" id="Solo-Game" />
				<ButtonLink buttontext="1 vs 1" to="/" id="One-vs-One" />
				<ButtonLink buttontext="Co-op" to="/" id="Co-op" />
			</div>
		</div>
	);
};

export default Home;
