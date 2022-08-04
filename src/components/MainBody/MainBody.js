import React from "react";
import { useDispatch } from "react-redux";

import Products from "../ProductsList/Products";
import Button from "react-bootstrap/Button";
import { increment } from "../../redux/counterSlice";

import "./MainBody.css";

const ChatBody = () => {
  const dispatch = useDispatch();

  const changSlice = () => {
    dispatch(increment());
  };

  return (
    <div className="main__chatbody">
      <Products />
      <div className="LoadMore">
        <Button variant="danger" onClick={changSlice}>
          Load More
        </Button>
      </div>
    </div>
  );
};
export default ChatBody;
