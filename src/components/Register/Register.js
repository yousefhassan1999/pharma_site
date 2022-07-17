import React from "react";
import Carousel from "react-elastic-carousel";
import Avatar from "./avatar";

const Register = ({
  registerUser,
  AvatarLinks,
  SelectAvatar,
}) => {
  const [userName, setuserName] = React.useState("");

  
  const handleUsername = (event) => {
    const { value } = event.target;
    setuserName(value );
  };

  return (
    <div className="register">
      <div className="slection-title">Select Avatar Photo</div>
      <div className="avatar_selction" style={{ margin: 30 }}>
        <Carousel className="corssal" >
          {AvatarLinks.map((avatar) => (
            <Avatar image={avatar} SelectAvatar={SelectAvatar} key={avatar}  />
          ))}
        </Carousel>
      </div>
      <div className="User_Enter">
        <input
          className="registeInput"
          id="user-name"
          placeholder="Enter your name"
          name="userName"
          value={userName}
          onChange={handleUsername}
          margin="normal"
        />
        <button type="button" className="registeconnect" onClick={()=> registerUser(userName)} >
          connect
        </button>
      </div>
    </div>
  );
};

export default Register;
