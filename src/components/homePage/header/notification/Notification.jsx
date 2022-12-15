import React, { useState, useEffect } from "react";
import { closeProfile, editProfile } from "../../../../utils/svgIcons";
import { useDispatch, useSelector } from "react-redux";
import {
  notificationSection,
  profileDrawer,
  profileSection,
  settingsSection,
} from "../../../../redux/reducers/headerProfileOptions";
import Switch from "react-switch";
import "./Notification.css";
import axios from "axios";
const Notification = () => {
  const [notifyData, setNotifyData] = useState("");
  const [notId, setNotId] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(profileDrawer(false));
    dispatch(profileSection(false));
    // dispatch(notificationSection(false))
    dispatch(settingsSection(false));
  };

  useEffect(() => {
    axios
      .get(
        `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/notifications`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("Token")}`,
          },
        }
      )
      .then((res) => {
        res && res.data && setNotifyData(res.data);
      });
  }, [notId]);

  console.log(notifyData);
  return (
    <div className="drawer-profile-notify">
      <div className="drawer-profile-header-notify">
        <div className="drawer-profile-clear-notify" onClick={handleClick}>
          {closeProfile}
        </div>
        <div className="arrow-left-notify-mobile">
          <i
            className="fa-solid fa-arrow-left-long arrow-left-long-notify"
            onClick={handleClick}
          ></i>
        </div>

        <div className="drawer-profile-name-notify">
          <p className="drawer-profile-profile-notify">Notifications</p>
        </div>
      </div>
      <div className="drawer-profile-body-notify">
        {notifyData && notifyData.length > 0 &&
          notifyData.map((ele) => {
            return (
              <div
                className={
                ele.readStatus ? "notificationRead" : "notificationUnread"
                }
                onClick={() => {
                  axios
                    .request(
                      `http://virtuallearn-env.eba-6xmym3vf.ap-south-1.elasticbeanstalk.com/user/readNotification`,
                      {
                        method: "put",
                        headers: {
                          Authorization: `Bearer ${sessionStorage.getItem(
                            "Token"
                          )}`,
                        },
                        data: {
                          notificationId: ele.notificationId,
                        },
                      }
                    )
                    .then((res) => {
                      if (res.data.message === "Successfully") {
                        setNotId(ele.notificationId);
                      }
                    });
                }}
              >
                <div className="notifyImage">
                  <img src={ele.notificationUrl} alt="" />
                </div>
                <div className="notifycontainer">
                  <div className="notifydata">{ele.description}</div>
                  <div className="notifiedTime">{ele.timeStamp}</div>
                </div>
                <div
                  className={ele.readStatus ? "unread-dot-read" : "unread-dot"}
                ></div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Notification;
