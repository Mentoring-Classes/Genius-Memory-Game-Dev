import 'intro.js/introjs.css';
import ButtonLink from '../buttonLink';
import './HomePage.css'
import { useEffect, useState } from 'react';
import ProfilePic from "../../assets/geniusLogo.svg"
import LogoutPic from "../../assets/logout.svg"

const Home = () => {
	var token = localStorage.getItem('token');
	var userId = localStorage.getItem('userId');
	var [logged, setLogged] = useState(false)

	useEffect(() => {
		if (token && userId) {
			setLogged(true)
		}
	}, [logged])


	return (
		<div className="HomePage">
			{logged ?
				<div className='HomePage-Profile'>
					<img src={ProfilePic} />
					<div className='HomePage-Profile-Buttons'>
						<button onClick={() => { localStorage.clear(), window.location.reload() }}>
							<img src={LogoutPic} alt="" />
							Sair da conta
						</button>
					</div>
				</div> :
				<div />
			}

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
