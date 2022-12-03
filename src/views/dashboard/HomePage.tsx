import Header from '../../components/homePage/header/Header';
import MyCourse from '../../components/homePage/mycourse/MyCourse';
import Categories from '../../components/homePage/start/categories/Categories';
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
        <Categories/>
        {/* <MyCourse/> */}
      </div>
    </div>
  );
};

export default HomePage;
