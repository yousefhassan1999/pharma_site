import React from "react";

import "./Products.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const ChatContent = ({ Data, Slice }) => {
  return (
    <div className="main__chatcontent">
      {Data.slice(0, Slice).map((data, index) => (
        <div key={index}>
          <label className="labelclass">
            <input type="checkbox" className="flippedCheck" />
            <div className="flip-card">
              <div className="front">
                <Card className="Card" style={{ width: "18rem" }}>
                  <img
                    src={data.Picture}
                    className="imgSize"
                    alt=""
                    width={286}
                    height={180}
                  />
                  <Card.Body>
                    <Card.Title className="name">
                      <span>{data.English_Name}</span>{" "}
                    </Card.Title>
                    <Card.Text className="desc">
                      <span>{data.Composition}</span>
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item className="price">
                        <span>Price : {data.New_Price}</span>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Card.Link href="#">Card Link</Card.Link>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </div>
              <div className="back">
                <Card className="Card" style={{ width: "18rem" }}>
                  <img
                    src={data.Picture}
                    className="imgSize"
                    alt=""
                    width={286}
                    height={180}
                  />
                  <Card.Body>
                    <Card.Title className="name">
                      <span>{data.Arabic_Name}</span>{" "}
                    </Card.Title>
                    <Card.Text className="desc">
                      <span>{data.Code}</span>
                    </Card.Text>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item className="price">
                        <span>Price : {data.New_Price}</span>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Card.Link href="#">Card Link</Card.Link>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};
export default ChatContent;
