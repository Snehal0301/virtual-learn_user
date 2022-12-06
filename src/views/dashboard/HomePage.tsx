import Header from '../../components/homePage/header/Header';
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
        <HomeCategoriesDesign/>
      </div>
    </div>
  );
};

export default HomePage;
