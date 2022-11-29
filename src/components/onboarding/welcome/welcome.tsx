import './welcome.css';

const WelcomeScreen = () => {
  return (
    <div className="welcomeScreen">
      <div className="welcome-title">Welcome</div>
      <div className="welcome-text">
        Are you ready to study easily in a virtual way?
      </div>
      <div className="welcome-btns">
        <button className="welcome-btn">Login</button>
        Or
        <button className="welcome-btn">Register</button>
      </div>
      <div className="welcome-footer">
        By creating new account, you agree to our{' '}
        <a href="#">Terms of Services</a> & <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
};

export default WelcomeScreen;
