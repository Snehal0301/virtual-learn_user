import './OngoingOverview.css';
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import {
  accordianState,
  accordianToggleState,
  firstVideoState,
  tabToggleState,
  videoLinkState,
} from '../../../../redux/reducers/myCourseReducer';
import {
  courseAccessIcon,
  courseCertIcon,
  courseFileIcon,
  courseHourIcon,
  courseMediumAccess,
  courseTestIcon,
  downloadIcon,
  inactiveIcon,
  learnCheckMark,
  start_pauseIcon,
  start_pauseIconVideo,
  testImage,
  videoPlayActive,
  whiteStepperIcon,
} from '../../../../utils/svgIcons';
import instructorImage from '../../../../assets/images/instructorImage.jpg';
import Accordian from '../accordian/Accordian';
import axios from 'axios';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Navigate, useNavigate } from 'react-router-dom';
import { test, testisSuccess } from '../../../../redux/reducers/testSlice';
import { testShow, testSuccess } from '../../../../redux/reducers/Conditions';
import { testSuccessRed } from '../../../../redux/reducers/SuccessTestRed';
import { showSuccessPage } from '../../../../redux/reducers/showSuccesspage';
import { finaltestShowPage } from '../../../../redux/reducers/finalTestSuccess';


const OngoingOverview = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [chapter, setChapter] = useState();
  const [overviewData, setOverviewData] = useState();
  const [defaultvideo, setDefaultVideo] = useState('');
  const [enrollState, setEnrollState] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(testSuccess(false));
    dispatch(testisSuccess());
    dispatch(testSuccessRed(false));
    dispatch(showSuccessPage(false));
    dispatch(finaltestShowPage(false));

  }, []);

  // api call for chapter section
  useEffect(() => {
    axios
      .get(
        `http://virtuallearnapp2-env.eba-wrr2p8zk.ap-south-1.elasticbeanstalk.com/user/courseChapterResponse?courseId=32`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('Token')}`,
          },
        }
      )
      .then((res) => {

        setChapter(res.data);
        console.log(res.data)
        setDefaultVideo(res.data.chapterResponses[0].lessonResponses[0].videoLink)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {

    dispatch(firstVideoState(defaultvideo))
  }, [defaultvideo])


  const defaultVideoState = useSelector((state) => state.mycourse.firstVideo)
  console.log("defaultVideoState", defaultVideoState);

  useEffect(() => {
    axios
      .get(
        `http://virtuallearnapp2-env.eba-wrr2p8zk.ap-south-1.elasticbeanstalk.com/user/courseOverView?courseId=32`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('Token')}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setOverviewData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const dispatch = useDispatch();

  const tabToggle = (id) => {
    dispatch(tabToggleState(id));
  };

  const tabState = useSelector((state) => state.mycourse.tab);

  const accordianToggle = (id) => {
    dispatch(accordianToggleState(id));
  };
  const accordianState = useSelector((state) => state.mycourse.accordian);
  const [pause, setPause] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(false);

  const onPause = () => {
    setPause(true);
    setPlaying(false);
  };
  const onPlay = () => {
    setPause(false);
    setPlaying(true);
  };

  const videoLink = useSelector((state) => state.mycourse.videoLink);

  const testQuestions = useSelector((state) => state.test);

  useEffect(() => {
    testQuestions.isSuccess && dispatch(testShow(true));
  }, [testQuestions]);

  const showTest = useSelector((state) => state.loginConditions.showTest);

  useEffect(() => {
    showTest && navigate('/myCourses/ongoingCourse/moduleTest');
  }, [showTest]);

  const getVideoState = (itemele) => {
    dispatch(
      videoLinkState(
        itemele.videoLink
      )
    );
  }

  const enrollCourse = (courseId) => {
    axios
      .request(
        `http://virtuallearnapp2-env.eba-wrr2p8zk.ap-south-1.elasticbeanstalk.com/user/enroll`,
        {
          method: 'post',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('Token')}`,
          },
          data: {
            courseId: courseId
          }
        }
      )
      .then((res) => {
        console.log(res)
          (res.data.message === "Enrolled successfully" && window.location.reload);
      })
      .catch((err) => {
        console.log(err);
      });

  }

  useEffect(() => {

  })

  return (
    <div className="ongoing-overview">
      <div className="ongoing-section-1">
        <div className="ongoing-section-video-player">
          {/* {pause && (
            <div className="onpause-modal">
              <p className="onpause-modal-title">
                Your lesson paused at 1.21 Do you want to continue watching?
              </p>
              <button className="onpause-button" onClick={onPlay}>
                Continue Watching
              </button>
              <button className="onpause-button beginning">
                Watch from beginning
              </button>
            </div>
          )} */}
          <ReactPlayer
            url={videoLink}
            controls="true"
            className="react-player"
            width="100%"
            height="100%"
            onPause={onPause}
            playing={playing}
            onProgress={(progress) => {
              setPlayed(progress.playedSeconds);
            }}
          />
          {
            pause &&
            <>

              <div className="pause-overlay"></div>
              <div className="pause-button" onClick={onPlay}>{start_pauseIconVideo}</div>
            </>
          }
        </div>
        {/* <div className="ongoing-video-title-section">
                    <div className="ongoing-video-title">
                        <p className='video-title'>Learn Figma - UI/UX Design Essential Training</p>
                        <p className='video-chapters'>7 Chapter | 46 lessons</p>
                    </div>
                    <div className="ongoing-video-category">
                        <div className="catgry">
                            <p>Design</p>
                        </div>
                    </div>
                </div> */}
        {overviewData ? (
          <div className="ongoing-video-title-section">
            <div className="ongoing-video-title">
              <p className="video-title">{overviewData.courseName}</p>
              <p className="video-chapters">
                {overviewData.chapterCount} Chapter | {overviewData.lessonCount}{' '}
                lessons
              </p>
            </div>
            <div className="ongoing-video-category">
              <div className="catgry">
                <p>{overviewData.categoryName}</p>
              </div>
            </div>
          </div>
        ) : (
          <h3>Loading</h3>
        )}
        {tabState === 1 ? (
          <>
            {overviewData ? (
              <div className="ongoing-course-desc">
                <div className="ongoing-course-desc-title">
                  <p>{overviewData.courseTagLine}</p>
                </div>
                <div className="ongoing-course-desc-content">
                  <input type="checkbox" id="expanded"></input>
                  <p>{overviewData.description}</p>
                  <label for="expanded" role="button">
                    SHOW MORE
                  </label>
                </div>
              </div>
            ) : (
              <h3>Loading</h3>
            )}
          </>
        ) : (
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
          ''
        )}
      </div>
      <div className="ongoing-section-2">
        <div className="ongoing-container-1">
          <div className="tabs">
            <div
              className={tabState === 1 ? 'tab active-tab' : 'tab'}
              onClick={() => tabToggle(1)}
            >
              Overview
            </div>
            <div
              className={tabState === 2 ? 'tab active-tab' : 'tab'}
              onClick={() => tabToggle(2)}
            >
              Chapters
            </div>
          </div>
          <div
            className={tabState === 1 ? 'tab-content-1' : 'tab-content-none'}
          >
            <div className="tab-1-all">
              {/*Mobile Screen*/}
              <div className="ongoing-course-desc-mobile">
                <div className="ongoing-course-desc-title-mobile">
                  <p>
                    Learn how to design a beautiful and engaging mobile app with
                    Figma. Learn-by-doing approach. Learn how to design a
                    beautiful and engaging mobile app with Figma. Learn-by-doing
                    approach.
                  </p>
                </div>
                <div className="ongoing-course-desc-content-mobile">
                  <p>Preview this Course</p>
                  <div className="mobile-video-link">
                    <div className="mobile-video-section-1">
                      <img
                        src={require('../../../../assets/images/icn_play_orange.png')}
                        alt=""
                        className="video-logo"
                      />
                      <div className="mobile-video-desc">
                        <div className="mobile-video-title">Introduction</div>
                        <div className="mobile-video-dur">3 Min</div>
                      </div>
                    </div>
                    <img
                      src={require('../../../../assets/images/icn_previewgo.png')}
                      alt=""
                      className="right-icon"
                    />
                  </div>
                  <input type="checkbox" id="expanded"></input>
                  <p className="mobile-video-description">
                    Figma is a very powerful application that runs online. There
                    are virtually no platform boundaries when it comes to using
                    figma because you can design within a web browser or using
                    their desktop application made for windows and macs. Figma
                    is similar to Sketch and Adobe XD but is the more powerful
                    of the three when it comes. Figma is a very powerful
                    application that runs online. There are virtually no
                    platform boundaries when it comes to using figma because you
                    can design within a web browser or using their desktop
                    application made for windows and macs. Figma is a very
                    powerful application that runs online. There are virtually
                    no platform boundaries when it comes to using figma because
                    you can design within a web browser or using their desktop
                    application made for windows and macs. Figma is similar to
                    Sketch and Adobe XD but is the more powerful of the three
                    when it comes. Figma is a very powerful application that
                    runs online. There are virtually no platform boundaries when
                    it comes to using figma because you can design within a web
                    browser or using their desktop application made for windows
                    and macs
                  </p>
                  <label for="expanded" role="button">
                    SHOW MORE
                  </label>
                </div>
              </div>
              {overviewData ? (
                <div className="overview-content">
                  <p className="overview-content-title">Course Includes</p>
                  <div className="course-points">
                    <div className="course-points-img">{courseHourIcon}</div>
                    <div className="course-points-title">
                      {overviewData.courseDuration}
                    </div>
                  </div>
                  <div className="course-points">
                    <div className="course-points-img">{courseFileIcon}</div>
                    <div className="course-points-title">Support Files</div>
                  </div>
                  <div className="course-points">
                    <div className="course-points-img">{courseTestIcon}</div>
                    <div className="course-points-title">
                      {overviewData.testCount} Modules Test
                    </div>
                  </div>
                  <div className="course-points">
                    <div className="course-points-img">{courseAccessIcon}</div>
                    <div className="course-points-title">
                      Full lifetime access
                    </div>
                  </div>
                  <div className="course-points">
                    <div className="course-points-img">
                      {courseMediumAccess}
                    </div>

                    <div className="course-points-title">
                      {/* Access on mobile, desktop and tv */}
                      {overviewData.requirements.map((ele, i) => {
                        return <p>{ele}</p>;
                      })}
                    </div>
                  </div>
                  <div className="course-points">
                    <div className="course-points-img">{courseCertIcon}</div>
                    <div className="course-points-title">
                      Certificate of Completion
                    </div>
                  </div>
                </div>
              ) : (
                <h3>Loading</h3>
              )}
              <div className="overview-learn">
                <p className="overview-learn-title">What you’ll learn</p>
                <div className="learn-points">
                  <div className="learn-points-img">{learnCheckMark}</div>
                  <div className="learn-points-title">Design Websites</div>
                </div>
                <div className="learn-points">
                  <div className="learn-points-img">{learnCheckMark}</div>
                  <div className="learn-points-title">
                    You will have a fully interactive design and prototype at
                    the end of this course
                  </div>
                </div>
                <div className="learn-points">
                  <div className="learn-points-img">{learnCheckMark}</div>
                  <div className="learn-points-title">
                    Design mobile and desktop apps
                  </div>
                </div>
                <div className="learn-points">
                  <div className="learn-points-img">{learnCheckMark}</div>
                  <div className="learn-points-title">
                    You will learn how to reuse design elements for future
                    projects
                  </div>
                </div>
              </div>

              <div className="overview-req">
                <p className="overview-req-title">Requirements</p>
                <ul>
                  <li>Internet Access</li>
                  <li>You should know your way around comouter basics</li>
                </ul>
              </div>

              {overviewData ? (
                <div className="overview-instructor">
                  <div className="overview-instructor-title">Instructor</div>
                  <div className="instructor-details">
                    <img src={overviewData.profilePhoto} alt="Profile-logo" />
                    <div className="profile-details">
                      <p className="profile-name">
                        {overviewData.instructorName}
                      </p>
                      <div className="profile-occupation">
                        {overviewData.instructorDescription} {overviewData.url}
                      </div>
                    </div>
                  </div>
                  <div className="instructor-about">
                    <input type="checkbox" id="expanded"></input>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Facilis doloremque fuga nobis consectetur dignissimos ab,
                      sit necessitatibus alias, explicabo doloribus laudantium
                      ducimus mollitia quod delectus repudiandae debitis
                      voluptatem, deserunt fugiat dolore perferendis accusantium
                      quia numquam! Fugiat, temporibus odio? Voluptates
                      excepturi autem, error assumenda quia quod ratione modi
                      tenetur laborum rem!
                      <br />
                      <br />
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nisi et rem hic eum nam exercitationem magnam quae veniam!
                      Ipsa eaque velit aspernatur minima illum? Expedita nemo
                      tempore, dolores distinctio molestiae mollitia temporibus
                      quasi eveniet aliquam sequi laudantium porro qui, quaerat
                      nam in quos pariatur rerum. Architecto rem repudiandae
                      error explicabo veniam inventore dolorum cupiditate cum
                      provident, rerum ipsum corrupti illum sint consectetur
                      quos, ex perferendis numquam! Fuga minima corrupti nihil
                      at eligendi quas doloribus quod molestias deserunt,
                      mollitia exercitationem vitae non, odio ex, voluptate in
                      quia. Eaque vitae eius esse earum omnis. Rerum odio vero
                      accusantium deleniti ad modi magni temporibus
                      reprehenderit similique facere asperiores assumenda,
                      pariatur odit quidem vel accusamus ab quod vitae nisi? In
                      sed corporis accusamus sapiente harum, minima repellat
                      nihil quod veniam rem magnam fuga, ipsam aliquid pariatur
                      modi repudiandae doloremque recusandae, maiores tenetur
                      nisi voluptatum explicabo facere. Maiores consequatur vel
                      consequuntur corporis commodi id optio?
                    </p>
                    <label for="expanded" role="button">
                      SHOW MORE
                    </label>
                  </div>
                </div>
              ) : (
                <h3>Loading</h3>
              )}
            </div>
            {
              overviewData && overviewData.enrolled
                ?
                ""
                : <button className="join-course" onClick={() => enrollCourse(overviewData.courseId)}>Join Course</button>
            }

          </div>
          <div
            className={tabState === 2 ? 'tab-content-2' : 'tab-content-none'}
          >
            {chapter ? (
              <div className="tab-2-all">
                <div className="course-contents">
                  <p className="course-content-title">Course Content</p>
                  <p className="course-content-desc">
                    {chapter.chapterCount} Chapter | {chapter.lessonCount}{' '}
                    lessons | {chapter.testCount} Assignment Test |{' '}
                    {chapter.totalDuration}h Total length
                  </p>
                </div>

                <div className="course-sections">
                  {chapter.chapterResponses.map((ele, id) => {
                    return (
                      <>

                        {
                          chapter.enrolled ?

                            <>
                              {/* <Accordian active /> */}
                              < div
                                div
                                className="course-accordian"
                                onClick={() => accordianToggle(id)}
                              >
                                <div className="course-accordian-heading">
                                  <div className="course-accordian-container">
                                    <p className={ele.chapterCompletedStatus ? "course-accordian-container-title-active" : "course-accordian-container-title"}>
                                      Chapter {ele.chapterNumber} - {ele.chapterName}{' '}
                                    </p>

                                    <p className="course-accordian-container-state">
                                      {accordianState === id ? '-' : '+'}
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className={
                                    (accordianState === id ? 'accordian-show' : '') +
                                    ' course-accordian-content'
                                  }
                                >
                                  <div className="course-accordian-container-body">
                                    <div className="accordian-items">
                                      {
                                        ele.lessonResponses.map((itemele) => {
                                          return (
                                            <>
                                              <div className="accordian-item">
                                                <div className="accordian-item-icon">{itemele.lessonStatus ? inactiveIcon('green') : inactiveIcon('')}</div>
                                                <div className="accordian-item-section-2">
                                                  <div className="accordian-item-section-2-part-1">
                                                    <p className='accordian-item-chapter-number'>{itemele.lessonNumber}</p>
                                                    <div className="accordian-item-section-2-para">
                                                      <p className='accordian-item-chapter-title'>{itemele.lessonName}</p>
                                                      <p className='accordian-item-chapter-duration'>{itemele.lessonDuration}</p>
                                                    </div>
                                                  </div>
                                                  <div
                                                    className="video-play-btn"
                                                    // onClick={() => { setVideo(courseele.videoLink) }}
                                                    onClick={
                                                      () => {
                                                        getVideoState(itemele)
                                                      }}
                                                  >
                                                    {itemele.lessonStatus ? videoPlayActive('red') : videoPlayActive('')}
                                                  </div>
                                                </div>
                                              </div>

                                            </>
                                          )
                                        })
                                      }
                                      {
                                        ele.testId &&
                                        <div className="accordian-item">
                                          <div className="accordian-item-icon">{inactiveIcon()}</div>
                                          <div className="accordian-item-section-2 test-section"
                                            onClick={() => {
                                              let a =
                                                ele &&
                                                ele.testDuration &&
                                                ele.testDuration.split(':');

                                              if (a) {
                                                let seconds =
                                                  +a[0] * 60 * 60 +
                                                  +a[1] * 60 +
                                                  +a[2];

                                                localStorage.setItem(
                                                  'timer',
                                                  seconds
                                                );
                                              }
                                              dispatch(
                                                test(
                                                  `${ele.testName === 'Final Test'
                                                    ? 'finalTest'
                                                    : 'moduleTest'
                                                  }?testId=${ele.testId}`
                                                )
                                              );
                                            }}
                                          >
                                            <div className="accordian-item-section-2-part-1" >
                                              <p className='accordian-item-chapter-number'>{testImage}</p>
                                              <div className="accordian-item-section-2-para">
                                                <p className='accordian-item-chapter-title'>{ele.testName}</p>
                                                <p className='accordian-item-chapter-duration'>10 min | {ele.questionCount} questions</p>
                                              </div>
                                            </div>
                                            <div
                                              className="video-play-btn"
                                            // onClick={() => { setVideo(courseele.videoLink) }}
                                            // onClick={() => {
                                            //   dispatch(
                                            //     videoLinkState(
                                            //       itemele.videoLink
                                            //     )
                                            //   );
                                            // }}
                                            >
                                              80%
                                            </div>
                                          </div>
                                        </div>
                                      }


                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                            :
                            <>
                              {/* <Accordian inactive /> */}
                              < div
                                div
                                className="course-accordian"
                                onClick={() => accordianToggle(id)}
                              >
                                <div className="course-accordian-heading">
                                  <div className="course-accordian-container">
                                    {
                                      ele.chapterNumber === 1 ?
                                        <p className="course-accordian-container-title-active">
                                          Chapter {ele.chapterNumber} - {ele.chapterName}{' '}
                                        </p>
                                        :
                                        <p className="course-accordian-container-title">
                                          Chapter {ele.chapterNumber} - {ele.chapterName}{' '}
                                        </p>
                                    }
                                    <p className="course-accordian-container-state">
                                      {accordianState === id ? '-' : '+'}
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className={
                                    (accordianState === id ? 'accordian-show' : '') +
                                    ' course-accordian-content'
                                  }
                                >
                                  <div className="course-accordian-container-body">
                                    <div className="accordian-items">
                                      {
                                        ele.lessonResponses.map((itemele) => {
                                          return (
                                            <>
                                              <div className="accordian-item">
                                                <div className="accordian-item-icon">{ele.chapterNumber === 1 ? inactiveIcon('green') : inactiveIcon('')}</div>
                                                <div className="accordian-item-section-2">
                                                  <div className="accordian-item-section-2-part-1">
                                                    <p className='accordian-item-chapter-number'>{itemele.lessonNumber}</p>
                                                    <div className="accordian-item-section-2-para">
                                                      <p className='accordian-item-chapter-title'>{itemele.lessonName}</p>
                                                      <p className='accordian-item-chapter-duration'>{itemele.lessonDuration}</p>
                                                    </div>
                                                  </div>
                                                  <div
                                                    className="video-play-btn"
                                                  // onClick={() => { setVideo(courseele.videoLink) }}
                                                  >
                                                    {ele.chapterNumber === 1 ? videoPlayActive('red') : videoPlayActive('')}
                                                  </div>
                                                </div>
                                              </div>

                                            </>
                                          )
                                        })
                                      }
                                      {
                                        ele.testId &&
                                        <div className="accordian-item">
                                          <div className="accordian-item-icon">{inactiveIcon()}</div>
                                          <div className="accordian-item-section-2 test-section"
                                            onClick={() => {
                                              let a =
                                                ele &&
                                                ele.testDuration &&
                                                ele.testDuration.split(':');

                                              if (a) {
                                                let seconds =
                                                  +a[0] * 60 * 60 +
                                                  +a[1] * 60 +
                                                  +a[2];

                                                localStorage.setItem(
                                                  'timer',
                                                  seconds
                                                );
                                              }
                                              dispatch(
                                                test(
                                                  `${ele.testName === 'Final Test'
                                                    ? 'finalTest'
                                                    : 'moduleTest'
                                                  }?testId=${ele.testId}`
                                                )
                                              );
                                            }}
                                          >
                                            <div className="accordian-item-section-2-part-1" >
                                              <p className='accordian-item-chapter-number'>{testImage}</p>
                                              <div className="accordian-item-section-2-para">
                                                <p className='accordian-item-chapter-title'>{ele.testName}</p>
                                                <p className='accordian-item-chapter-duration'>10 min | {ele.questionCount} questions</p>
                                              </div>
                                            </div>
                                            <div
                                              className="video-play-btn"
                                            // onClick={() => { setVideo(courseele.videoLink) }}
                                            // onClick={() => {
                                            //   dispatch(
                                            //     videoLinkState(
                                            //       itemele.videoLink
                                            //     )
                                            //   );
                                            // }}
                                            >

                                            </div>
                                          </div>
                                        </div>
                                      }


                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                        }
                      </>
                    );
                  })}
                </div>
              </div>
            ) : (
              <h1>Loading</h1>
            )}
          </div>
        </div>
      </div >
    </div >
  );
};

export default OngoingOverview;
