import React from 'react'
import { passwordChanged } from '../../../utils/svgIcons'
import './PasswordChanged.css'
const PasswordChanged = () => {
    return (
        <div className='password-changed'>
            <div className="password-changed-content">
                {passwordChanged}
                <p className='password-changed-heading'>Password Changed</p>
                <p className='password-changed-description'>Your password has been successfully changed. You can now Login with your new password</p>
                <p className='login'>Login</p>
            </div>
        </div>
    )
}

export default PasswordChanged