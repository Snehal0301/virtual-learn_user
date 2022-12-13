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
        `http://virtuallearnapp2-env.eba-wrr2p8zk.ap-south-1.elasticbeanstalk.com/user/notifications`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      )
      .then((res) => {
        setNotifyData(res && res.data);
      });
  }, [notId]);

  console.log(notifyData);
  return (
    <div className="drawer-profile">
      <div className="drawer-profile-header">
        <div className="drawer-profile-clear" onClick={handleClick}>
          {closeProfile}
        </div>

        <div className="drawer-profile-name">
          <p className="drawer-profile-profile">Notifications</p>
        </div>
      </div>
      <div className="drawer-profile-body">
        {notifyData &&
          notifyData.map((ele) => {
            return (
              <div
                className={
                  ele.readStatus ? "notificationRead" : "notificationUnread"
                }
                onClick={() => {
                  axios
                    .request(
                      `http://virtuallearnapp2-env.eba-wrr2p8zk.ap-south-1.elasticbeanstalk.com/user/readNotification`,
                      {
                        method: "put",
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem(
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
