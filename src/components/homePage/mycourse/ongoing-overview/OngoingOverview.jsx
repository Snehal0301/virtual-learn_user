import './OngoingOverview.css'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import { tabToggleState } from '../../../../redux/reducers/myCourseReducer'
import { courseAccessIcon, courseCertIcon, courseFileIcon, courseHourIcon, courseMediumAccess, courseTestIcon, learnCheckMark } from '../../../../utils/svgIcons'
import instructorImage from '../../../../assets/images/instructorImage.jpg'
const OngoingOverview = () => {

    const [tabs, setTabs] = useState(1)

    const tabToggle = (id) => {
        setTabs(id)
    }


    return (
        <div className='ongoing-overview'>
            <div className="ongoing-section-1">
                <div className="ongoing-section-video-player">
                    <ReactPlayer url='https://youtu.be/Tn6-PIqc4UM' controls='true' className='react-player' width='100%'
                        height='100%' />

                </div>

                <div className="ongoing-video-title-section">
                    <div className="ongoing-video-title">
                        <p className='video-title'>Learn Figma - UI/UX Design Essential Training</p>
                        <p className='video-chapters'>7 Chapter | 46 lessons</p>
                    </div>
                    <div className="ongoing-video-category">
                        <div className="catgry">
                            <p>Design</p>
                        </div>
                    </div>
                </div>

                <div className="ongoing-course-desc">
                    <div className="ongoing-course-desc-title">
                        <p>Learn how to design a beautiful and engaging mobile app with Figma. Learn-by-doing approach. Learn how to design a beautiful and engaging mobile app with Figma. Learn-by-doing approach.</p>
                    </div>
                    <div className="ongoing-course-desc-content">
                        <input type="checkbox" id="expanded"></input>
                        <p>Figma is a very powerful application that runs online. There are virtually no platform boundaries when it comes to using figma because you can design within a web browser or using their desktop application made for windows and macs. Figma is similar to Sketch and Adobe XD but is the more powerful of the three when it comes. Figma is a very powerful application that runs online. There are virtually no platform boundaries when it comes to using figma because you can design within a web browser or using their desktop application made for windows and macs. Figma is a very powerful application that runs online. There are virtually no platform boundaries when it comes to using figma because you can design within a web browser or using their desktop application made for windows and macs. Figma is similar to Sketch and Adobe XD but is the more powerful of the three when it comes. Figma is a very powerful application that runs online. There are virtually no platform boundaries when it comes to using figma because you can design within a web browser or using their desktop application made for windows and macs</p>
                        <label for="expanded" role="button">SHOW MORE</label>
                    </div>
                </div>
            </div>
            <div className="ongoing-section-2">
                <div className="ongoing-container-1">
                    <div className="tabs">
                        <div className={tabs === 1 ? 'tab active-tab' : 'tab'} onClick={() => tabToggle(1)}>Overview</div>
                        <div className={tabs === 2 ? 'tab active-tab' : 'tab'} onClick={() => tabToggle(2)}>Chapters</div>
                    </div>
                    <div className={tabs === 1 ? 'tab-content-1' : 'tab-content-none'}>
                        <div className="tab-1-all">
                            <div className="overview-content">
                                <p className='overview-content-title'>Course Includes</p>
                                <div className="course-points">
                                    <div className="course-points-img">
                                        {courseHourIcon}
                                    </div>
                                    <div className="course-points-title">3.5 total hours video</div>
                                </div>
                                <div className="course-points">
                                    <div className="course-points-img">
                                        {courseFileIcon}
                                    </div>
                                    <div className="course-points-title">Support Files</div>
                                </div>
                                <div className="course-points">
                                    <div className="course-points-img">
                                        {courseTestIcon}
                                    </div>
                                    <div className="course-points-title">6 Modules Test</div>
                                </div>
                                <div className="course-points">
                                    <div className="course-points-img">
                                        {courseAccessIcon}
                                    </div>
                                    <div className="course-points-title">Full lifetime access</div>
                                </div>
                                <div className="course-points">
                                    <div className="course-points-img">
                                        {courseMediumAccess}
                                    </div>
                                    <div className="course-points-title">Access on mobile, desktop and tv</div>
                                </div>
                                <div className="course-points">
                                    <div className="course-points-img">
                                        {courseCertIcon}
                                    </div>
                                    <div className="course-points-title">Certificate of Completion</div>
                                </div>
                            </div>
                            <div className="overview-learn">
                                <p className='overview-learn-title'>What you’ll learn</p>
                                <div className="learn-points">
                                    <div className="learn-points-img">
                                        {learnCheckMark}
                                    </div>
                                    <div className="learn-points-title">Design Websites</div>
                                </div>
                                <div className="learn-points">
                                    <div className="learn-points-img">
                                        {learnCheckMark}
                                    </div>
                                    <div className="learn-points-title">You will have a fully interactive design and prototype at the end of this course</div>
                                </div>
                                <div className="learn-points">
                                    <div className="learn-points-img">
                                        {learnCheckMark}
                                    </div>
                                    <div className="learn-points-title">Design mobile and desktop apps</div>
                                </div>
                                <div className="learn-points">
                                    <div className="learn-points-img">
                                        {learnCheckMark}
                                    </div>
                                    <div className="learn-points-title">You will learn how to reuse design elements for future projects</div>
                                </div>
                            </div>

                            <div className="overview-req">
                                <p className="overview-req-title">Requirements</p>
                                <ul>
                                    <li>Internet Access</li>
                                    <li>You should know your way around comouter basics</li>
                                </ul>
                            </div>

                            <div className="overview-instructor">
                                <div className="overview-instructor-title">Instructor</div>
                                <div className="instructor-details">
                                    <img src={instructorImage} alt="Profile-logo" />
                                    <div className="profile-details">
                                        <p className="profile-name">Dean Mathew</p>
                                        <div className="profile-occupation">User Interface teacher www.appledesigntips.com</div>
                                    </div>
                                </div>
                                <div className="instructor-about">
                                    <input type="checkbox" id="expanded"></input>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis doloremque fuga nobis consectetur dignissimos ab, sit necessitatibus alias, explicabo doloribus laudantium ducimus mollitia quod delectus repudiandae debitis voluptatem, deserunt fugiat dolore perferendis accusantium quia numquam! Fugiat, temporibus odio? Voluptates excepturi autem, error assumenda quia quod ratione modi tenetur laborum rem!
                                        <br />
                                        <br />
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi et rem hic eum nam exercitationem magnam quae veniam! Ipsa eaque velit aspernatur minima illum? Expedita nemo tempore, dolores distinctio molestiae mollitia temporibus quasi eveniet aliquam sequi laudantium porro qui, quaerat nam in quos pariatur rerum. Architecto rem repudiandae error explicabo veniam inventore dolorum cupiditate cum provident, rerum ipsum corrupti illum sint consectetur quos, ex perferendis numquam! Fuga minima corrupti nihil at eligendi quas doloribus quod molestias deserunt, mollitia exercitationem vitae non, odio ex, voluptate in quia. Eaque vitae eius esse earum omnis. Rerum odio vero accusantium deleniti ad modi magni temporibus reprehenderit similique facere asperiores assumenda, pariatur odit quidem vel accusamus ab quod vitae nisi? In sed corporis accusamus sapiente harum, minima repellat nihil quod veniam rem magnam fuga, ipsam aliquid pariatur modi repudiandae doloremque recusandae, maiores tenetur nisi voluptatum explicabo facere. Maiores consequatur vel consequuntur corporis commodi id optio?
                                    </p>
                                    <label for="expanded" role="button">SHOW MORE</label>
                                </div>
                            </div>
                        </div>
                        <button className='join-course'>Join Course</button>
                    </div>
                    <div className={tabs === 2 ? 'tab-content-2' : 'tab-content-none'}>
                        Hello tab content 2
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OngoingOverview