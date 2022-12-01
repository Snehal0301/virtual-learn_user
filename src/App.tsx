import { useDispatch } from 'react-redux';
import './App.css';
import { headerProfile } from './redux/reducers/headerProfileOptions';
import HomePage from './views/dashboard/HomePage';
import Onboarding from './views/onboarding/onboarding';
import PasswordChanged from './views/onboarding/password-changed/PasswordChanged';
import Success_Page from './views/onboarding/success_page/Success_Page';

const App = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="app"
      onClick={() => {
        dispatch(headerProfile(false));
      }}
    >
      {/* <Onboarding /> */}
      <HomePage />  
      {/* <Success_Page/> */}
      {/* <PasswordChanged/>  */}
    </div>
  );
};

export default App;
