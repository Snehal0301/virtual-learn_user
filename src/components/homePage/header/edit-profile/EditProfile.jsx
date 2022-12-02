import React from 'react'
import './EditProfile.css'
import '../profile/Profile'
import { useDispatch } from 'react-redux'
import { editProfileSection } from '../../../../redux/reducers/headerProfileOptions'
const EditProfile = () => {

    const dispatch  = useDispatch()

    const closeEditProfile = () => {
        dispatch(editProfileSection(false))
    }
    return (
        <div className='drawer-profile'>
            <div className="drawer-profile-header">
                <h1 onClick={closeEditProfile}>Snehal</h1>
            </div>
        </div>
    )
}

export default EditProfile