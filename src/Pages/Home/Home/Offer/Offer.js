import "./Offer.css";
import React from "react";
import { Button, Card, CardGroup, Col, ListGroup } from "react-bootstrap";

const Offer = ({ offer }) => {
  const {
    deadline,
    dinner,
    breakefast,
    picture,
    category,
    offer: discount,
    name,
  } = offer;
  // console.log(discount);
  // console.log(offer);
  return (
    <Col>
      <Card className="bg-dark">
        <Card.Img
          variant="top"
          src={picture}
          width={"100%"}
          height={"200rem"}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <Card.Text>{discount}</Card.Text>
          <Card.Text>{breakefast}</Card.Text>
          <Card.Text>{dinner}</Card.Text>
          <Card.Text>{deadline}</Card.Text>
        </Card.Body>

        <Card.Footer>
          <Button className="w-100" variant="outline-success">
            Book Now
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Offer;
