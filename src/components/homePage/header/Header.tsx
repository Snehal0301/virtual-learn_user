import React, { useState } from 'react';
import './Header.css';
import {
  bellIcon,
  closeIcon,
  closeProfile,
  design,
  filterIcon,
  graduationCapIcon,
  headerLogo,
  logoutIcon,
  profileIcon,
  searchIcon,
  settingsIcon,
} from '../../../utils/svgIcons';
import { useDispatch, useSelector } from 'react-redux';
import {
  headerProfile,
  modalFilter,
  notificationSection,
  profileDrawer,
  profileSection,
  settingsSection,
} from '../../../redux/reducers/headerProfileOptions';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import Profile from './profile/Profile';
import Settings from './settings/Settings';
import PrivacyPolicy from './privacypolicy/PrivacyPolicy';
import Terms from './terms/Terms';
import Notification from './notification/Notification';
import { searchFocus } from '../../../redux/reducers/headerProfileOptions';
import EditProfile from './edit-profile/EditProfile';

const Header = () => {
  const [onChange, setOnChange] = useState('');

  const topSearch = [
    'Python',
    'Java',
    'Javascript',
    'Leadership',
    'Photoshop',
    'React',
    'Communication',
  ];

  const topCategories = [
    'Design',
    'Development',
    'Business',
    'Finance',
    'Health & Fitness',
    'Music',
    'IT & Software',
    'Marketing',
    'Lifestyle',
    'Photography',
    'Teaching',
  ];

  const searchdata: any = [
    {
      title: 'User Experience Design Fundamentals',
      img: require('../../../assets/images/dummy/1.png'),
      chapters: '14 Chapter',
      cat: 'Design',
    },
    {
      title: 'Digital Marketing for 2021 Masterclass',
      img: require('../../../assets/images/dummy/2.png'),
      chapters: '21 Chapter',
      cat: 'Design',
    },
    {
      title: 'Graphic Design Masterclass - Learn GREAT Design',
      img: require('../../../assets/images/dummy/3.png'),
      chapters: '11 Chapter',
      cat: 'Design',
    },
    {
      title: 'Study on Design Principles and 7 features ',
      img: require('../../../assets/images/dummy/4.png'),
      chapters: '7 Chapter',
      cat: 'Design',
    },
  ];

  const Duration = [
    '5/10 Chapters',
    '5/10 Chapters',
    '10/20 Chapters',
    '20/30 Chapters',
    '30/40 Chapters',
    '50+ Chapters',
  ];

  const [notifydata, setnotifydata] = useState(false);
  const handleProfileClick = () => {
    dispatch(profileDrawer(true));
    dispatch(headerProfile(false));
    dispatch(profileSection(true));
  };

  const handlenotify = () => {
    dispatch(profileDrawer(true));
    dispatch(headerProfile(false));
    dispatch(notificationSection(true));
  };

  const handleSetting = () => {
    dispatch(profileDrawer(true));
    dispatch(headerProfile(false));
    dispatch(settingsSection(true));
  };
  const dispatch = useDispatch();
  const headerOptions = useSelector((state: any) => state.headerProfile.value);

  const searchFieldFocus = useSelector(
    (state: any) => state.headerProfile.searchFocused
  );
  const profileDrawerState = useSelector(
    (state: any) => state.headerProfile.drawer
  );
  const profileSectionState = useSelector(
    (state: any) => state.headerProfile.profile
  );
  const notificationSectionState = useSelector(
    (state: any) => state.headerProfile.notification
  );
  const settingsSectionState = useSelector(
    (state: any) => state.headerProfile.settings
  );
  const modalFilterStatus = useSelector(
    (state: any) => state.headerProfile.filterModal
  );

  const changeHandler = (e: any) => {
    setOnChange(e.target.value);
  };

  return (
    <>
      <div className="header-parent">
        <div
          className={searchFieldFocus ? 'header headerSearchFocus' : 'header'}
        >
          <div className="header-logo">{headerLogo}</div>
          <form className="header-search">
            <input
              type="text"
              className={
                searchFieldFocus
                  ? 'header-searchField header-searchFieldPadding'
                  : 'header-searchField'
              }
              placeholder="Search"
              onFocus={() => {
                dispatch(searchFocus(true));
              }}
              onChange={changeHandler}
            />
            {!searchFieldFocus && (
              <div className="header-searchIcon">{searchIcon}</div>
            )}
            {searchFieldFocus && (
              <button className="header-searchIconButton">{searchIcon}</button>
            )}
          </form>

          {!searchFieldFocus ? (
            <div className="header-options">
              <div className="header-optionsBell" onClick={handlenotify}>
                {bellIcon}
              </div>
              <div className="header-settings" onClick={handleSetting}>
                {settingsIcon}
              </div>
              <div className="header-profilePic">
                <img
                  src={require('../../../assets/images/dhoni.png')}
                  alt="Profile Pic"
                  onClick={(e: any) => {
                    e.stopPropagation();
                    dispatch(headerProfile(!headerOptions));
                  }}
                />
                {headerOptions && (
                  <div
                    className="header-profileOptions"
                    onClick={(e: any) => {
                      e.stopPropagation();
                    }}
                  >
                    <div className="header-profileOption header-profileOptionBorder">
                      <div className="header-profileOptionIcon">
                        {graduationCapIcon}
                      </div>
                      <div className="header-profileOptiontext">My Course</div>
                    </div>

                    <div
                      className="header-profileOption  header-profileOptionBorder"
                      onClick={handleProfileClick}
                    >
                      <div className="header-profileOptionIcon">
                        {profileIcon}
                      </div>
                      <div className="header-profileOptiontext">My Profile</div>
                    </div>

                    <div
                      className="header-profileOption"
                      onClick={() => {
                        localStorage.setItem('auth', 'false');
                        window.location.reload();
                      }}
                    >
                      <div className="header-profileOptionIcon">
                        {logoutIcon}
                      </div>
                      <div className="header-profileOptiontext">Logout</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="header-options">
              {searchFieldFocus && (
                <button
                  className="header-filterButton"
                  onClick={() => {
                    dispatch(modalFilter(true));
                  }}
                >
                  {filterIcon}
                </button>
              )}
              <div
                onClick={() => {
                  dispatch(searchFocus(false));
                }}
                className="header-optionsCloseIcon"
              >
                {closeProfile}
              </div>
            </div>
          )}
          {searchFieldFocus && (
            <div className="header-categoryContents">
              {!(onChange.length > 1) ? (
                <>
                  {!(onChange.length > 0) ? (
                    <div className="headerSearchCategoriesTopSearch">
                      <div className="headerSearchCategoriesTopSearchTitle">
                        Top Search
                      </div>
                      <div className="headerSearchCategoriesTopSearchBody">
                        {topSearch.map((ele: any, i: any) => {
                          return (
                            <div
                              className="headerSearchCategoriesTopSearchesParent"
                              key={i}
                            >
                              <div className="headerSearchCategoriesTopSearchesName">
                                {ele}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="headerSearchcategories-nosearchResults">
                      <div
                        className="headerSearchCategoriesTopSearchTitle"
                        style={{ fontSize: '32px' }}
                      >
                        No matching course
                      </div>
                      <div className="headerSearchcategories-TryDiffCourse">
                        Try a different search or browse categories
                      </div>
                    </div>
                  )}
                  <div className="headerSearchCategoriesTopSearch">
                    <div className="headerSearchCategoriesTopSearchTitle">
                      Search from Categories
                    </div>
                    <div className="headerSearchCategoriesTopSearchBody">
                      {topCategories.map((ele: any, i: any) => {
                        return (
                          <div
                            className="headerSearchCategoriesTopSearchesParent"
                            key={i}
                          >
                            <div className="headerSearchCategoriesTopSearchesIcon">
                              {design}
                            </div>
                            <div className="headerSearchCategoriesTopSearchesName">
                              {ele}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <div className="headerSearch-response">
                  {searchdata.map((ele: any, i: number) => {
                    return (
                      <div className="headersearch-responseBody" key={i}>
                        <div className="headerSearch-responsePic">
                          <img src={ele.img} alt={ele.title} />
                        </div>
                        <div className="headerSearch-responseContainer">
                          <div className="headerSearch-responseTitle">
                            {ele.title}
                          </div>
                          <div className="headerSearch-responseChapters">
                            {ele.chapters}
                          </div>
                          <div className="headerSearch-responseCategory">
                            {ele.cat}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="overlay">
        <Drawer
          open={profileDrawerState}
          onClose={handleProfileClick}
          direction="right"
          enableOverlay={false}
          style={{
            width: '25rem',
          }}
        >
          {profileSectionState && <Profile />}

          {/* {
            notificationSectionState && <Notification />
          }
          
          {
            settingsSectionState && <Settings />
          } */}
          {/* <Profile /> */}
          {/* {setting ? <Settings /> : <Profile />} */}
          {/* <Settings /> */}
          {/* <PrivacyPolicy/> */}
          <Terms />
          {/* {
          notifydata ? <Notification /> : <Profile />
        } */}
        </Drawer>
      </div>
      {modalFilterStatus && (
        <aside
          className="headerSearch-filterModal"
          onClick={() => {
            dispatch(modalFilter(false));
          }}
        >
          <div
            className="headerSearch-filterActualModal"
            onClick={(e: any) => {
              e.stopPropagation();
            }}
          >
            <div className="headerSearch-filterModalBody">
              <div className="headerSearch-filterModalBodyTitle">
                Search Fillters
              </div>
              <div className="headerSearch-filterModalCategory">
                {' '}
                <div className="headerSearch-filterModalCategoryTitle">
                  Search from Categories
                </div>
                <div className="headerSearch-filterModalCategoryBody">
                  {topCategories.map((ele: any, i: any) => {
                    return (
                      <div
                        className="headerSearchCategoriesTopSearchesParent headerSearchCategories-chpBorder"
                        key={i}
                      >
                        <div className="headerSearchCategoriesTopSearchesIcon">
                          {design}
                        </div>
                        <div className="headerSearchCategoriesTopSearchesName">
                          {ele}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="headerSearch-filterModalDuration">
                <div className="headerSearch-filterModalCategoryTitle">
                  Duration
                </div>
                <div className="headerSearch-filterModalCategoryBody">
                  {Duration.map((ele: any, i: any) => {
                    return (
                      <div
                        className="headerSearchCategoriesTopSearchesParent  headerSearchCategories-chpBorder"
                        key={i}
                      >
                        <div className="headerSearchCategoriesTopSearchesIcon">
                          {design}
                        </div>
                        <div className="headerSearchCategoriesTopSearchesName">
                          {ele}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="headerSearch-filterModalButtons">
                <button className="headerSearch-applyFilterButton">
                  Apply Filter
                </button>
                <button className="headerSearch-clearAllButton">
                  Clear All
                </button>
              </div>
            </div>
            <div
              className="headerSearch-filterModalBodyCloseIcon"
              onClick={() => {
                dispatch(modalFilter(false));
              }}
            >
              {closeIcon}
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default Header;
