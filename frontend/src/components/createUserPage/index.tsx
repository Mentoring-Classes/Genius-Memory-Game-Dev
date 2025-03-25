import { useState } from 'react'
import { Link } from 'react-router-dom'
import './createUser.css'
import axios from 'axios'
import { AxiosError } from 'axios';
import Alert from '@mui/material/Alert'
import { Snackbar } from '@mui/material'

const CreateUser = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [registerError, setRegisterError] = useState(false)
	const [registerSucess, setRegisterSucess] = useState(false)
	const handleSubmit = async (e: any) => {
		e.preventDefault();

		try {
			const response = await axios.post('http://localhost:3000/user', {
				email,
				password,
			});

			console.log(response.data);
			setRegisterSucess(true)
			setRegisterError(false)
		} catch (error: any) {
			console.log(error.response?.data?.error || 'Erro ao criar usuário');
			setRegisterSucess(false)
			setRegisterError(true)
		}
	};
	return (
		<div className="create-user-container">
			<Snackbar
				open={registerSucess}
				autoHideDuration={3000}
				onClose={() => setRegisterSucess(false)}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			>
				<Alert className='PopUp' sx={{ fontSize: '1.25rem', paddingRight: '20px' }}>
					Registrado
				</Alert>
			</Snackbar>

			<Snackbar
				open={registerError}
				autoHideDuration={3000}
				onClose={() => setRegisterError(false)}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
			>
				<Alert className='PopUp' severity="error" sx={{ fontSize: '1.25rem', paddingRight: '20px' }}>
					Erro ao criar usuário
				</Alert>
			</Snackbar>
			
			<div className="create-user-card">
				<h1 className="create-user-title">Cadastre-se</h1>

				<form className="create-user-form">
					<div className="form-group">
						<label>E-mail</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Digite seu email:"
						/>
					</div>
					<div className="form-group">
						<label>Senha</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Digite sua senha:"
						/>
					</div>
					<button
						type="submit"
						onClick={handleSubmit}
						className="create-user-button"
					>
						Criar Conta
					</button>
				</form>

				<p className="create-user-link">
					Já tem conta? <Link to="/login">Entrar</Link>
				</p>
			</div>
		</div>
	)
}

export default CreateUser
