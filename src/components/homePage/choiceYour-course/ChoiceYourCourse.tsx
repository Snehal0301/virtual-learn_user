import React from 'react'
import { design } from '../../../utils/svgIcons';
import './choiceYourCourse.css'

const ChoiceYourCourse = () => {
  const choiceCourseData = [
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

  ]

  const choiceCategories = [
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
    <div className='choice-your-course'>
      <div className='choice-your-course-heading'>Choice your course</div>

      <div className='choice-your-course-categories-title'>Categories</div>


      <div className="choice-your-course-categories">

        <div className="choice-your-course-categories-Body">
          {choiceCategories.map((ele: any, i: any) => {
            return (
              <div
                className="choice-your-coursecategories-Parent"
                key={i}
              >
                <div className="choice-your-coursecategories-Icon">
                  {design}
                </div>
                <div className="choice-your-coursecategories-Name">
                  {ele}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='choice-your-course-allcourse'>All courses</div>
      <div className='choice-your-course-card'>
        <div className='choice-your-course-choice1'>
          {
            choiceCourseData.map(item =>
            (
              <div className='choice-your-coursesubcategory-image'>


                <img src={item.image} alt="" />


                <div className='choice-your-coursesubcategory-title'>{item.title}</div>
                <div className='choice-your-cahpbtn'>
                  <div className='choice-your-coursechapter'>{item.chapter}</div>
                  <button className='choice-yourcourse-designbtn'>{item.btntext}</button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ChoiceYourCourse