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

const ChatContent = ({ AvatarLinks, Data }) => {
  return (
    <div className="main__chatcontent">
      {/* <Carousel className="corssal" breakPoints={breakPoints}> */}
        {Data.map((data) => (
          <div key={data.EnglishName}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="http://egyptiandrugstore.com/image/cache/data/manar10/123%20tab-400x400.png" />
              <Card.Body>
                <Card.Title>{data.EnglishName} </Card.Title>
                <Card.Text>{data.composition}</Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Price : {data.New_price}</ListGroup.Item>
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
