import React from "react";
import "./MainBody.css";
import ChatList from "../chatList/ChatList";
import Products from "../ProductsList/Products";

const ChatBody = ({ AvatarLinks, SetTabClick, tab , Data }) => {
  return (
    <div className="main__chatbody">
      <div className="User_Info">
        <ChatList
          tab={tab}
          SetTabClick={SetTabClick}
          AvatarLinks={AvatarLinks}
        />
      </div>
      <Products AvatarLinks={AvatarLinks} tab={tab} Data={Data} />
    </div>
  );
};
export default ChatBody;