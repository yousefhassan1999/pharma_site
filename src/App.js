import React, { useEffect, useState } from "react";

import "./App.css";
import MainBody from "./components/MainBody/MainBody";
import ContactMe from "./components/ContactMe/ContactMe";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "./images/logo.png";

var data = require("./data/data.json");

const App = () => {
  // const [tab, setTab] = useState("CHATROOM"); // public chatRoom or not
  const [Data, setData] = useState([]); // public chatRoom or not
  const AvatarLinks = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
    "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
    "https://pbs.twimg.com/profile_images/770394499/female.png",
  ];
  useEffect( ()=>{
    setData(data.Products);
    console.log(Data)
  },[Data])

  return (
    <div className="app">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <Container>
            <img src={logo} alt="" />
          </Container>
        </Navbar.Brand>
      </Navbar>
      <div className="__main">
        <MainBody AvatarLinks={AvatarLinks}  Data={Data}/> 
        {/* tab={tab} */}
      </div>
      <ContactMe />
    </div>
  );
};

export default App;
