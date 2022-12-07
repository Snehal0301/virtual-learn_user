import Header from '../../components/homePage/header/Header';
import CourseCompleted from '../../components/homePage/quiz/courseCompleted/CourseCompleted';
import Quiz from '../../components/homePage/quiz/Quiz';
import QuizResults from '../../components/homePage/quiz/quizResults/QuizResults';
import QuizSuccess from '../../components/homePage/quiz/quizSuccessPage/quizSuccess';

import MyCourse from '../../components/homePage/mycourse/MyCourse';
import Categories from '../../components/homePage/start/categories/Categories';
import Start from '../../components/homePage/start/start';
import './HomePage.css';
import ChoiceYourCourse from './../../components/homePage/choiceYour-course/ChoiceYourCourse';
import HomeCategoriesDesign from '../../components/homePage/homeCategories-design/HomeCategoriesDesign';

const HomePage = () => {
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
        <QuizSuccess />
        {/* <QuizResults /> */}
        {/* <CourseCompleted /> */}
        {/* <MyCourse /> */}
      </div>
    </div>
  );
};

export default HomePage;
