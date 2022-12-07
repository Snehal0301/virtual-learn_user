import { useDispatch } from 'react-redux'
import './App.css'
import { headerProfile } from './redux/reducers/headerProfileOptions'
import Router from './router/Router'
import HomePage from './views/dashboard/HomePage'
import Onboarding from './views/onboarding/onboarding'
import PasswordChanged from './views/onboarding/password-changed/PasswordChanged'
import Success_Page from './views/onboarding/success_page/Success_Page'
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1EAB0D'
    }
  }
})
const App = () => {
  const dispatch = useDispatch()
  return (
    <div
      className="app"
      onClick={() => {
        dispatch(headerProfile(false))
      }}
    >
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
      {/* <Onboarding /> */}
      {/* <HomePage />   */}
      {/* <Success_Page/> */}
      {/* <PasswordChanged/>  */}
    </div>
  )
}

export default App
