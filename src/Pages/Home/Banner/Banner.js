import "./Banner.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="banner  text-light">
      <Container>
        <Row>
          <Col md={1}></Col>
          <Col className="d-flex flex-column banner-text" md={11}>
            <h5>DUBAI</h5>
            <h1 className="heading1">Burj Al Arab Jumeirah</h1>
            <h4>A global icon of Arabian luxury</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
