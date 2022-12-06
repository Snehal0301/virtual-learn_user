import React from 'react'
import { start_pauseIcon } from '../../../utils/svgIcons'
import { start_timeIcon } from '../../../utils/svgIcons'
import './HomeCategoriesDesign.css'

const HomeCategoriesDesign = () => {
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
      title: "Digital Marketing Strategies",
      chapter: '2 chapter',
      time: "2:23:24",
      btntext: "Design"
    },
    {
      id: 3,
      image: require('../../../assets/images/start-courses-image/What-Are-The-Most-Effective-Digital-Marketing-Strategies-_blog 1.png'),
      title: "Digital Marketing Strategies",
      chapter: '2 chapter',
      time: "2:23:24",
      btntext: "Design"
    },
    {
      id: 3,
      image: require('../../../assets/images/start-courses-image/What-Are-The-Most-Effective-Digital-Marketing-Strategies-_blog 1.png'),
      title: "Digital Marketing Strategies",
      chapter: '2 chapter',
      time: "2:23:24",
      btntext: "Design"
    },
    {
      id: 3,
      image: require('../../../assets/images/start-courses-image/What-Are-The-Most-Effective-Digital-Marketing-Strategies-_blog 1.png'),
      title: "Digital Marketing Strategies",
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
  return (
    <div className='homecategoriesdesign'>
      <a href="#"> Design</a>
      <div className='home-categories-section2'>
        <div className='home-categories-courses-started'>Courses to get you started</div>
        <div className='home-categories-seeall'>See All</div>
      </div>
      <div className='home-categories-card'>
        <div className='home-categories-choice1'>
          {
            startCourseData.map(item =>
            (
              <div className='home-categories-subcategory-image'>
                <div className='home-categories-image-pause'>
                  <div className='home-categories-overlay'></div>
                  <img src={item.image} alt="" />
                  <div className='home-categories-pauseIcon'>{start_pauseIcon}</div>

                </div>
                <div className='home-categories-subcategory-title'>{item.title}</div>
                <div className='home-categories-time'>
                  <div className='home-categories-chapter2'>{item.chapter}</div>
                  <div>{start_timeIcon}</div>{item.time}
                </div>
              </div>

            ))
          }
        </div>
      </div>
      <div className='home-categories-section2'>
        <div className='home-categories-courses-started'>Featured Courses</div>
        <div className='home-categories-seeall'>See All</div>
      </div>
      <div className='home-categories-card'>
        <div className='home-categories-choice1'>
          {
            startCourseData.map(item =>
            (
              <div className='home-categories-subcategory-image'>
                <div className='home-categories-image-pause'>
                  <div className='home-categories-overlay'></div>
                  <img src={item.image} alt="" />
                  <div className='home-categories-pauseIcon'>{start_pauseIcon}</div>

                </div>
                <div className='home-categories-subcategory-title'>{item.title}</div>
                <div className='home-categories-time'>
                  <div className='home-categories-chapter2'>{item.chapter}</div>
                  <div>{start_timeIcon}</div>{item.time}
                </div>
              </div>

            ))
          }
        </div>
      </div>
      <div className='home-categories-section2'>
        <div className='home-categories-courses-started'>Subcategories</div>
        <div className='home-categories-seeall'>See All</div>
      </div>
      <div className="home-categories">

        <div className="home-categories-Body">
          {startCategories.map((ele: any, i: any) => {
            return (
              <div
                className="home-categories-Parent"
                key={i}
              >
                {/* <div className="start-course-categories-Icon">
          {design}
        </div> */}
                <div className="home-categories-Name">
                  {ele}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='home-categories-section2'>
        <div className='home-categories-courses-started'>All Courses</div>
        <div className='home-categories-seeall'>See All</div>
      </div>
      <div className='home-categories-card'>
        <div className='home-categories-choice1'>
          {
            startCourseData.map(item =>
            (
              <div className='home-categories-subcategory-image'>

                <div className='home-categories-image-pause'>
                  <img src={item.image} alt="" />
                  <div className='home-categories-overlay'></div>
                </div>
                <div className='home-categories-subcategory-title'>{item.title}</div>
                <div className="home-categories-titleBtn">
                <div className='home-categories-chapter'>{item.chapter}</div>
                <button className='home-categories-designbtn'>{item.btntext}</button>
                </div>
              
              </div>

            ))
          }
        </div>
      </div>

    </div>
  )
}

export default HomeCategoriesDesign