import Dashbord from "./dashbord/components/Dashbord"
import ProtectedRoute from "./components/ProtectedRoute"
import { Routes, Route, Link } from "react-router-dom"
import TodoList from './todos/components/TodoList'
import DepenseDetail from "./depenses/components/DepenseDetail"
import DepenseList from './depenses/components/DepenseList'
import { AuthProvider, useAuth } from "./context/AuthContext"
import Login from "./pages/Login"

// import { useState } from 'react'
import './App.css'


const Nav =() => {
  const { user, logout} = useAuth()

  return (
    <nav>
      <Link to="/">Depense</Link>
      <br />
      <Link to="/todos">Todos</Link>
      <br />
      <Link to="/dashbord">Dashbord</Link>
      <br />
      {user ? (
        <>
          <span>Bonjour {user} !</span>
          <button onClick={logout}>Deconnexion</button>
        </>
      ) : (
        <Link to="/login">Connexion</Link>
      )}
    </nav>
  )
}

function App() {

  return (
        <AuthProvider>
          <div>
            <Nav />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={
                <ProtectedRoute>
                  <DepenseList/>
                </ProtectedRoute>
                }></Route>
              <Route path="/depenses/:id" element={<DepenseDetail />} /> 
              <Route path="/dashbord" element={
                <ProtectedRoute>
                  <Dashbord />
                </ProtectedRoute>
              } /> 
              <Route path="/todos" element={
                <ProtectedRoute>
                  <TodoList/>
                </ProtectedRoute>
                } />
              <Route path="*" element={<h1>404 — Page introuvable</h1>} />
            </Routes>
          </div>
        </AuthProvider>
  )
}

export default App

// const Likes = () => {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <p>Count : {count}</p>
//       <button onClick={() => setCount(count + 1)}>Liker</button>
//       <button onClick={() => setCount(Math.max(0, count - 1))}>Retirer</button>
//       <button onClick={() => setCount(0)}>Reset</button>

//       {count >= 10 && <p>🔥 Populaire !</p>}
//     </div>
//   )
// }
