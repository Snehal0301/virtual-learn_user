import React from 'react'
import './Success_Page.css'
import { success_Image } from '../../../utils/svgIcons'

const Success_Page = () => {
  return (
    <div className='succesContainer'>
        <div className='successContent'>
          <div className='successImage'>{success_Image} 
          </div>
          <div className='successText'>Success!</div>
          <div className='successDesc'>Your VirtualLearn account has been successfully created!</div>
          <div className='getStarted'>Get Started</div>

        </div>
    </div>
  )
}

export default Success_Page