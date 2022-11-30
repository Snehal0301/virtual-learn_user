import Header from '../../components/homePage/header/Header';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="homePageNavbar">
        <Header />
      </div>
      <div className="homePageBody">
        <h1>Body</h1>
      </div>
    </div>
  );
};

export default HomePage;
