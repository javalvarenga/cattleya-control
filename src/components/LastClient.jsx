import React from "react";
import { Card } from "react-bootstrap";
import "../assets/styles/LastClient.scss";
const LastClient = () => {
  return (
    <div className="last-client">
      <Card className="card">
        <Card.Header>Ultimo Cliente</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p> Direccion </p>
            <footer className="blockquote-footer">
              Tel: <cite title="Source Title">40823382</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LastClient;
