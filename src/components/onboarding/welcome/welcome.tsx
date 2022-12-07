import './welcome.css';
import { useNavigate } from 'react-router-dom';
import { virtualLearn_logo } from '../../../utils/svgIcons';

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="welcomeScreen">
      <div className="onboarding-detailsMobileLogo">{virtualLearn_logo}</div>
      <div className="welconescreen-landingIllustration">
        <img
          src={require('../../../assets/images/img_landing_illustration.png')}
          alt="landing illustration"
        />
      </div>
      <div className="welcome-title">Welcome</div>
      <div className="welcome-text">
        Are you ready to study easily in a virtual way?
      </div>
      <div className="welcome-btns">
        <button
          className="welcome-btn"
          onClick={() => {
            navigate('login');
          }}
        >
          Login
        </button>
        Or
        <button
          className="welcome-btn"
          onClick={() => {
            navigate('register');
          }}
        >
          Register
        </button>
      </div>
      <div className="welcome-footer">
        By creating new account, you agree to our{' '}
        <a href="#">Terms of Services</a> & <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
};

export default WelcomeScreen;
