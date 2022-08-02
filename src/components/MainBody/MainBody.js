import React , {useState} from "react";
import "./MainBody.css";
import Products from "../ProductsList/Products";
import Button from "react-bootstrap/Button";
const ChatBody = ({ tab, Data }) => {
  const [Slice, setSlice] = useState(10); 

  const changSlice = () => {
    setSlice((prev) => prev + 10 )
  }
  return (
    <div className="main__chatbody">
      <Products  tab={tab} Data={Data} Slice={Slice}/>
      <div className="LoadMore">
        <Button variant="danger" onClick={changSlice}>Load More</Button>
      </div>
    </div>
  );
};
export default ChatBody;
