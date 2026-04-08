import { createContext, useContext, useState } from "react";

// 1. Creer le contexte
export const AuthContext = createContext()

// 2. Le Provider — enveloppe toute l'app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  const login = async ({username, password}) => {
    try{
      const response = await fetch("http://localhost:8000/api/token/", {
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({username, password})
      })
      if (!response.ok){
        throw new Error(`Erreur de connexion: ${response.status}`);
      }
      const data = await response.json()
      setUser(username)
      setToken(data.access)
      console.log(`Connectee ! Token: ${data.access}`)
      return data
    }
    catch (error){
      console.error("Error:", error)
    }
  }

  const logout = () => {
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// 5. Hook personnalisé pour utiliser le contexte facilement
export const useAuth = () => useContext(AuthContext)



// CANDMYZGJEUP