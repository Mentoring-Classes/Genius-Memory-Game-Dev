import {useState} from 'react'

const createUser = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  
    return (
    <div>
      <h1>Cadastrar Usuário</h1>
        <div>
            <input
             type="email"
             onChange={(e)=>setEmail(e.target.value)}
             placeholder='SeuEmail@email.com'
              />
        </div>
        <div>
            <input
             type="password"
             onChange={(e)=>setPassword(e.target.value)}
             placeholder='Digite Sua Senha'
              />
        </div>
        <button
        type='submit'
        >
        
        </button>
    </div>
  )
}

export default createUser
