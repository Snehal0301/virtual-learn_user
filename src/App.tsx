import { useDispatch } from 'react-redux';
import './App.css';
import { headerProfile } from './redux/reducers/headerProfileOptions';
import HomePage from './views/dashboard/HomePage';
import Onboarding from './views/onboarding/onboarding';

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
    </div>
  );
};

export default App;
