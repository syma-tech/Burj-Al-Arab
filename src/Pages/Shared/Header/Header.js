import "./Header.css";
import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [user] = useAuthState(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const ggl = <FontAwesomeIcon icon={faGoogle} />;
  console.log(user?.email);
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg" fluid="true">
      <Container>
        <Navbar.Brand href="#">
          <img height="40rem" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link>
              <Link className="text-decoration-none text-light" to="/home">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-light" to="/home">
                Offers
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-light" to="/home">
                Burj Al Arab
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-light" to="/checkout">
                Booking Checkout
              </Link>
            </Nav.Link>
            <span className="text-light">{user?.email && user.email}</span>
          </Nav>
          <Form className="d-flex">
            <Nav>
              <Button variant="secondary">Booking Now </Button>{" "}
              <Button onClick={() => signInWithGoogle()}>{ggl}</Button>
              {user?.email ? (
                <Button
                  onClick={() => signOut(auth)}
                  variant="outline-success text-light"
                >
                  Sign Out
                </Button>
              ) : (
                <Button variant="outline-success">
                  <Link className="text-decoration-none text-light" to="/login">
                    Log In
                  </Link>
                </Button>
              )}{" "}
              <Button variant="outline-success">
                <Link className="text-decoration-none text-light" to="/joinNow">
                  Join Now ( )
                </Link>
              </Button>
            </Nav>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
