import { useState } from 'react'
import { Link } from 'react-router-dom'
import './roomForm.css'
import axios from 'axios'
import SnackBar from '../snackbar'

const RoomForm = () => {
	const [roomName, setRoomName] = useState('')
	const [roomCode, setRoomCode] = useState('')
	const [registerError, setRegisterError] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			//   await axios.post('http://localhost:3000/user/register', {
			//     roomName,
			//     roomCode,
			//   });
			//   setRegisterError(false)
		} catch (error: any) {
			setRegisterError(true)
		}
	}

	// trycatch for join room here:
	//   try {

	//   } catch (error) {

	//   }
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

				<form className="create-room-form" onSubmit={handleSubmit}>
					<div className="form-group">
						<label>Entrar na sala</label>
						<input
							type="text"
							value={roomCode}
							onChange={(e) => setRoomCode(e.target.value)}
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
	)
}

export default RoomForm
