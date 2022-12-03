import Header from '../../components/homePage/header/Header';
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
        <MyCourse/>
      </div>
    </div>
  );
};

export default HomePage;
