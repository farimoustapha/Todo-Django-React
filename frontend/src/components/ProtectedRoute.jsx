// import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ children }) => {
    const { token } = useAuth()
    // ✅ Navigate est un composant JSX — pas une fonction
    return token ? children : <Navigate to="/login" />
    // return (
    //     <>
    //         {token ? ( {children}) : ( Navigate("/login") ) }
    //     </>
    // )
}

export default ProtectedRoute