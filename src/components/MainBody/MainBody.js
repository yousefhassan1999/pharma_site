import React , {useState} from "react";
import "./MainBody.css";
// import ChatList from "../chatList/ChatList";
import Products from "../ProductsList/Products";
import Button from "react-bootstrap/Button";
const ChatBody = ({ AvatarLinks, SetTabClick, tab, Data }) => {
  const [Slice, setSlice] = useState(10); // public chatRoom or not

  const changSlice = () => {
    setSlice((prev) => prev + 10 )
  }
  return (
    <div className="main__chatbody">
      {/* <ChatList tab={tab} SetTabClick={SetTabClick} AvatarLinks={AvatarLinks} /> */}
      <Products AvatarLinks={AvatarLinks} tab={tab} Data={Data} Slice={Slice}/>
      <div className="LoadMore">
        <Button variant="danger" onClick={changSlice}>Load More</Button>
      </div>
    </div>
  );
};
export default ChatBody;
