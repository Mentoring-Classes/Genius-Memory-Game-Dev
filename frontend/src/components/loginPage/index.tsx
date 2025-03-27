import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import SnackBar from '../snackbar'
import './login.css'

const loginPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loginError, setLoginError] = useState(false)
	const [loginSucess, setLoginSucess] = useState(false)
	const navigate = useNavigate();

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		try {
			const response = await axios.post('http://localhost:3000/user/login', {
				email,
				password,
			});

			localStorage.setItem('token', response.data.token);
        	localStorage.setItem('userId', response.data.id);
			setLoginSucess(true)
			setLoginError(false)
			navigate("/");

		} catch (error: any) {
			console.log(error.response?.data?.error || 'Erro ao criar usuário');
			setLoginSucess(false)
			setLoginError(true)
		}
	};

	return (
		<div className="login-container">
			<SnackBar
				errorAlert={loginError}
				setErrorAlert={setLoginError}
				sucessAlert={loginSucess}
				setSucessAlert={setLoginSucess}
				sucessMessage='Login feito com sucesso'
				errorMessage='Erro ao fazer login' />

			<div className="login-card">
				<h1 className="login-title">Entrar</h1>

				<form className="login-form">
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
						className="login-button"
					>
						Entrar
					</button>
				</form>

				<p className="login-link">
					Ainda não tem conta? <Link to="/register">Cadastre-se</Link>
				</p>
			</div>
		</div>
	)
}

export default loginPage
