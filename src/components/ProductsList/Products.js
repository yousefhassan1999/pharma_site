import React from "react";

import "./Products.css";
// import Carousel from "react-elastic-carousel";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2, itemsToScroll: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];

const ChatContent = ({ AvatarLinks, Data ,Slice}) => {
  return (
    <div className="main__chatcontent">
      {/* <Carousel className="corssal" breakPoints={breakPoints}> */}
      {Data.slice(0,Slice).map((data, index) => (
        <div key={index}>
          <Card className="Card" style={{ width: "18rem" }}>
            <img  src={data.Picture} className="imgSize" alt="" width={286} height={180} />
            <Card.Body>
              <Card.Title className="name">{data.English_Name} </Card.Title>
              <Card.Text className="desc">{data.Composition}</Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="price">
                  {" "}
                  <span>Price : {data.New_Price}</span>{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Card.Link href="#">Card Link</Card.Link>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      ))}
      {/* </Carousel> */}
    </div>
  );
};
export default ChatContent;
