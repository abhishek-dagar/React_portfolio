import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter-bx wow slideInUp"></div>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#Home"><img src={navIcon1} alt="Icon" /></a>
              <a href="#Home"><img src={navIcon2} alt="Icon" /></a>
              <a href="#Home"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;