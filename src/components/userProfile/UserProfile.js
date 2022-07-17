import React from "react";
import "./userProfile.css";

const UserProfile = ({ userData, AvatarLinks }) => {
  return (
    <div className="main__userprofile">
      <div className="profile__card user__profile__image">
        <div className="profile__image">
          <img
            src={AvatarLinks[parseInt(userData.username.split(",")[1])]}
            alt=""
          />
        </div>
        <div className="username">
          <p>{userData.username.split(",")[0]}</p>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
