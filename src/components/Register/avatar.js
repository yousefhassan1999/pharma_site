import React from "react";
import "./avatar.css";

const Avatar = ({ image, SelectAvatar }) => {
  return (
    <div className="avatarE" onClick={()=> SelectAvatar(image)}>
      <div className="avatarE-img">
        <img src={image} alt="#" />
      </div>
    </div>
  );
};

export default Avatar;
