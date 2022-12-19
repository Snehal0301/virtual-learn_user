import './OngoingOverview.css';
import React, { useState, useEffect, useRef } from 'react';
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
  completedlessonIcon,
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
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import instructorImage from '../../../../assets/images/instructorImage.jpg';
import Accordian from '../accordian/Accordian';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { test, testisSuccess } from '../../../../redux/reducers/testSlice';
import { testShow, testSuccess } from '../../../../redux/reducers/Conditions';
import { testSuccessRed } from '../../../../redux/reducers/SuccessTestRed';
import { showSuccessPage } from '../../../../redux/reducers/showSuccesspage';
import { finaltestShowPage } from '../../../../redux/reducers/finalTestSuccess';
import Loading from '../../../../utils/loading/Loading';
import ShowMoreText from 'react-show-more-text';
import { Player } from 'video-react';
import toast, { Toaster } from 'react-hot-toast';
import { chapterResponse } from '../../../../redux/reducers/chapterResponses';
import { courseOverview } from '../../../../redux/reducers/courseOverview';
import {
  accordianIDState,
  chapterIDState,
  courseIDState,
  lessonIDState,
  pauseTimeState,
  unmountState,
} from '../../../../redux/reducers/pauseTime';
import { pauseUnmount } from '../../../../redux/reducers/pauseTimeSlice';

const OngoingOverview = () => {
  const [chapter, setChapter] = useState();
  const [overviewData, setOverviewData] = useState();
  const [defaultvideo, setDefaultVideo] = useState('');
  const [chapterLoading, setChapterLoading] = useState(false);
  const [overviewLoading, setOverviewLoading] = useState(false);
  const [testLoading, setTestLoading] = useState(false);
  const dispatch = useDispatch();

  // Toast
  const notify = () =>
    toast.error((t) => (
      <div className="toast-div">
        Please finish above sections
        <div className="toast-close" onClick={() => toast.dismiss(t.id)}>
          X
        </div>
      </div>
    ));

  const successCourse = () =>
    toast.success((t) => (
      <div className="toast-div">
        Course Enrolled succesfully
        <div className="toast-close" onClick={() => toast.dismiss(t.id)}>
          X
        </div>
      </div>
    ));

  const errorCourse = () =>
    toast.error((t) => (
      <div className="toast-div">
        Please enroll to access full course
        <div className="toast-close" onClick={() => toast.dismiss(t.id)}>
          X
        </div>
      </div>
    ));

  const alreadyCourse = () =>
    toast.success((t) => (
      <div className="toast-div">
        Already enrolled
        <div className="toast-close" onClick={() => toast.dismiss(t.id)}>
          X
        </div>
      </div>
    ));

  const inactiveTest = () =>
    toast.error((t) => (
      <div className="toast-div">
        Please finish above video's before attempting Test
        <div className="toast-close" onClick={() => toast.dismiss(t.id)}>
          X
        </div>
      </div>
    ));

  const attemptTest = () =>
    toast.error((t) => (
      <div className="toast-div">
        You have already attempted the test
        <div className="toast-close" onClick={() => toast.dismiss(t.id)}>
          X
        </div>
      </div>
    ));

  // Toast

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(testSuccess(false));
    dispatch(testisSuccess());
    dispatch(testSuccessRed(false));
    dispatch(showSuccessPage(false));
    dispatch(finaltestShowPage(false));
  }, []);

  const chapterResponses = useSelector((state) => state.chapterResponse.data);
  const courseOverviewData = useSelector((state) => state.courseOverview.data);

  const chapterLoad = useSelector((state) => state.chapterResponse);
  const courseLoad = useSelector((state) => state.courseOverview);

  useEffect(() => {
    if (courseLoad.loading) {
      setOverviewLoading(true);
    } else {
      setOverviewLoading(false);
    }
  }, [courseLoad]);

  useEffect(() => {
    if (chapterLoad.loading) {
      setChapterLoading(true);
    } else {
      setChapterLoading(false);
    }
  }, [chapterLoad]);

  useEffect(() => {
    chapterResponses &&
      chapterResponses.data &&
      setChapter(chapterResponses.data);
    chapterResponses &&
      chapterResponses.data &&
      setDefaultVideo(
        chapterResponses &&
          chapterResponses.data &&
          chapterResponses.data.chapterResponses[0] &&
          chapterResponses.data.chapterResponses[0].lessonResponses[0] &&
          chapterResponses.data.chapterResponses[0].lessonResponses[0]
            .videoLink &&
          chapterResponses.data.chapterResponses[0].lessonResponses[0].videoLink
      );
  }, [chapterResponses]);

  useEffect(() => {
    courseOverviewData &&
      courseOverviewData.data &&
      setOverviewData(courseOverviewData.data);
  }, [courseOverviewData]);

  console.log('new data', chapter, overviewData);

  // api call for chapter section

  // useEffect(() => {
  //   chapter && chapter.chapterResponses &&
  //     chapter.chapterResponses[0].lessonResponses
  //   chapter.chapterResponses[0].lessonResponses[0].videoLink &&
  //     // dispatch(firstVideoState('https://youtu.be/d1UNXbRxxZE'));
  //     setDefaultVideo(chapter.chapterResponses[0].lessonResponses[0].videoLink)
  // }, []);

  useEffect(() => {
    chapter && chapter.enrolled === true
      ? dispatch(tabToggleState(2))
      : dispatch(tabToggleState(1));
  }, [chapter]);

  const defaultVideoState = useSelector((state) => state.mycourse.firstVideo);

  const tabToggle = (id) => {
    dispatch(tabToggleState(id));
  };

  const tabState = useSelector((state) => state.mycourse.tab);

  const accordianToggle = (id) => {
    dispatch(accordianToggleState(id));
  };

  // Required State data
  const accordianStateID = useSelector((state) => state.pauseTime.accordianID); //this is chapter number
  const chapterStateID = useSelector((state) => state.pauseTime.chapterID);
  const lessonStateID = useSelector((state) => state.pauseTime.lessonID);
  const courseStateID = useSelector((state) => state.pauseTime.courseID);
  const pauseStateID = useSelector((state) => state.pauseTime.ptime);
  console.log(
    'id',
    accordianStateID,
    chapterStateID,
    lessonStateID,
    courseStateID
  );
  // Required State data

  const accordianState = useSelector((state) => state.mycourse.accordian);
  const [pause, setPause] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState();
  const [joinCourse, setJoinCourse] = useState(false);
  const [endVideo, setEndVideo] = useState(false);

  const onPause = () => {
    setPause(true);
    setPlaying(false);
    console.log('pause time', Math.floor(played) / 100);
  };

  const onPlay = () => {
    setPause(false);
    setPlaying(true);
  };

  const onEnd = async () => {
    setEndVideo(true);
    console.log('Ended');
    console.log('pauseData', pauseData);

    const resultPauseTime = new Date(played * 1000).toISOString().slice(11, 19);
    // console.log(typeof(pauseData));

    await axios
      .request(
        `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/pauseTime`,
        {
          method: 'put',
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('Token')}`,
          },
          data: {
            pauseTime: resultPauseTime,
            lessonId: pauseData.lessonId,
            chapterId: pauseData.chapterId,
            courseId: pauseData.courseId,
          },
        }
      )
      .then((res) => {
        console.log(res);
        // dispatch(courseOverview(pauseData.courseId));
        dispatch(chapterResponse(pauseData.courseId));
        // if (res.data.message === "Updated SuccessFully") {
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const pauseTimeLocal = localStorage.getItem('pauseTimeLocal');
  console.log('pauseTimeLocal', pauseTimeLocal);

  const componentUnMount = () => {
    const unmountPauseTime = new Date(pauseTimeLocal * 1000)
      .toISOString()
      .slice(11, 19);
    console.log('played', unmountPauseTime);

    const unmountData = {
      pauseTime: unmountPauseTime,
      lessonId: pauseData.lessonId,
      chapterId: pauseData.chapterId,
      courseId: pauseData.courseId,
    };

    dispatch(pauseUnmount(unmountData));

    // await axios
    //   .request(
    //     `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/pauseTime`,
    //     {
    //       method: 'put',
    //       headers: {
    //         Authorization: `Bearer ${sessionStorage.getItem('Token')}`,
    //       },
    //       data: {
    //         pauseTime: unmountPauseTime,
    //         lessonId: pauseData.lessonId,
    //         chapterId: pauseData.chapterId,
    //         courseId: pauseData.courseId
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res)
    //     console.log('unmountPauseTime', unmountPauseTime)
    //     // dispatch(courseOverview(pauseData.courseId));
    //     // dispatch(chapterResponse(pauseData.courseId));
    //     // if (res.data.message === "Updated SuccessFully") {
    //     // }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const continueModalData = async() => {
    await axios
      .request(
        `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/continue?courseId=23`,
        {
          method: 'get',
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('Token')}`,
          },
        }
      )
      .then((res) => {
        console.log('modal continue data',res)
      })
      .catch((err) => {
        console.log('Modal continue error',err);
      });
  }

  useEffect(() => {
    continueModalData()
  }, [])

  useEffect(() => {
    console.log('Component mounted');
    // dispatch(accordianIDState(accordianStateID-1))
    accordianToggle(accordianStateID - 1);

    return () => {
      console.log('Component unmounted');
      dispatch(tabToggleState(1));
      dispatch(unmountState('true'));
      dispatch(accordianToggleState(0));
      setDefaultVideo('');
      // dispatch(firstVideoState('https://youtu.be/d1UNXbRxxZE'));
      dispatch(videoLinkState(''));
      componentUnMount();
    };
  }, []);

  // componentUnMount()
  const unmountPauseTime = new Date(pauseStateID * 1000)
    .toISOString()
    .slice(11, 19);
  console.log('played', unmountPauseTime);

  const [pauseData, setPauseData] = useState({
    courseId: '',
    chapterId: '',
    lessonId: '',
    videoTitle: '',
  });

  useEffect(() => {
    chapter &&
      chapter.chapterResponses &&
      chapter.chapterResponses.length > 0 &&
      chapter.chapterResponses[0].lessonResponses &&
      chapter.chapterResponses[0].lessonResponses.length > 0 &&
      chapter.chapterResponses[0].lessonResponses[0].lessonName &&
      setPauseData({
        courseId: chapter.courseId,
        chapterId: chapter.chapterResponses[0].chapterId,
        lessonId: chapter.chapterResponses[0].lessonResponses[0].lessonId,
        videoTitle: chapter.chapterResponses[0].lessonResponses[0].lessonName,
      });
  }, [chapter]);

  console.log('pauseData', pauseData);
  // overviewData && overviewData.enrolled ?
  //   accordianToggle(accordianStateID - 1)
  //   :
  //   dispatch(accordianIDState(0))
  // accordianToggle(0)

  // clear logic
  // overviewData && !overviewData.enrolled && accordianToggle(0)

  const showChapter = (courseId, chapterId, lessonId, videoTitle) => {
    setPauseData({
      courseId: courseId,
      chapterId: chapterId,
      lessonId: lessonId,
      videoTitle: videoTitle,
    });
  };

  const getPauseVideoTime = (chapter, ele, itemele) => {
    getVideoState(itemele);
    showChapter(
      chapter.courseId,
      ele.chapterId,
      itemele.lessonId,
      itemele.lessonName
    );
    dispatch(courseIDState(chapter.courseId));
    dispatch(chapterIDState(ele.chapterId));
    dispatch(lessonIDState(itemele.lessonNumber));
  };

  const videoLink = useSelector((state) => state.mycourse.videoLink);

  const testQuestions = useSelector((state) => state.test);

  useEffect(() => {
    testQuestions.isSuccess && dispatch(testShow(true));
  }, [testQuestions]);

  const showTest = useSelector((state) => state.loginConditions.showTest);

  useEffect(() => {
    showTest && navigate('/myCourses/ongoingCourse/moduleTest');
    showTest && setTestLoading(false);
  }, [showTest]);

  const getVideoState = (itemele) => {
    dispatch(videoLinkState(itemele.videoLink));
    console.log('videoLink', videoLink);
    dispatch(firstVideoState(''));
  };

  useEffect(() => {
    courseOverviewData &&
      courseOverviewData.data &&
      setOverviewData(courseOverviewData.data);
  }, [joinCourse]);

  const [accState, setAccState] = useState(0);
  const [loop, setLoop] = useState(false);
  const [nextModal, setNextModal] = useState(false);
  const [defPause, setDefPause] = useState(false);
  const [firstPause, setFirstPause] = useState(true);
  const [vtitle, setVtitle] = useState(false);

  const playerRef = useRef();

  const defaultNormalPause = () => {
    setPause(false);
    setPlaying(true);
    setDefPause(true);
    setNextModal(false);
    setFirstPause(false);
    dispatch(unmountState('false'));
  };

  const enrollCourse = async (courseId) => {
    await axios
      .request(
        `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/enroll`,
        {
          method: 'post',
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('Token')}`,
          },
          data: {
            courseId: courseId,
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.message === 'Enrolled successfully') {
          successCourse();
          dispatch(chapterResponse(chapter.courseId));
          dispatch(courseOverview(chapter.courseId));
          dispatch(tabToggleState(2));
          setJoinCourse(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    console.log('Clicked');
  };

  const unmountStateRedux = useSelector((state) => state.pauseTime.unmount);

  console.log('unmountStateRedux', unmountStateRedux);

  // see this logic
  // if (overviewData && !overviewData.enrolled) {
  //   accordianToggle(0)
  // }

  const mouseOverEvent = () => {
    setVtitle(true);
  };
  const mouseOutEvent = () => {
    setVtitle(false);
  };

  return (
    <>
      {chapter && chapter.enrolled ? (
        <div className="homeCategories-head-link">
          <span onClick={componentUnMount}>
            <Link
              to="/myCourses"
              style={{ color: 'var(--blueFont)', cursor: 'pointer' }}
              onClick={componentUnMount}
            >
              My Course &nbsp; &nbsp; {'>'} &nbsp;
            </Link>
            &nbsp;
          </span>
          <span>
            <Link
              to="/myCourses"
              style={{ color: 'var(--blueFont)', cursor: 'pointer' }}
              onClick={componentUnMount}
            >
              Ongoing &nbsp; &nbsp; {'>'} &nbsp;
            </Link>
            &nbsp;
          </span>
          {overviewData && overviewData.courseName && overviewData.courseName}
        </div>
      ) : (
        ''
      )}
      <div className="ongoing-overview">
        <div className="ongoing-section-1">
          <div
            className="ongoing-section-video-player"
            onMouseOver={mouseOverEvent}
            onMouseOut={mouseOutEvent}
          >
            {pause && (
              <>
                <div className="pause-overlay">
                  <div className="pause-button" onClick={onPlay}>
                    {start_pauseIconVideo}
                  </div>
                  <div className="video-title-overlay">
                    {pauseData.videoTitle}
                  </div>
                </div>
              </>
            )}

            {unmountStateRedux === 'true' &&
              chapter &&
              chapter.enrolled === true && (
                <>
                  <div className="pause-overlay">
                    {firstPause && (
                      <div
                        className="continue-chapter-pause-button"
                        onClick={() => {
                          setNextModal(true);
                          setFirstPause(false);
                        }}
                      >
                        Continue Chapter {accordianStateID} Lesson{' '}
                        {lessonStateID}
                      </div>
                    )}

                    {nextModal && (
                      <div className="onpause-modal">
                        <p className="onpause-modal-title">
                          Your lesson paused at{' '}
                          <span>{Math.floor(played) / 100}</span> Do you want to
                          continue watching?
                        </p>
                        {/* <div className="onpause-modal-button"> */}
                        <button
                          className="onpause-button"
                          onClick={defaultNormalPause}
                        >
                          Continue Watching
                        </button>
                        <button
                          className="onpause-button beginning"
                          onClick={() => {
                            playerRef.current.seekTo(0, 'seconds');
                            setPause(false);
                            setPlaying(true);
                            dispatch(unmountState('false'));
                          }}
                        >
                          Watch from beginning
                        </button>
                      </div>
                    )}
                    {defPause && (
                      <div className="pause-button" onClick={onPlay}>
                        {start_pauseIconVideo}
                      </div>
                    )}
                    <div className="video-title-overlay">
                      {pauseData.videoTitle}
                    </div>
                  </div>
                </>
              )}

            <ReactPlayer
              url={videoLink ? videoLink : defaultvideo}
              controls="true"
              className="react-player"
              width="100%"
              height="100%"
              ref={playerRef}
              onPause={onPause}
              onPlay={onPlay}
              playing={playing}
              onEnded={onEnd}
              onSeek={() => {
                setPause(false);
              }}
              onProgress={(progress) => {
                setPlayed(progress.playedSeconds);
                dispatch(pauseTimeState(progress.playedSeconds));
                localStorage.setItem('pauseTimeLocal', progress.playedSeconds);
              }}
            />

            {vtitle && (
              <div className="video-title-overlay">{pauseData.videoTitle}</div>
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
                  {overviewData.chapterCount} Chapter |{' '}
                  {overviewData.lessonCount} lessons
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
                    <ShowMoreText
                      className="showmore"
                      anchorClass="show-more-style"
                    >
                      {overviewData.description}
                    </ShowMoreText>
                    {/* <ShowMoreText className="showmore" anchorClass="show-more-style">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis quod ullam, iste quo hic voluptatem, et tempore, modi quaerat placeat cum. Quam eos itaque quo omnis, quae delectus illo quos autem nobis ut possimus in, excepturi et illum sunt perspiciatis accusamus, repellat facilis fuga animi voluptatem pariatur nisi consequatur voluptates! Rem cum nobis itaque consequuntur eveniet a nihil ab quibusdam deleniti dolorum quia libero ullam culpa minima eaque debitis minus aperiam ducimus odio delectus, eius consequatur iusto odit! Nemo quasi corporis velit itaque neque fugit soluta dolores dolorem facere, molestias maxime non consequatur quidem odio totam esse iure, delectus fuga!</ShowMoreText> */}
                    {/* <label for="expanded" role="button">
                    SHOW MORE
                  </label> */}

                    {/* {
                      unmountStateRedux === 'true' ? <p>Unmount true</p> : <p>Unmount false</p>
                    } */}
                  </div>
                </div>
              ) : (
                <h3>Loading</h3>
              )}
            </>
          ) : (
            //  <div className="course-completion">
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
                      <p className="ongoing-course-desc-content-mobile-title-desc">
                        Preview this Course
                      </p>
                      {/* <div className="mobile-video-link">
                      <div className="mobile-video-section-1">
                        <img
                          src={require("../../../../assets/images/icn_play_orange.png")}
                          alt=""
                          className="video-logo"
                        />
                        <div className="mobile-video-desc">
                          <div className="mobile-video-title">Introduction</div>
                          <div className="mobile-video-dur">3 Min</div>
                        </div>
                      </div>
                      <img
                        src={require("../../../../assets/images/icn_previewgo.png")}
                        alt=""
                        className="right-icon"
                      />
                    </div> */}
                      <ShowMoreText anchorClass="show-more-style-mobile">
                        {overviewData.description}
                      </ShowMoreText>

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
                    <p
                      className="overview-content-title"
                      onClick={componentUnMount}
                    >
                      Course Includes
                    </p>
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
                      <div className="course-points-img">
                        {courseAccessIcon}
                      </div>
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
                          <div className="learn-points-img">
                            {learnCheckMark}
                          </div>
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
                      <img
                        src={
                          overviewData.profilePhoto
                            ? overviewData.profilePhoto
                            : require('../../../../assets/images/start-courses-image/profilepic.jpg')
                        }
                        alt="Profile-logo"
                      />
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
                      <ShowMoreText
                        lines={5}
                        className="showmore"
                        anchorClass="show-more-style"
                      >
                        {overviewData.instructorDescription}
                      </ShowMoreText>
                    </div>
                  </div>
                ) : (
                  <h3>Loading</h3>
                )}
              </div>
              {chapter && chapter.enrolled === true ? (
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
                      {chapter.courseDuration} Total length
                    </p>
                  </div>

                  <div className="course-sections">
                    {chapter.chapterResponses.map((ele, id) => {
                      let statusTest = false;
                      if (
                        ele.lessonResponses[ele.lessonResponses.length - 1]
                          .lessonCompletedStatus &&
                        ele.lessonResponses[ele.lessonResponses.length - 1]
                          .lessonCompletedStatus
                      ) {
                        statusTest = true;
                      }
                      return (
                        <>
                          {chapter.enrolled ? (
                            <>
                              {/* <Accordian active /> */}
                              <div
                                div
                                className="course-accordian"
                                onClick={() => {
                                  accordianToggle(id);
                                  dispatch(accordianIDState(id + 1));
                                }}
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
                                                {itemele.lessonCompletedStatus
                                                  ? completedlessonIcon
                                                  : itemele.lessonStatus
                                                  ? inactiveIcon('green')
                                                  : inactiveIcon('')}
                                                {/* {itemele.lessonCompletedStatus ? completedlessonIcon : itemele.lessonStatus ? inactiveIcon("green")  : inactiveIcon("")} */}
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
                                                    itemele.lessonStatus
                                                      ? getPauseVideoTime(
                                                          chapter,
                                                          ele,
                                                          itemele
                                                        )
                                                      : // getVideoState(itemele)

                                                        // showChapter(chapter.courseId,ele.chapterId,itemele.lessonId)
                                                        // showChapter(chapter.courseId, ele.chapterId, itemele.lessonId)
                                                        notify();
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
                                            {/* {itemele.lessonCompletedStatus ? completedlessonIcon : itemele.lessonStatus ? inactiveIcon("green") : inactiveIcon("")} */}
                                            {ele.chapterTestPercentage > 0
                                              ? completedlessonIcon
                                              : statusTest
                                              ? inactiveIcon('green')
                                              : inactiveIcon('')}
                                          </div>
                                          <div
                                            className="accordian-item-section-2 test-section"
                                            onClick={() => {
                                              // setTestLoading(true)
                                              let a =
                                                ele &&
                                                ele.testDuration &&
                                                ele.testDuration.split(':');

                                              if (a) {
                                                let seconds =
                                                  +a[0] * 60 * 60 +
                                                  +a[1] * 60 +
                                                  +a[2];

                                                sessionStorage.setItem(
                                                  'timer',
                                                  seconds
                                                );
                                              }

                                              statusTest
                                                ? ele &&
                                                  ele.chapterTestPercentage &&
                                                  ele.chapterTestPercentage > 0
                                                  ? attemptTest()
                                                  : dispatch(
                                                      test(
                                                        `${
                                                          ele.testName ===
                                                          'Final Test'
                                                            ? 'finalTest'
                                                            : 'moduleTest'
                                                        }?testId=${ele.testId}`
                                                      )
                                                    )
                                                : inactiveTest();
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
                                                  {ele.testDuration} min |{' '}
                                                  {ele.questionCount} questions
                                                </p>
                                              </div>
                                            </div>
                                            {ele.chapterTestPercentage &&
                                              ele.chapterTestPercentage > 0 && (
                                                <div className="percent-marks">
                                                  <div className="percent">
                                                    {ele.chapterTestPercentage.toFixed(
                                                      0
                                                    )}
                                                    %
                                                  </div>
                                                  <p className="approval-rate">
                                                    Approval Rate
                                                  </p>
                                                </div>
                                              )}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* <Accordion  preExpanded={['1']}  onChange={() => setAccState(ele.chapterNumber)}>
                              <AccordionItem uuid={ele.chapterNumber}>
                                <AccordionItemHeading>
                                  <AccordionItemButton>
                                    <p className={ele.chapterCompletedStatus ? "course-accordian-container-title-active" : "course-accordian-container-title"}>
                                      Chapter {ele.chapterNumber} - {ele.chapterName}{' '}
                                    </p>
                                    <p className="course-accordian-container-state">
                                      {accState === id + 1 ? '-' : '+'}
                                    </p>
                                  </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
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

                                            sessionStorage.setItem(
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
                                </AccordionItemPanel>
                              </AccordionItem>
                            </Accordion> */}
                            </>
                          ) : (
                            <>
                              {/* <Accordian inactive /> */}
                              <div
                                div
                                className="course-accordian"
                                onClick={() => setAccState(id)}
                              >
                                <div className="course-accordian-heading">
                                  <div className="course-accordian-container">
                                    {ele.chapterNumber === 1 ? (
                                      <p className="course-accordian-container-title">
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
                                    (accState === id ? 'accordian-show' : '') +
                                    ' course-accordian-content'
                                  }
                                >
                                  <div className="course-accordian-container-body">
                                    <div className="accordian-items">
                                      {ele.lessonResponses.map((itemele) => {
                                        return (
                                          <>
                                            <div className="accordian-item">
                                              <div className="accordian-item-icon">
                                                {ele.chapterNumber === 1 &&
                                                itemele.lessonStatus
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
                                                  onClick={() => {
                                                    ele.chapterNumber === 1 &&
                                                    itemele.lessonStatus
                                                      ? console.log('nothing')
                                                      : errorCourse();
                                                  }}
                                                >
                                                  {ele.chapterNumber === 1 &&
                                                  itemele.lessonStatus
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
                                              errorCourse();
                                              // let a =
                                              //   ele &&
                                              //   ele.testDuration &&
                                              //   ele.testDuration.split(':');

                                              // if (a) {
                                              //   let seconds =
                                              //     +a[0] * 60 * 60 +
                                              //     +a[1] * 60 +
                                              //     +a[2];

                                              //   sessionStorage.setItem(
                                              //     'timer',
                                              //     seconds
                                              //   );
                                              // }
                                              // dispatch(
                                              //   test(
                                              //     `${ele.testName ===
                                              //       'Final Test'
                                              //       ? 'finalTest'
                                              //       : 'moduleTest'
                                              //     }?testId=${ele.testId}`
                                              //   )
                                              // );
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
                                                  {ele.testDuration} min |{' '}
                                                  {ele.questionCount} questions
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
        <Toaster
          containerStyle={{
            top: 100,
            left: 20,
            bottom: 20,
            right: 20,
          }}
          toastOptions={{
            className: '',
            // style: {
            //   border: '1px solid #ee5c4d',
            //   padding: '10px',
            //   color: '#ee5c4d',
            //   width: '500px',
            // },
            success: {
              duration: 1500,
              style: {
                border: '1px solid #AAFF00',
                padding: '10px',
                color: 'green',
                width: '350px',
              },
            },
            error: {
              duration: 1500,
              style: {
                border: '1px solid #ee5c4d',
                padding: '10px',
                color: '#ee5c4d',
                width: '350px',
              },
            },
          }}
        />
        {(chapterLoading || overviewLoading || testLoading) && <Loading />}
      </div>
    </>
  );
};

export default OngoingOverview;
