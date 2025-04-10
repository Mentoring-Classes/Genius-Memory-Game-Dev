import 'intro.js/introjs.css';
import ButtonLink from '../buttonLink';
import './HomePage.css';
import { useEffect, useState } from 'react';
import ProfilePic from '../../assets/geniusLogo.svg';
import LogoutPic from '../../assets/logout.svg';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();
const Home = () => {
	var [logged, setLogged] = useState(false);
	var [userName, setUserName] = useState(false);

	useEffect(() => {
		const token = cookies.get('token');

		axios.get('http://localhost:3000/verify-token', {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((res) => {
			setLogged(true);
			setUserName(res.data.user.userName);
		})
		.catch((err) => {
			console.error("Token inválido ou erro na verificação:", err);
			clearAuthCookies();
			setLogged(false);
		});
	}, []);
	const clearAuthCookies = () => {
		cookies.remove('token', { path: '/' });
	};

	return (
		<div className="HomePage">
			{logged ? (
				<div className="HomePage-Profile">
					<img src={ProfilePic} />
					
					<div className="HomePage-Profile-Buttons">
					<p id='logged'>{userName}</p>
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
