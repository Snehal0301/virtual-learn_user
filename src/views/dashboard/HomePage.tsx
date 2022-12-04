import Header from '../../components/homePage/header/Header';
import Quiz from '../../components/homePage/quiz/Quiz';
import QuizSuccess from '../../components/homePage/quiz/quizSuccessPage/quizSuccess';

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
        <QuizSuccess />
      </div>
    </div>
  );
};

export default HomePage;
