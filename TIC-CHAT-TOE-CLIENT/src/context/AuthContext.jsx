import { createContext, useState } from 'react'
import { loginRequets } from '../api/auth'

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [loginErrors, setLoginErrors] = useState([])

     const onLogin = async (user) => {
        try {
            
            const response = await loginRequets(user)
            setUser(response.data)
            setIsAuth(true)

        } catch (error) {
            setLoginErrors(error.response.data)
        }
    }

  return (
    <AuthContext.Provider value={{user, isAuth, loginErrors, onLogin}}>{ children }</AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider } // ta chido
