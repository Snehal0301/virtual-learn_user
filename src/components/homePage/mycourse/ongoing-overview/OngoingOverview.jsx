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
import Loading from '../../../../utils/loading/Loading';
import ShowMoreText from "react-show-more-text";

const OngoingOverview = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [chapter, setChapter] = useState();
  const [overviewData, setOverviewData] = useState();
  const [defaultvideo, setDefaultVideo] = useState('');
  const [chapterLoading, setChapterLoading] = useState(false);
  const [overviewLoading, setOverviewLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(testSuccess(false));
    dispatch(testisSuccess());
    dispatch(testSuccessRed(false));
    dispatch(showSuccessPage(false));
    dispatch(finaltestShowPage(false));
  }, []);

  const chapterResponses = useSelector((state) => state.chapterResponse.data);
  const courseOverview = useSelector((state) => state.courseOverview.data);

  const chapterLoad = useSelector((state) => state.chapterResponse);
  const courseLoad = useSelector((state) => state.courseOverview);

  useEffect(() => {
    if (chapterLoad.loading) {
      setChapterLoading(true);
    } else {
      setChapterLoading(false);
    }
  }, [chapterLoad]);

  useEffect(() => {
    if (courseLoad.loading) {
      setOverviewLoading(true);
    } else {
      setOverviewLoading(false);
    }
  }, [courseLoad]);

  useEffect(() => {
    chapterResponses &&
      chapterResponses.data &&
      setChapter(chapterResponses.data);
    chapterResponses &&
      chapterResponses.data &&
      setDefaultVideo(
        chapterResponses.data.chapterResponses[0].lessonResponses[0].videoLink
      );
  }, [chapterResponses]);

  useEffect(() => {
    courseOverview &&
      courseOverview.data &&
      setOverviewData(courseOverview.data);
  }, [courseOverview]);

  console.log('new data', chapter, overviewData);

  // api call for chapter section

  useEffect(() => {
    dispatch(firstVideoState(defaultvideo));
  }, [defaultvideo]);

  // const defaultVideoState = useSelector((state) => state.mycourse.firstVideo);

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
    dispatch(videoLinkState(itemele.videoLink));
  };

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
            courseId: courseId,
          },
        }
      )
      .then((res) => {
        console.log(res)(
          res.data.message === 'Enrolled successfully' && window.location.reload
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          {pause && (
            <>
              <div className="pause-overlay" onClick={onPlay}>
                <div className="pause-button">{start_pauseIconVideo}</div>
              </div>
            </>
          )}
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
                  <ShowMoreText className="showmore" anchorClass="show-more-style">{overviewData.description}</ShowMoreText>
                  {/* <ShowMoreText className="showmore" anchorClass="show-more-style">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis quod ullam, iste quo hic voluptatem, et tempore, modi quaerat placeat cum. Quam eos itaque quo omnis, quae delectus illo quos autem nobis ut possimus in, excepturi et illum sunt perspiciatis accusamus, repellat facilis fuga animi voluptatem pariatur nisi consequatur voluptates! Rem cum nobis itaque consequuntur eveniet a nihil ab quibusdam deleniti dolorum quia libero ullam culpa minima eaque debitis minus aperiam ducimus odio delectus, eius consequatur iusto odit! Nemo quasi corporis velit itaque neque fugit soluta dolores dolorem facere, molestias maxime non consequatur quidem odio totam esse iure, delectus fuga!</ShowMoreText> */}
                  {/* <label for="expanded" role="button">
                    SHOW MORE
                  </label> */}
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
              {overviewData ? (
                <div className="ongoing-course-desc-mobile">
                  <div className="ongoing-course-desc-title-mobile">
                    <p>{overviewData.courseTagLine}</p>
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
                      {overviewData.description}
                    </p>
                    <label for="expanded" role="button">
                      SHOW MORE
                    </label>
                    <img
                      src={require('../../../../assets/images/icn_previewgo.png')}
                      alt=""
                      className="right-icon"
                    />
                  </div>
                </div>
              ) : (
                <h3>Loading.....</h3>
              )}

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
                      Access on mobile, desktop and tv
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
                {overviewData &&
                  overviewData.learningOutCome &&
                  overviewData.learningOutCome.map((ele) => {
                    return (
                      <div className="learn-points">
                        <div className="learn-points-img">{learnCheckMark}</div>
                        <div className="learn-points-title">{ele}</div>
                      </div>
                    );
                  })}
              </div>

              <div className="overview-req">
                <p className="overview-req-title">Requirements</p>
                <ul>
                  {overviewData &&
                    overviewData.requirements &&
                    overviewData.requirements.map((ele) => {
                      return <li>{ele}</li>;
                    })}
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
                        {overviewData.designation} {''}
                        {overviewData.url}
                      </div>
                    </div>
                  </div>
                  <div className="instructor-about">
                    <input type="checkbox" id="expanded"></input>
                    <ShowMoreText lines={5} className="showmore" anchorClass="show-more-style">{overviewData.instructorDescription}</ShowMoreText>

                  </div>
                </div>
              ) : (
                <h3>Loading</h3>
              )}
            </div>
            {overviewData && overviewData.enrolled ? (
              ''
            ) : (
              <button
                className="join-course"
                onClick={() => enrollCourse(overviewData.courseId)}
              >
                Join Course
              </button>
            )}
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
                        {chapter.enrolled ? (
                          <>
                            {/* <Accordian active /> */}
                            <div
                              div
                              className="course-accordian"
                              onClick={() => accordianToggle(id)}
                            >
                              <div className="course-accordian-heading">
                                <div className="course-accordian-container">
                                  <p
                                    className={
                                      ele.chapterCompletedStatus
                                        ? 'course-accordian-container-title-active'
                                        : 'course-accordian-container-title'
                                    }
                                  >
                                    Chapter {ele.chapterNumber} -{' '}
                                    {ele.chapterName}{' '}
                                  </p>

                                  <p className="course-accordian-container-state">
                                    {accordianState === id ? '-' : '+'}
                                  </p>
                                </div>
                              </div>
                              <div
                                className={
                                  (accordianState === id
                                    ? 'accordian-show'
                                    : '') + ' course-accordian-content'
                                }
                              >
                                <div className="course-accordian-container-body">
                                  <div className="accordian-items">
                                    {ele.lessonResponses.map((itemele) => {
                                      return (
                                        <>
                                          <div className="accordian-item">
                                            <div className="accordian-item-icon">
                                              {itemele.lessonStatus
                                                ? inactiveIcon('green')
                                                : inactiveIcon('')}
                                            </div>
                                            <div className="accordian-item-section-2">
                                              <div className="accordian-item-section-2-part-1">
                                                <p className="accordian-item-chapter-number">
                                                  {itemele.lessonNumber}
                                                </p>
                                                <div className="accordian-item-section-2-para">
                                                  <p className="accordian-item-chapter-title">
                                                    {itemele.lessonName}
                                                  </p>
                                                  <p className="accordian-item-chapter-duration">
                                                    {itemele.lessonDuration}
                                                  </p>
                                                </div>
                                              </div>
                                              <div
                                                className="video-play-btn"
                                                // onClick={() => { setVideo(courseele.videoLink) }}
                                                onClick={() => {
                                                  getVideoState(itemele);
                                                }}
                                              >
                                                {itemele.lessonStatus
                                                  ? videoPlayActive('red')
                                                  : videoPlayActive('')}
                                              </div>
                                            </div>
                                          </div>
                                        </>
                                      );
                                    })}
                                    {ele.testId && (
                                      <div className="accordian-item">
                                        <div className="accordian-item-icon">
                                          {inactiveIcon()}
                                        </div>
                                        <div
                                          className="accordian-item-section-2 test-section"
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
                                                `${
                                                  ele.testName === 'Final Test'
                                                    ? 'finalTest'
                                                    : 'moduleTest'
                                                }?testId=${ele.testId}`
                                              )
                                            );
                                          }}
                                        >
                                          <div className="accordian-item-section-2-part-1">
                                            <p className="accordian-item-chapter-number">
                                              {testImage}
                                            </p>
                                            <div className="accordian-item-section-2-para">
                                              <p className="accordian-item-chapter-title">
                                                {ele.testName}
                                              </p>
                                              <p className="accordian-item-chapter-duration">
                                                10 min | {ele.questionCount}{' '}
                                                questions
                                              </p>
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
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            {/* <Accordian inactive /> */}
                            <div
                              div
                              className="course-accordian"
                              onClick={() => accordianToggle(id)}
                            >
                              <div className="course-accordian-heading">
                                <div className="course-accordian-container">
                                  {ele.chapterNumber === 1 ? (
                                    <p className="course-accordian-container-title-active">
                                      Chapter {ele.chapterNumber} -{' '}
                                      {ele.chapterName}{' '}
                                    </p>
                                  ) : (
                                    <p className="course-accordian-container-title">
                                      Chapter {ele.chapterNumber} -{' '}
                                      {ele.chapterName}{' '}
                                    </p>
                                  )}
                                  <p className="course-accordian-container-state">
                                    {accordianState === id ? '-' : '+'}
                                  </p>
                                </div>
                              </div>
                              <div
                                className={
                                  (accordianState === id
                                    ? 'accordian-show'
                                    : '') + ' course-accordian-content'
                                }
                              >
                                <div className="course-accordian-container-body">
                                  <div className="accordian-items">
                                    {ele.lessonResponses.map((itemele) => {
                                      return (
                                        <>
                                          <div className="accordian-item">
                                            <div className="accordian-item-icon">
                                              {ele.chapterNumber === 1
                                                ? inactiveIcon('green')
                                                : inactiveIcon('')}
                                            </div>
                                            <div className="accordian-item-section-2">
                                              <div className="accordian-item-section-2-part-1">
                                                <p className="accordian-item-chapter-number">
                                                  {itemele.lessonNumber}
                                                </p>
                                                <div className="accordian-item-section-2-para">
                                                  <p className="accordian-item-chapter-title">
                                                    {itemele.lessonName}
                                                  </p>
                                                  <p className="accordian-item-chapter-duration">
                                                    {itemele.lessonDuration}
                                                  </p>
                                                </div>
                                              </div>
                                              <div
                                                className="video-play-btn"
                                                // onClick={() => { setVideo(courseele.videoLink) }}
                                              >
                                                {ele.chapterNumber === 1
                                                  ? videoPlayActive('red')
                                                  : videoPlayActive('')}
                                              </div>
                                            </div>
                                          </div>
                                        </>
                                      );
                                    })}
                                    {ele.testId && (
                                      <div className="accordian-item">
                                        <div className="accordian-item-icon">
                                          {inactiveIcon()}
                                        </div>
                                        <div
                                          className="accordian-item-section-2 test-section"
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
                                                `${
                                                  ele.testName === 'Final Test'
                                                    ? 'finalTest'
                                                    : 'moduleTest'
                                                }?testId=${ele.testId}`
                                              )
                                            );
                                          }}
                                        >
                                          <div className="accordian-item-section-2-part-1">
                                            <p className="accordian-item-chapter-number">
                                              {testImage}
                                            </p>
                                            <div className="accordian-item-section-2-para">
                                              <p className="accordian-item-chapter-title">
                                                {ele.testName}
                                              </p>
                                              <p className="accordian-item-chapter-duration">
                                                10 min | {ele.questionCount}{' '}
                                                questions
                                              </p>
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
                                          ></div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
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
      </div>
      {(chapterLoading || overviewLoading) && <Loading />}
    </div>
  );
};

export default OngoingOverview;
