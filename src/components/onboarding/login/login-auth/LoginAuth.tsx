import './LoginAuth.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { facebookIcon, googleIcon } from '../../../../utils/svgIcons';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../../redux/reducers/loginSlice';
import { useEffect, useState } from 'react';

const LoginAuth = () => {
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginResponse = useSelector((state: any) => state.login);

  const showError = (msg: any) =>
    toast(
      <div className="loginAuth-showError">
        <div className="loginAuth-showErrorIcon">
          <img
            src={require('../../../../assets/icons/icn_invalid error.png')}
            alt="invalid"
          />
        </div>
        <div className="loginAuth-showErrorMessage">{msg}</div>
      </div>,
      {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: true,
      }
    );

  const submitHandler = (e: any) => {
    e.preventDefault();
    const credentials = {
      userName: e.target.username.value,
      password: e.target.password.value,
    };

    if (e.target.username.value !== '' && e.target.password.value !== '') {
      console.log('credentials', credentials);
      dispatch(login(credentials));
      // localStorage.setItem('auth', 'true')
      // navigate('/')
      // window.location.reload()
      setSubmitted(true);
    }
  };

  useEffect(() => {
    responseFunction();
  }, [loginResponse && loginResponse.isRejected && loginResponse.message]);

  useEffect(() => {
    console.log(
      'login message',
      loginResponse && loginResponse.data && loginResponse.data.data
    );
    localStorage.setItem(
      'Token',
      loginResponse &&
        loginResponse.data &&
        loginResponse.data.data &&
        loginResponse.data.data.jwtToken
    );
  }, [loginResponse && loginResponse.isSuccess && loginResponse.data]);

  const responseFunction = () => {
    if (loginResponse && loginResponse.message && loginResponse.message.error) {
      showError(loginResponse.message.error);
    }
    if (loginResponse && !loginResponse.message) {
      submitted && showError('Server Error');
    }
  };

  return (
    <div className="loginAuth">
      <div className="loginAuth-title">Welcome Back!</div>
      <div className="loginAuth-text">
        Easy to learn anytime and anywhere. Login to your account
      </div>
      <div className="loginAuth-buttons">
        <button>{facebookIcon}</button>
        <button>{googleIcon}</button>
      </div>
      <div className="loginAuth-Form">
        <form
          className="loginAuth-FormContainer"
          autoComplete="off"
          onSubmit={submitHandler}
        >
          {' '}
          <div className="loginAuth-FormInput">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              className="loginAuth-formInput "
            />
            {/* loginAuth-formInputSuccess */}
            {/* loginAuth-formInputError */}
            <label htmlFor="username">Username</label>
          </div>
          <div className="loginAuth-FormInput">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="loginAuth-formInput"
            />
            <label htmlFor="password">Password</label>
          </div>
          <div
            className="loginAuth-noAccount"
            style={{
              width: ' 100%',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <span
              className="loginAuth-regLink"
              onClick={() => {
                navigate('/onboarding/forgotPassword');
              }}
            >
              Forgot password?{' '}
            </span>
          </div>
          <button className="loginAuth-formSubmit">Continue</button>
        </form>
        <div className="loginAuth-noAccount">
          Don’t have a account?{' '}
          <span
            className="loginAuth-regLink"
            onClick={() => {
              navigate('/onboarding/register');
            }}
          >
            Register
          </span>
        </div>
      </div>
      {/* onClick={showError} to call error */}
      <ToastContainer />
    </div>
  );
};

export default LoginAuth;
