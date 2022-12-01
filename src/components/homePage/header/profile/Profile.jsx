import React from 'react'
import './Profile.css'
import { closeProfile, editProfile } from '../../../../utils/svgIcons'
import { useDispatch, useSelector } from 'react-redux'
import { profileDrawer } from '../../../../redux/reducers/headerProfileOptions'

const Profile = () => {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(profileDrawer(false))
    }

    return (
        <div className='drawer-profile'>
            <div className="drawer-profile-header">
                <div className="drawer-profile-clear" onClick={handleClick}>
                    {closeProfile}
                </div>

                <div className="drawer-profile-name">
                    <p className='drawer-profile-profile'>Profile</p>
                    <div className="drawer-profile-edit">
                        {editProfile}
                    </div>
                </div>

                <div className="profile-logo-name">
                    <div className="profile-img-frame">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZea5hmBriu2GpLrDCzJoBnAFqT2hzJTuTBZ_oNRUJ5lztiO3Ujs8NngJ2BWiTqjmvfx8&usqp=CAU" alt="" />
                    </div>
                    <div className="profile-image-name">
                        <p className='name'>Mahendra Singh Dhoni</p>
                        <p className='role'>UX/UI Designer</p>
                    </div>
                </div>
            </div>
            <div className="drawer-profile-body">

            </div>
        </div>
    )
}

export default Profile