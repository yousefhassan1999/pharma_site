import React, { useLayoutEffect, useState } from "react";
import "./chatList.css";
// tab,
// SetTabClick,
// AvatarLinks,
const ChatList = () => {
  const [size, setSize] = useState(0);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
  }, [size]);

  // const toggleInfo = (e) => {
  //   e.target.parentNode.parentNode.parentNode.classList.toggle("open");
  // };
  return (
    <div className="main__chatlist open">
      <div className="chatList__search">
        <div className="search_wrap">
          <input type="text" placeholder="Search Here" required />
          <button className="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      {/* <div className="chatlist__heading">
        <h2>Categories</h2>
        {size <= 768 && (
          <button className="btn-nobg">
            <i className="fa fa-angle-down" onClick={toggleInfo}></i>
          </button>
        )}
      </div> */}

      {/* {allConnections.length !== 1 ? (
        <div className="chatlist__items" data-simplebar>
          {allConnections
            .filter((item) => item !== userData.username)
            .map((item, index) => {
              return (
                <ChatListItems
                  name={item.split(",")[0]}
                  key={index}
                  animationDelay={index + 1}
                  image={AvatarLinks[parseInt(item.split(",")[1])]}
                  SetTabClick={SetTabClick}
                  newMessage={mewMessage.get(item) > 0}
                />
              );
            })}
        </div>
      ) : ( */}
      {/* <div className="empty_message_show">Connection Members After you</div> */}
      {/* )} */}
    </div>
  );
};
export default ChatList;
