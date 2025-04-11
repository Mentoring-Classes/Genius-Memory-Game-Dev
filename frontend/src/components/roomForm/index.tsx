import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './roomForm.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const RoomForm = () => {
	const [roomName, setRoomName] = useState('');

	const token = cookies.get('token');
	const navigate = useNavigate();
	const handleSubmit = async (e: any) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				`${import.meta.env.VITE_API_URL}coopRoom/create`,
				{
					roomName: roomName,
				},
				{
					headers: {
					  Authorization: `Bearer ${token}`,
					},
				}
			);
			const roomId = response.data.room._id;
			console.log(`ID da sala: ${roomId}`);
			navigate(`/coopGame/${roomId}`);
			console.log(response.data);
			
		} catch (error: any) {
			console.error(error);
		}
	};

	return (
		<div className="create-room-container">
			<div className="create-room-card">
				<h1 className="create-room-title">Modo Coop</h1>

				<form className="create-room-form" onSubmit={handleSubmit}>
					<div className="form-group">
						<label>Nome da sala</label>
						<input
							type="text"
							value={roomName}
							onChange={(e) => setRoomName(e.target.value)}
							placeholder="Digite o nome da sala"
						/>
					</div>
					<button type="submit" className="create-room-button">
						Criar Sala
					</button>
				</form>

				<form className="create-room-form">
					<div className="form-group">
						<label>Entrar na sala</label>
						<input
							type="text"
						
							placeholder="Digite o nome da sala:"
						/>
					</div>
					<button type="submit" className="create-room-button">
						Entrar em uma Sala
					</button>
				</form>

				<p className="create-room-link">
					Deseja sair? <Link to="/">Menu</Link>
				</p>
			</div>
		</div>
	);
};

export default RoomForm;
