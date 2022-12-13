import Header from '../../components/homePage/header/Header';
import CourseCompleted from '../../components/homePage/quiz/courseCompleted/CourseCompleted';
import Quiz from '../../components/homePage/quiz/Quiz';
import QuizResults from '../../components/homePage/quiz/quizResults/QuizResults';
import QuizSuccess from '../../components/homePage/quiz/quizSuccessPage/quizSuccess';

import MyCourse from '../../components/homePage/mycourse/MyCourse';
import Categories from '../../components/homePage/start/categories/Categories';
import './HomePage.css';
import ChoiceYourCourse from './../../components/homePage/choiceYour-course/ChoiceYourCourse';
import HomeCategoriesDesign from '../../components/homePage/homeCategories-design/HomeCategoriesDesign';
import Start from '../../components/homePage/start/start';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    fetch(
      `http://virtuallearnapp2-env.eba-wrr2p8zk.ap-south-1.elasticbeanstalk.com/refreshToken`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('Token')}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.jwtToken) {
          localStorage.setItem('Token', res.jwtToken);
          sessionStorage.setItem('Token', res.jwtToken);
        }
      })
      .catch((err) => {
        console.log('errrr', err);
      });
  }, []);

  return (
    <div className="homePage">
      <div className="homePageNavbar">
        <Header />
      </div>
      <div className="homePageBody">
        {/* <Start /> */}
        {/* <ChoiceYourCourse/> */}
        {/* <HomeCategoriesDesign/> */}
        {/* <Start /> */}
        {/* <Quiz /> */}
        {/* <QuizResults /> */}
        {/* <CourseCompleted /> */}
        {/* <MyCourse /> */}
        {/* <Categories /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
