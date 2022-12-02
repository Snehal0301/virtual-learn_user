import React, { useState } from 'react'
import { closeProfile, editProfile } from '../../../../utils/svgIcons'
import { useDispatch, useSelector } from 'react-redux'
import { notificationSection, profileDrawer, profileSection, settingsSection } from '../../../../redux/reducers/headerProfileOptions'
import Switch from "react-switch";
import './Notification.css'

const Notification = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(profileDrawer(false))
        dispatch(profileSection(false))
        dispatch(notificationSection(false))
        dispatch(settingsSection(false))
    }

    const NotifyData = [
        {
            id: 1,
            title: "You scored 80% in Chapter 3 - Setting up a new project, of Course - Learn Figma - UI/UX Design Essential Training.",
            image: require('../../../../assets/images/dhoni.png'),
            time: "5 mins ago"
        },
        {
            id: 2,
            title: "You scored 80% in Chapter 3 - Setting up a new project, of Course - Learn Figma - UI/UX Design Essential Training.",
            image: require('../../../../assets/images/dhoni.png'),
            time: "6 mins ago"
        },
        {
            id: 3,
            title: "Joined a New Course - Art & Illustration ",
            image: require('../../../../assets/images/dhoni.png'),
            time: "8 mins ago"
        },

    ]
    return (
        <div className='drawer-profile'>
            <div className="drawer-profile-header">
                <div className="drawer-profile-clear" onClick={handleClick}>
                    {closeProfile}
                </div>

                <div className="drawer-profile-name">
                    <p className='drawer-profile-profile'>Notifications</p>
                </div>
            </div>
            <div className="drawer-profile-body">

                {
                    NotifyData.map(item =>
                    (<div className='notificationrect'>
                        <div className='notifyImage'><img src={item.image} alt="" /></div>
                        <div className='notifycontainer'>
                            <div className='notifydata'>{item.title}</div>
                            <div className='notifiedTime'>{item.time}</div>
                        </div>
                    </div>

                    )

                    )
                }



            </div>
        </div>
    )
}

export default Notification