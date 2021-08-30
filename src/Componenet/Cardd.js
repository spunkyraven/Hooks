import React from "react";
import { Card } from "react-bootstrap";

function Cardd({ elcard }) {
  return (
    <Card style={{ width: "18rem", marginTop: "20px" }}>
      <Card.Img variant="top" src={elcard.imgsrc} />
      <Card.Body>
        <Card.Title>{elcard.title}</Card.Title>
        <Card.Text>{elcard.year} </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cardd;
