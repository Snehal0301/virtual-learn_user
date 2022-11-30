import './LoginAuth.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { facebookIcon, googleIcon } from '../../../../utils/svgIcons'

const LoginAuth = () => {
  const showError = () =>
    toast(
      <div className="loginAuth-showError">
        <div className="loginAuth-showErrorIcon">
          <img
            src={require('../../../../assets/icons/icn_invalid error.png')}
            alt="invalid"
          />
        </div>
        <div className="loginAuth-showErrorMessage">
          Invalid verification code, please try again
        </div>
      </div>,
      {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        pauseOnHover: true,
        draggable: true,
      },
    )

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
        <form className="loginAuth-FormContainer">
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
              type="number"
              name="phoneNum"
              id="phoneNum"
              placeholder="Enter your mobile number"
              className="loginAuth-formInput"
            />
            <label htmlFor="phoneNum">Mobile number</label>
          </div>
          <button className="loginAuth-formSubmit">Continue</button>
        </form>
        <div className="loginAuth-noAccount">
          Don’t have a account?{' '}
          <span className="loginAuth-regLink">Register</span>
        </div>
      </div>
      {/* onClick={showError} to call error */}
      <ToastContainer />
    </div>
  )
}

export default LoginAuth
