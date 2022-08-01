import React, { useEffect, useState } from "react";

import "./App.css";
import MainBody from "./components/MainBody/MainBody";
import ContactMe from "./components/ContactMe/ContactMe";
import Overlay from "./components/Overlay/Overlay";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "./images/logo.png";

var data = require("./data/data.json");

const App = () => {
  const [Data, setData] = useState([]);
  const [ShowingData, setShowingData] = useState([]);
  const [Search, setSearch] = useState("");
  useEffect(() => {
    setData(data.Products);
    setShowingData(data.Products);
  }, [Data]);

  const setSearchValue = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setSearch(value);
  };
  const SearchStart = () => {
    const newShowing = Data.filter((item) =>
      item.English_Name.includes(Search)
    );
    setShowingData(newShowing);
  };
  return (
    <div className="app">
      <div className="FixedHeader">
        <Navbar bg="light" expand="lg">
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
        <Container>
          <MainBody Data={ShowingData} />
        </Container>
        {/* tab={tab} */}
      </div>
      <ContactMe />
    </div>
  );
};

export default App;
