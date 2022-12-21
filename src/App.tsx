import { useDispatch } from 'react-redux';
import './App.css';
import { headerProfile } from './redux/reducers/headerProfileOptions';
import Router from './router/Router';
import HomePage from './views/dashboard/HomePage';
import Onboarding from './views/onboarding/onboarding';
import PasswordChanged from './views/onboarding/password-changed/PasswordChanged';
import Success_Page from './views/onboarding/success_page/Success_Page';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getToken } from "firebase/messaging";
import {messaging} from './firebase'
import { useEffect } from 'react';
const theme = createTheme({
  palette: {
    primary: {
      main: '#1EAB0D',
    },
  },
});

const App = () => {
  const dispatch = useDispatch();

async function requestPermission() {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    const token = await getToken(messaging, { vapidKey:"BGJigd--6cJyWksMmJ5BEGN8o5Lf0XBuxMxXUAerii0P_pCjBDIZKXKCztL-dK1oezhVYfUzDew-uXmMhyMRh5Y"});
    console.log("Token Gen",token)
  }
  else if (permission === 'denied') {
    alert("you denied for the notification")
  }
}
useEffect(() => {
  requestPermission();
}, [])

  return (
    <div
      className="app"
      onClick={() => {
        dispatch(headerProfile(false));
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
  );
};

export default App;
