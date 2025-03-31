import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../services/api'
import SnackBar from '../snackbar'
import './login.css'

const loginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState(false)
  const [loginSucess, setLoginSucess] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await api.post('/user/login', {
        email,
        password,
      })

      localStorage.setItem('token', response.data.token)
      localStorage.setItem('userId', response.data.id)
      setLoginSucess(true)
      setLoginError(false)

      setTimeout(() => {
        navigate('/')
      }, 800)
    } catch (error: any) {
      console.error(error.response?.data?.error || 'Erro ao fazer login')
      setLoginSucess(false)
      setLoginError(true)
    }
  }

  return (
    <div className="login-container">
      <SnackBar
        errorAlert={loginError}
        setErrorAlert={setLoginError}
        sucessAlert={loginSucess}
        setSucessAlert={setLoginSucess}
        sucessMessage="Login feito com sucesso"
        errorMessage="Erro ao fazer login"
      />

      <div className="login-card">
        <h1 className="login-title">Entrar</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email:"
              required
            />
          </div>

          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha:"
              required
            />
          </div>

          <button type="submit" className="login-button">
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
