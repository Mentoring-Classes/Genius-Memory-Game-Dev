import 'intro.js/introjs.css';
import ButtonLink from '../buttonLink';
import './HomePage.css';
import { useEffect, useState } from 'react';
import ProfilePic from '../../assets/geniusLogo.svg';
import LogoutPic from '../../assets/logout.svg';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const Home = () => {
	var token = cookies.get('token');
	var userId = cookies.get('userId');
	var [logged, setLogged] = useState(false);

	useEffect(() => {
		if (token && userId) {
			setLogged(true);
		}
	}, [logged]);
	const clearAuthCookies = (): void => {
		cookies.remove('token', { path: '/Genius-Memory-Game' });
		cookies.remove('userId', { path: '/Genius-Memory-Game' });
	};

	return (
		<div className="HomePage">
			{logged ? (
				<div className="HomePage-Profile">
					<img src={ProfilePic} />
					<div className="HomePage-Profile-Buttons">
						<button
							onClick={() => {
								clearAuthCookies();
								window.location.reload();
							}}
						>
							<img src={LogoutPic} alt="" />
							Sair da conta
						</button>
					</div>
				</div>
			) : (
				<div />
			)}

			<h1>Genius Game</h1>
			<div className="GameModes">
				<ButtonLink buttontext="Solo Game" to="/soloGame" id="Solo-Game" />
				<ButtonLink buttontext="1 vs 1" to="/" id="One-vs-One" />
				<ButtonLink buttontext="Co-op" to="/coop" id="Co-op" />
				<ButtonLink buttontext="Conta" to="/register" id="Conta" />
			</div>
		</div>
	);
};

export default Home;
