import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login({username, password})
    navigate('/')

  }

  return (
    <div>
       <input
        type="text"
        placeholder="Username"
        value={username}                
        onChange={(e) => setUsername(e.target.value)}
        />
        <input
        type="password"
        placeholder="Password"
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Connexion</button>
    </div>
  )
}

export default Login