import React from 'react'
import { passwordChanged } from '../../../utils/svgIcons'
import './PasswordChanged.css'
const PasswordChanged = () => {
    return (
        <div className='password-changed'>
            <div className="password-changed-content">
                {passwordChanged}
                <p>Password Changed</p>
                <p>Your password has been successfully changed. You can now Login with your new password</p>
                <p>Login</p>
            </div>
        </div>
    )
}

export default PasswordChanged