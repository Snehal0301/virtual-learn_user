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
  editProfileSection,
  headerProfile,
  modalFilter,
  notificationSection,
  privacySection,
  profileDrawer,
  profileSection,
  settingsSection,
  termsSection,
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
import ChangePassword from './changePassword/ChangePassword';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [onChange, setOnChange] = useState('');

  const navigate = useNavigate();

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
    // dispatch(notificationSection(false))
    // dispatch(termsSection(false))
    // dispatch(privacySection(false))
  };

  const handleCloseDrawer = () => {
    dispatch(profileDrawer(false));
    dispatch(headerProfile(false));
    setLeftdrawer(false);
  };

  const handleCloseDrawerMobile = () => {
    setLeftdrawer(false);
  };

  const handlenotify = () => {
    dispatch(profileDrawer(true));
    dispatch(headerProfile(false));
    dispatch(profileSection(false));
    dispatch(notificationSection(true));
    dispatch(settingsSection(false));
  };

  const handleSetting = () => {
    dispatch(profileDrawer(true));
    dispatch(profileSection(false));
    dispatch(notificationSection(false));
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

  const toggleMobileHeader = () => {
    setArrow(true);
    dispatch(searchFocus(true));
  };
  const closeMobileHeader = () => {
    setArrow(false);
    dispatch(searchFocus(false));
  };

  const handleMobileDrawer = () => {
    setLeftdrawer(true);
  };

  const [arrow, setArrow] = useState(false);
  const [leftdrawer, setLeftdrawer] = useState(false);
  return (
    <>
      <div className="header-parent">
        <div
          className={searchFieldFocus ? 'header headerSearchFocus' : 'header'}
        >
          <div
            className="header-logo"
            onClick={() => {
              navigate('/');
            }}
          >
            {headerLogo}
          </div>
          {arrow ? (
            <img
              className="mobile-logo"
              src={require('../../../assets/images/right_arrow.png')}
              alt=""
              onClick={closeMobileHeader}
            />
          ) : (
            <img
              className="mobile-logo"
              src={require('../../../assets/images/burger-mobile-icon.png')}
              alt=""
              onClick={handleMobileDrawer}
            />
          )}
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
            <>
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
                        <div className="header-profileOptiontext">
                          My Course
                        </div>
                      </div>

                      <div
                        className="header-profileOption  header-profileOptionBorder"
                        onClick={handleProfileClick}
                      >
                        <div className="header-profileOptionIcon">
                          {profileIcon}
                        </div>
                        <div className="header-profileOptiontext">
                          My Profile
                        </div>
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
              <div
                className="mobile-search"
                style={{ filter: 'invert(1)' }}
                onClick={toggleMobileHeader}
              >
                {searchIcon}
              </div>
            </>
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
              <div className="mobile-form-with-filter">
                <form className="mobile-header-search">
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
                  <div className="header-searchIcon">{searchIcon}</div>
                </form>
                <button
                  className="header-filterButton"
                  onClick={() => {
                    dispatch(modalFilter(true));
                  }}
                >
                  {filterIcon}
                </button>
              </div>
              {!(onChange.length > 1) ? (
                <>
                  {!(onChange.length > 0) ? (
                    <div className="headerSearchCategoriesTopSearch ">
                      <div className="headerSearchCategoriesTopSearchTitle">
                        Top Search
                      </div>
                      <div className="headerSearchCategoriesTopSearchBody">
                        {topSearch.map((ele: any, i: any) => {
                          return (
                            <div
                              className="headerSearchCategoriesTopSearchesParent headerSearchCategoriesTopSearchesParent-orange"
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
                Search Filters
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
      {/* </div>
      </div > */}

      <Drawer
        open={profileDrawerState}
        onClose={handleCloseDrawer}
        direction="right"
        enableOverlay={true}
        overlayOpacity={0.7}
        style={{
          width: '25rem',
          zIndex: '9999',
        }}
      >
        {profileSectionState && <Profile />}

        {notificationSectionState && <Notification />}

        {settingsSectionState && <Settings />}

        {/* <Terms /> */}
        {/* <PrivacyPolicy/> */}
        {/* <Terms/> */}
        {/* <EditProfile /> */}
        {/* {
          notifydata ? <Notification /> : <Profile />
        } */}
      </Drawer>

      {/* mobile drawer */}

      <Drawer
        open={leftdrawer}
        onClose={handleCloseDrawer}
        direction="left"
        enableOverlay={true}
        overlayOpacity={0.7}
        style={{
          width: '25rem',
          zIndex: '9999',
        }}
      >
        <div className="left-drawer">
          <div className="left-drawer-header">
            <div className="left-drawer-profile-logo-name">
              <div className="left-drawer-profile-img-frame">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZea5hmBriu2GpLrDCzJoBnAFqT2hzJTuTBZ_oNRUJ5lztiO3Ujs8NngJ2BWiTqjmvfx8&usqp=CAU"
                  alt=""
                />
              </div>
              <div className="left-drawer-profile-image-name">
                <p className="left-drawer-name">Mahendra Singh Dhoni</p>
                <p className="left-drawer-role">UX/UI Designer</p>
              </div>
            </div>
          </div>
          <div className="left-drawer-body">
            <div className="left-drawer-links">
              <div
                className="left-drawer-link"
                onClick={() => {
                  navigate('/');
                  handleCloseDrawerMobile();
                }}
              >
                <img
                  src={require('../../../assets/icons/icn_home_menu-Home.png')}
                  alt=""
                />
                <p>Home</p>
              </div>
              <div
                className="left-drawer-link"
                onClick={() => {
                  navigate('/myCourses');
                  handleCloseDrawerMobile();
                }}
              >
                <img
                  src={require('../../../assets/icons/icn_course_menu-Briefcase.png')}
                  alt="My Course"
                />
                <p>My Course</p>
              </div>
              <div
                className="left-drawer-link"
                onClick={() => {
                  handleProfileClick();
                  handleCloseDrawerMobile();
                }}
              >
                <img
                  src={require('../../../assets/icons/icn_profile_menu.png')}
                  alt="Profile"
                />
                <p>My Profile</p>
              </div>
              <div
                className="left-drawer-link"
                onClick={() => {
                  handlenotify();
                  handleCloseDrawerMobile();
                }}
              >
                <img
                  src={require('../../../assets/icons/icn_notification_menu.png')}
                  alt="Notifications"
                />
                <p>Notifications</p>
                <span>11</span>
              </div>
              <div
                className="left-drawer-link"
                onClick={() => {
                  handleSetting();
                  handleCloseDrawerMobile();
                }}
              >
                <img
                  src={require('../../../assets/icons/icn_settings_menu-Settings.png')}
                  alt="Settings"
                />
                <p>Settings</p>
              </div>
              <div
                className="left-drawer-link"
                onClick={() => {
                  handleCloseDrawerMobile();
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                <img
                  src={require('../../../assets/icons/icn_logout_menu-Power buttom.png')}
                  alt="Logout"
                />
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
        <p onClick={handleCloseDrawer} className="left-drawer-close">
          X
        </p>
      </Drawer>
    </>
  );
};

export default Header;
