import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import MainBody from "./components/MainBody/MainBody";
import ContactMe from "./components/ContactMe/ContactMe";
import Overlay from "./components/Overlay/Overlay";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "./images/logo.png";

import { GetData } from "./redux/API";
import { SetshowingData } from "./redux/DataSlice";

const App = () => {
  const Data = useSelector((state) => state.DataGroup.data);
  const [Search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    GetData(dispatch);
  }, [dispatch]);

  const setSearchValue = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setSearch(value);
  };
  const SearchStart = () => {
    const newShowing = Data.filter((item) =>
      item.English_Name.toLowerCase().includes(Search.toLowerCase())
    );
    dispatch(SetshowingData(newShowing));
  };
  return (
    <div className="app">
      <div className="FixedHeader">
        <Navbar className="nav-header">
          <Container>
            <div className="header">
              <img src={logo} alt="" width={70} />
              <div className="search_wrap">
                <input
                  type="text"
                  value={Search}
                  onChange={setSearchValue}
                  placeholder="Search Here"
                  required
                />
                <button className="search-btn" onClick={SearchStart}>
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </Container>
        </Navbar>
      </div>

      <Overlay />
      <div className="__main">
        <MainBody />
      </div>
      <ContactMe />
    </div>
  );
};

export default App;
