import React from 'react'
import './MyCourse.css'
import OngoingOverview from './ongoing-overview/OngoingOverview'

const MyCourse = () => {
    return (
        <div className='mycourse'>
            <div className="breadcrumbs">
                <ul class="breadcrumb">
                    <li><a href="#">My Course</a></li>
                </ul>
            </div>

            <div className="mycourse-body">
                {/* start writing code here */}
                <OngoingOverview/>
            </div>
        </div>
    )
}

export default MyCourse