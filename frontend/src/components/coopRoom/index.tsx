import { useState } from 'react';
import RoomForm from '../roomForm';
import ButtonLink from '../buttonLink';
import './coopRoom.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const CoopRoom = () => {
	const [isAuth] = useState<string | null>(cookies.get('token') || null);
	const [userId] = useState<string | null>(cookies.get('userId'));

	return (
		<div className="coopRoom">
			<h1 id="coopTitle">Cooperativo</h1>
			{isAuth && userId ? (
				<RoomForm />
			) : (
				<div className="notLoggedIn">
					<p>Faça login primeiro</p>
					<ButtonLink buttontext="Voltar" to="/"></ButtonLink>
				</div>
			)}
		</div>
	);
};

export default CoopRoom;
