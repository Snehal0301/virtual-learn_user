import '../login-auth/LoginAuth.css'
import * as yup from 'yup'
import 'yup-phone'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { otpPage } from '../../../../redux/reducers/Conditions'
import { useNavigate } from 'react-router-dom'
import { mobileBackBtn } from '../../../../utils/svgIcons'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const LoginForgotPW = () => {
  const [invalidPhone, setInvalidPhone] = useState(false)
  const [mobileNum, setMobileNum] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const phoneSchema = yup.string().phone().required()
  const phoneNumValidation = (e: any) => {
    setMobileNum(e.target.value)
    ;(async () => {
      setInvalidPhone(await phoneSchema.isValid(e.target.value)) // → true
    })()
  }

  const submitHandler = (e: any) => {
    e.preventDefault()
    const mobileNum = e.target.mobileNum.value
    // dispatch(otpPage(true));
    // navigate('/onboarding/otpVerification');
    forgotPW(mobileNum)
  }

  const forgotPW = (mobileNum: any) => {
    fetch(
      `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/send`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobileNumber: mobileNum }),
      },
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        if (res.message === 'OTP Valid For 2 Minutes') {
          localStorage.setItem('regMobileNum', mobileNum)
          dispatch(otpPage(true))
          navigate('/onboarding/otpVerification')
        } else {
          showError(res.message)
        }
      })
  }

  const showError = (msg: any) => {
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
      },
    )
  }

  return (
    <div className="loginAuth">
      <div className="loginAuth-backButton">
        <div
          onClick={() => {
            navigate('login')
          }}
          style={{ width: '28px', cursor: 'pointer' }}
        >
          {' '}
          {mobileBackBtn}
        </div>
      </div>
      <div className="loginAuth-title">Forgot Password</div>
      <div className="loginAuth-text">
        Please enter your phone number. You will receive a code to create a new
        password.
      </div>

      <div className="loginAuth-Form">
        <form className="loginAuth-FormContainer" onSubmit={submitHandler}>
          {' '}
          <div className="loginAuth-FormInput">
            <input
              type="text"
              name="mobileNum"
              id="mobileNum"
              placeholder="Enter your mobile number"
              className={
                mobileNum === ''
                  ? 'loginAuth-formInput'
                  : invalidPhone
                  ? 'loginAuth-formInput loginAuth-formInputSuccess'
                  : 'loginAuth-formInput loginAuth-formInputError'
              }
              onChange={phoneNumValidation}
              required
            />
            {/* loginAuth-formInputSuccess */}
            {/* loginAuth-formInputError */}
            <label htmlFor="mobileNum">Enter your mobile number</label>
          </div>
          <button className="loginAuth-formSubmit" disabled={!invalidPhone}>
            Send
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default LoginForgotPW
