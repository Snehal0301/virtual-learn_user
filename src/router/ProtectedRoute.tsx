import { Route, Navigate } from 'react-router-dom'
import Onboarding from '../views/onboarding/onboarding'

const RequireAuth = ({ children }: any) => {
  let isAuthenticated = !true
  return isAuthenticated ? children : <Navigate to={'/login'} />
}

export default RequireAuth
