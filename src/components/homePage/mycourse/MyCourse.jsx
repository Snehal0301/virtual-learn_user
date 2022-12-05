import React from 'react'
import { useSelector } from 'react-redux'
import './MyCourse.css'
import OngoingOverview from './ongoing-overview/OngoingOverview'

const MyCourse = () => {
    const tabState = useSelector((state) => state.mycourse.tab)
    return (
        <div className='mycourse'>
            <div className="breadcrumbs">
                <ul class="breadcrumb">
                    <li><a href="#">My Course</a></li>
                    <li><a href="#">Ongoing</a></li>
                    {
                        tabState === 2 &&
                        <li><a href="#">Learn Figma - UI/UX Design Essential Training</a></li>
                    }


                </ul>
            </div>

            <div className="mycourse-body">
                {/* start writing code here */}
                <OngoingOverview />
            </div>
        </div>
    )
}

export default MyCourse