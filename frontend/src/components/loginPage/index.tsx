import { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const loginPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<div className="login-container">
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
						onClick={(e) => e.preventDefault()}
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
