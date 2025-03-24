import { useState } from 'react'
import { Link } from 'react-router-dom'
import './createUser.css'

const CreateUser = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<div className="create-user-container">
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
						onClick={(e) => e.preventDefault()}
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
