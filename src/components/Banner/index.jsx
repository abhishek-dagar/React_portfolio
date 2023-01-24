import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImage from "../../assets/img/header-img.svg"
import 'animate.css';

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-centre">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>Hi I'm Abhishek Web Developer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam fuga sed quo, consequuntur rerum minima veritatis
              soluta excepturi voluptate debitis pariatur dolore, possimus
              dignissimos magni accusantium, obcaecati quia molestias quaerat?
              Quia, dolorum.
            </p>
            <button onClick={()=>{}}>Let's Connect <ArrowRightCircle size={25}></ArrowRightCircle> </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImage} alt="Headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
