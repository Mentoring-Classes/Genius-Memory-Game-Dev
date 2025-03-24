import {useState} from 'react'
import "./createUser.css"
const CreateUser = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  
    return (
    <div className='create-user-container'>
      <h1 className='create-user-title'>Cadastrar Usuário</h1>
      <form className="create-user-form">

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
        > enviar
        
        </button>
   </form>
    </div>
  )
}

export default CreateUser
