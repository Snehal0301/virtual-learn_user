import React from 'react'
import './LoginPassword.css'
const LoginPassword = () => {
    return (
        <div className='login-password'>
            <p className='login-password-heading'>Create New Password</p>
            <p className='login-password-content'>Your password must have at least 6 or more characters</p>
            <form className='login-password-form'>
                <input className='login-input' type="password" id="password" name="password" placeholder=" " />
                <label className='login-password-label' for="password">Password</label>
                <input className='login-input' type="password" id="c-password" name="email" placeholder=" " />
                <label className='login-password-label' for="c-password">Confirm New Password</label>
                <button className='reset-password'>Reset Password</button>
            </form>
        </div>
    )
}

export default LoginPassword