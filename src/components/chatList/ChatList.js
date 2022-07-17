import React, { useLayoutEffect, useState } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";
import "simplebar";
import "simplebar/dist/simplebar.css";

const ChatList = ({ userData, allChats, SetTabClick, AvatarLinks,mewMessage }) => {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
  }, [size]);

  const toggleInfo = (e) => {
    e.target.parentNode.parentNode.parentNode.classList.toggle("open");
  };
  return (
    <div className="main__chatlist open">
      <button className="btn" onClick={() => SetTabClick("CHATROOM", "")}>
        <span>Chat Room</span>
      </button>
      <div className="chatlist__heading">
        <h2>Private Chats</h2>
        {size <= 768 && (
          <button className="btn-nobg">
            <i className="fa fa-angle-down" onClick={toggleInfo}></i>
          </button>
        )}
      </div>
      <div className="chatList__search">
        <div className="search_wrap">
          <input type="text" placeholder="Search Here" required />
          <button className="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>

      <div className="chatlist__items" data-simplebar>
        {[...allChats.keys()]
          .filter((item) => item !== userData.username)
          .map((item, index) => {
            return (
              <ChatListItems
                name={item.split(",")[0]}
                key={index}
                animationDelay={index + 1}
                image={AvatarLinks[parseInt(item.split(",")[1])]}
                SetTabClick={SetTabClick}
                newMessage={mewMessage.get(item)>0}
              />
            );
          })}
      </div>
    </div>
  );
};
export default ChatList;
