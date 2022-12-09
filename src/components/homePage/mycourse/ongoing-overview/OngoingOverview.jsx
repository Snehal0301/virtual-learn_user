import './OngoingOverview.css'
import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import { accordianState, accordianToggleState, tabToggleState, videoLinkState } from '../../../../redux/reducers/myCourseReducer'
import { courseAccessIcon, courseCertIcon, courseFileIcon, courseHourIcon, courseMediumAccess, courseTestIcon, downloadIcon, learnCheckMark, videoPlayActive, whiteStepperIcon } from '../../../../utils/svgIcons'
import instructorImage from '../../../../assets/images/instructorImage.jpg'
import Accordian from '../accordian/Accordian'
import axios from 'axios'


import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
    {
        label: 'Select campaign settings',
        description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    },
    {
        label: 'Create an ad group',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: 'Create an ad',
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
    {
        label: 'Create an ad group',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: 'Create an ad',
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
];


const OngoingOverview = () => {

    const [chapter, setChapter] = useState();
    const [video, setVideo] = useState('https://youtu.be/Tn6-PIqc4UM');

    // api call for chapter section
    useEffect(() => {
        axios
            .get(
                `http://virtuallearnapp2-env.eba-wrr2p8zk.ap-south-1.elasticbeanstalk.com/user/courseChapterResponse?courseId=24`,
                {
                    headers:
                    {
                        Authorization: `Bearer ${localStorage.getItem("Token")}`
                    }
                }
            )
            .then((res) => {
                console.log(res.data);
                setChapter(res.data)
            }).catch((err) => {
                console.log(err);
            });
    }, [])

    console.log("chapter", chapter)

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const [active, setActive] = useState(0)

    const [tabs, setTabs] = useState(1)

    const dispatch = useDispatch();

    const tabToggle = (id) => {
        dispatch(tabToggleState(id))
    }

    const tabState = useSelector((state) => state.mycourse.tab)

    const accordianToggle = (id) => {
        dispatch(accordianToggleState(id))
    }
    const accordianState = useSelector((state) => state.mycourse.accordian)
    const [pause, setPause] = useState(false)
    const [playing, setPlaying] = useState(false)
    const [played, setPlayed] = useState(false)

    const onPause = () => {
        setPause(true)
        setPlaying(false)
    }
    const onPlay = () => {
        setPause(false)
        setPlaying(true)
    }

    const videoLink = useSelector((state) => state.mycourse.videoLink)

    console.log(video)

    return (
        <div className='ongoing-overview'>
            <div className="ongoing-section-1">
                <div className="ongoing-section-video-player">
                    {
                        pause &&
                        <div className="onpause-modal">
                            <p className='onpause-modal-title'>Your lesson paused at 1.21
                                Do you want to continue watching?</p>
                            <button className='onpause-button' onClick={onPlay}>Continue Watching</button>
                            <button className='onpause-button beginning'>Watch from beginning</button>
                        </div>
                    }
                    <ReactPlayer url={videoLink} controls='true' className='react-player' width='100%'
                        height='100%' onPause={onPause} playing={playing} onProgress={(progress) => {
                            setPlayed(progress.playedSeconds);
                        }} />
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

                {
                    tabState === 1 ?
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
                        :
                        // <div className="course-completion">
                        //     <div className="course-completion-section-1">
                        //         <div className="completion-section-1-main">

                        //             <p className='completion-section-1-main-title'>Course Result</p>
                        //             <p className='completion-section-1-main-per'>90%</p>
                        //             <p className='completion-section-1-main-apr'>approval rate</p>
                        //         </div>
                        //     </div>
                        //     <div className="course-completion-section-2">
                        //         <div className="completion-section-2-main">
                        //             <div className="cmain-1">
                        //                 <p>Joined</p>
                        //                 <p className='cmain-1-date'>02/04/2021</p>
                        //             </div>
                        //             <div className="cmain-2">
                        //                 <p>Completed</p>
                        //                 <p className='cmain-1-date'>02/04/2021</p>
                        //             </div>
                        //             <div className="cmain-3">
                        //                 <p>Duration</p>
                        //                 <p className='cmain-1-date'>4h 30m</p>
                        //             </div>
                        //         </div>
                        //     </div>
                        //     <div className="course-completion-section-3">
                        //         <div className="completion-section-3-main">
                        //             <div className="cs3-main-1">
                        //                 <p className='cs3-main-1-title'>Course Certificate</p>
                        //                 <div className='download-icon-image'>{downloadIcon}</div>
                        //             </div>
                        //             <div className="cs3-main-2">
                        //                 <img src={require('../../../../assets/images/certicon.png')} alt="" />
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                        ""
                }

            </div>
            <div className="ongoing-section-2">
                <div className="ongoing-container-1">
                    <div className="tabs">
                        <div className={tabState === 1 ? 'tab active-tab' : 'tab'} onClick={() => tabToggle(1)}>Overview</div>
                        <div className={tabState === 2 ? 'tab active-tab' : 'tab'} onClick={() => tabToggle(2)}>Chapters</div>
                    </div>
                    <div className={tabState === 1 ? 'tab-content-1' : 'tab-content-none'}>
                        <div className="tab-1-all">
                            <div className="ongoing-course-desc-mobile">
                                <div className="ongoing-course-desc-title-mobile">
                                    <p>Learn how to design a beautiful and engaging mobile app with Figma. Learn-by-doing approach. Learn how to design a beautiful and engaging mobile app with Figma. Learn-by-doing approach.</p>
                                </div>
                                <div className="ongoing-course-desc-content-mobile">
                                    <p>Preview this Course</p>
                                    <div className="mobile-video-link">
                                        <div className="mobile-video-section-1">
                                            <img src={require("../../../../assets/images/icn_play_orange.png")} alt="" className='video-logo' />
                                            <div className="mobile-video-desc">
                                                <div className="mobile-video-title">Introduction</div>
                                                <div className="mobile-video-dur">3 Min</div>
                                            </div>
                                        </div>
                                        <img src={require("../../../../assets/images/icn_previewgo.png")} alt="" className='right-icon' />
                                    </div>
                                    <input type="checkbox" id="expanded"></input>
                                    <p className='mobile-video-description'>Figma is a very powerful application that runs online. There are virtually no platform boundaries when it comes to using figma because you can design within a web browser or using their desktop application made for windows and macs. Figma is similar to Sketch and Adobe XD but is the more powerful of the three when it comes. Figma is a very powerful application that runs online. There are virtually no platform boundaries when it comes to using figma because you can design within a web browser or using their desktop application made for windows and macs. Figma is a very powerful application that runs online. There are virtually no platform boundaries when it comes to using figma because you can design within a web browser or using their desktop application made for windows and macs. Figma is similar to Sketch and Adobe XD but is the more powerful of the three when it comes. Figma is a very powerful application that runs online. There are virtually no platform boundaries when it comes to using figma because you can design within a web browser or using their desktop application made for windows and macs</p>
                                    <label for="expanded" role="button">SHOW MORE</label>
                                </div>
                            </div>
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
                    <div className={tabState === 2 ? 'tab-content-2' : 'tab-content-none'}>
                        {
                            chapter
                                ?
                                <div className="tab-2-all">

                                    <div className="course-contents">
                                        <p className="course-content-title">Course Content</p>
                                        <p className="course-content-desc">{chapter.chapterCount} Chapter | {chapter.lessonCount} lessons | {chapter.testCount} Assignment Test | {chapter.totalDuration}h
                                            Total length</p>
                                    </div>

                                    <div className="course-sections">
                                        {
                                            chapter.chapterResponses.map((ele, id) => {
                                                return (
                                                    <>
                                                        {/* <Accordian /> */}
                                                        <div div className="course-accordian" onClick={() => accordianToggle(id)}>
                                                            <div className="course-accordian-heading">
                                                                <div className="course-accordian-container">
                                                                    <p className='course-accordian-container-title'>Chapter {ele.chapterNumber} - {ele.chapterName}   </p>
                                                                    <p className='course-accordian-container-state'>
                                                                        {
                                                                            accordianState === id ? "-" : "+"
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className={(accordianState === id ? "accordian-show" : "") + " course-accordian-content"}>
                                                                <div className="course-accordian-container-body">
                                                                    <Box sx={{ maxWidth: '100%' }}>
                                                                        <Stepper activeStep={activeStep} orientation="vertical">
                                                                            {ele.lessonResponses.map((courseele, index) => (
                                                                                <Step key={index}>
                                                                                    <StepLabel
                                                                                        icon="⬤"
                                                                                    >
                                                                                        {/* {step.label} */}
                                                                                        <div className="course-video" >
                                                                                            <div className="video-index">{courseele.lessonNumber}</div>
                                                                                            <div className="vide-desc">
                                                                                                <p className='videosection-title'>{courseele.lessonName}</p>
                                                                                                <p className="video-duration">{courseele.lessonDuration}</p>
                                                                                            </div>
                                                                                            <div className="video-play-btn"
                                                                                                // onClick={() => { setVideo(courseele.videoLink) }}
                                                                                                onClick={() => { dispatch(videoLinkState(courseele.videoLink)) }}
                                                                                            >{videoPlayActive} chegceg
                                                                                            </div>
                                                                                        </div>

                                                                                    </StepLabel>
                                                                                    <StepContent>
                                                                                        {/* <Typography>{step.description}</Typography> */}
                                                                                        <Box sx={{ mb: 2 }}>
                                                                                            <div>
                                                                                                <Button
                                                                                                    variant="contained"
                                                                                                    onClick={handleNext}
                                                                                                    sx={{ mt: 1, mr: 1 }}
                                                                                                >
                                                                                                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                                                                                </Button>
                                                                                                <Button
                                                                                                    disabled={index === 0}
                                                                                                    onClick={handleBack}
                                                                                                    sx={{ mt: 1, mr: 1 }}
                                                                                                >
                                                                                                    Back
                                                                                                </Button>
                                                                                            </div>
                                                                                        </Box>

                                                                                    </StepContent>
                                                                                </Step>
                                                                            ))}
                                                                        </Stepper>
                                                                        {activeStep === steps.length && (
                                                                            <Paper square elevation={0} sx={{ p: 3 }}>
                                                                                <Typography>All steps completed - you&apos;re finished</Typography>
                                                                                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                                                                    Reset
                                                                                </Button>
                                                                            </Paper>
                                                                        )}
                                                                    </Box>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })

                                        }

                                    </div>
                                </div>
                                :
                                <h1>Loading</h1>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OngoingOverview