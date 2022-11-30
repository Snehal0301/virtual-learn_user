import './App.css';
import Onboarding from './views/onboarding/onboarding';
import PasswordChanged from './views/onboarding/password-changed/PasswordChanged';

const App = () => {
  return (
    <div className="app">
      {/* <Onboarding /> */}
      <PasswordChanged/>
    </div>
  );
};

export default App;
