import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import 'react-tabs/style/react-tabs.css';
import './Start.css';
import { design, start_pauseIcon, start_timeIcon } from '../../../utils/svgIcons';
import Slider from 'react-carousel-responsive';
import 'react-carousel-responsive/dist/styles.css';


const Start = () => {

  const startCourseData = [
    {

      id: 1,
      image: require('../../../assets/images/start-courses-image/What-Are-The-Most-Effective-Digital-Marketing-Strategies-_blog 1.png'),
      title: "Digital Marketing",
      chapter: '2 chapter',
      time: "2:23:24",
      btntext: "Design"
    },
    {
      id: 2,
      image: require('../../../assets/images/start-courses-image/banner-42 1.png'),
      title: "Marketing Courses",
      chapter: '2 chapter',
      time: "2:23:24",
      btntext: "Marketing"
    },
    {
      id: 3,
      image: require('../../../assets/images/start-courses-image/What-Are-The-Most-Effective-Digital-Marketing-Strategies-_blog 1.png'),
      title: "Digital Strategies",
      chapter: '2 chapter',
      time: "2:23:24",
      btntext: "Design"
    },
    {
      id: 2,
      image: require('../../../assets/images/start-courses-image/banner-42 1.png'),
      title: "Marketing Courses",
      chapter: '2 chapter',
      time: "2:23:24",
      btntext: "Marketing"
    },
    {
      id: 3,
      image: require('../../../assets/images/start-courses-image/What-Are-The-Most-Effective-Digital-Marketing-Strategies-_blog 1.png'),
      title: "Digital Strategies",
      chapter: '2 chapter',
      time: "2:23:24",
      btntext: "Design"
    },
    
    

  ]

  const startCategories = [
    'Design',
    'Development',
    'Business',
    'Music',
    'Finance',
    'Health & Fitness',
    'IT & Software',
    'Marketing',
    'Lifestyle',
    'Photography',

  ];
  const [activeSlide, setActiveSlide] = useState(0);

  const indicators = () => <div className="indicator"></div>
  return (
    <div className="start">
      <div className="start-greeting">Hello!</div>
      <div className="start-username">Mahendra Singh Dhoni</div>
      <Slider autoplay={true} autoplaySpeed={5000} slidesToShow={3}>
        {
          startCourseData.map(item =>
          (
            <div className='start-map-image'><img src={item.image} alt="" /></div>
          ))
        }
     
      </Slider>
      <div className='start-course-section2'>
        <div className='start-ongoing-courses'>Ongoing courses</div>
        <div className='start-seeall'>See All</div>
      </div>
      <div className='start-card2'>
        <div className='start-course1'>
          {
            startCourseData.map(item =>
            (
              <div className='start-course1-image'>
                <img src={item.image} alt="" />
                <div className='start-course-overlay'></div>
                <div className='start-title-container'>
                  <div className='start-title-chapter'>
                    <div className='start-course-section2-title'>{item.title}</div>
                    <div className='start-course-chapter'>{item.chapter}</div>
                  </div>

                  <button className='start-course-button'>Continue</button>

                </div>
              </div>


            ))
          }
        </div>
      </div>
      <div className='start-course-section2'>
        <div className='start-ongoing-courses'>Categories</div>
        <div className='start-seeall'>See All</div>
      </div>

      <div className="start-course-categories">

        <div className="start-course-categories-Body">
          {startCategories.map((ele, i) => {
            return (
              <div
                className="start-course-categories-Parent"
                key={i}
              >
                <div className="start-course-categories-Icon">
                  {design}
                </div>
                <div className="start-course-categories-Name">
                  {ele}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className='start-course-section2'>
        <div className='start-ongoing-courses'>Choice your course</div>
        <div className='start-seeall'>See All</div>
      </div>
      <div className='start-choice-course-subcategory'>
        <div className='start-subcategory-all'>All</div>
        <div className='start-subcategory-all'>Popular</div>
        <div className='start-subcategory-all'>Newest</div>
      </div>
      <div className='start-card'>
        <div className='start-choice1'>
          {
            startCourseData.map(item =>
            (
              <div className='start-choice-subcategory-image'>

                <div className='start-image-pause'>

                  <img src={item.image} alt="" />
                  <div className='start-course-overlay-2'></div>

                  <button className='start-designbtn'>{item.btntext}</button>
                </div>

                <div className='start-choice-subcategory-title'>{item.title}</div>
                <div className='start-choice-chapter'>{item.chapter}</div>
              </div>

            ))
          }
        </div>
      </div>
      <div className='start-course-section2'>
        <div className='start-ongoing-courses'>Top courses in Business</div>
        <div className='start-seeall'>See All</div>
      </div>
      <div className='start-card'>
        <div className='start-choice1'>
          {
            startCourseData.map(item =>
            (
              <div className='start-choice-subcategory-image'>
                <div className='start-image-pause'>
                  <div className='start-course-overlay-2'></div>
                  <img src={item.image} alt="" />
                  <div className='start-pauseIcon'>{start_pauseIcon}</div>
                </div>

                <div className='start-choice-subcategory-title'>{item.title}</div>
                <div className='start-chapter-time'>
                  <div className='start-choice-chapter2'>{item.chapter}</div>
                  <div>{start_timeIcon}</div>{item.time}
                </div>
              </div>

            ))
          }
        </div>
      </div>
      <div className='start-course-section2'>
        <div className='start-ongoing-courses'>Top courses in Design</div>
        <div className='start-seeall'>See All</div>
      </div>
      <div className='start-card'>
        <div className='start-choice1'>
          {
            startCourseData.map(item =>
            (
              <div className='start-choice-subcategory-image'>
                <div className='start-image-pause'>
                  <div className='start-course-overlay-2'></div>
                  <img src={item.image} alt="" />
                  <div className='start-pauseIcon'>{start_pauseIcon}</div>

                </div>
                <div className='start-choice-subcategory-title'>{item.title}</div>
                <div className='start-chapter-time'>
                  <div className='start-choice-chapter2'>{item.chapter}</div>
                  <div>{start_timeIcon}</div>{item.time}
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>


  );
};

export default Start
