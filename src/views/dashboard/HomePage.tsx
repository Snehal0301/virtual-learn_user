import Header from '../../components/homePage/header/Header';
import CourseCompleted from '../../components/homePage/quiz/courseCompleted/CourseCompleted';
import Quiz from '../../components/homePage/quiz/Quiz';
import QuizResults from '../../components/homePage/quiz/quizResults/QuizResults';
import QuizSuccess from '../../components/homePage/quiz/quizSuccessPage/quizSuccess';

import MyCourse from '../../components/homePage/mycourse/MyCourse';
import Start from '../../components/homePage/start/start';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePageNavbar">
        <Header />
      </div>

      <div className="homePageBody">
        {/* <Start /> */}
        {/* <Quiz /> */}
        {/* <QuizSuccess /> */}
        {/* <QuizResults /> */}
        {/* <CourseCompleted /> */}
        <MyCourse/>
      </div>
    </div>
  );
};

export default HomePage;
