import { Navigate } from 'react-router-dom'

const RequireAuth = ({ children }: any) => {
  let isAuthenticated = JSON.parse(localStorage.getItem('auth') || 'false')
  return isAuthenticated ? children : <Navigate to={'/login'} />
}

export default RequireAuth
