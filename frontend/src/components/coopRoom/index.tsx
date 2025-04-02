import { useState } from 'react'
import { Link } from 'react-router-dom'
import './coopRoom.css'
import api from '../../services/api'
import SnackBar from '../snackbar'

const CoopRoom = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [registerError, setRegisterError] = useState(false)
	const [registerSucess, setRegisterSucess] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			await api.post('/user/register', {
				email,
				password,
			})
			setRegisterError(false)
		} catch (error: any) {
			console.error(error.response?.data?.error || 'Erro ao criar usuário')
			setRegisterSucess(false)
			setRegisterError(true)
		}
	}

	return (
		<div className="create-user-container">
			<SnackBar
				errorAlert={registerError}
				setErrorAlert={setRegisterError}
				sucessAlert={registerSucess}
				setSucessAlert={setRegisterSucess}
				sucessMessage="Usuário Criado"
				errorMessage="Erro ao criar usuário"
			/>

			<div className="create-user-card">
				<h1 className="create-user-title">Criar Sala</h1>

				<form className="create-user-form" onSubmit={handleSubmit}>
					<div className="form-group">
						<label>Nome da sala</label>
						<input
							type="name"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Digite o nome da sala:"
						/>
					<button type="submit" className="create-user-button">
						Criar Sala
					</button>
					</div>
					<div className="form-group">
						<label>Entrar na sala</label>
						<input
							type="name"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Digite a sala que deseja entrar:"
						/>
					</div>
					<button type="submit" className="create-user-button">
						Entrar em uma Sala
					</button>
				</form>

				<p className="create-user-link">
					Deseja sair? <Link to="/">Menu</Link>
				</p>
			</div>
		</div>
	)
}

export default CoopRoom
