import "./JoinNow.css";
import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const JoinNow = () => {
  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (user) {
    navigate("/checkout");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (password !== confirmPassword) {
      setError("Password didn't match ");
      return;
    }
    if (password?.length < 6) {
      console.log(password?.length);
      setError("Password  must should be 6 character");
      return;
    }
  };
  console.log(email, password, user);

  return (
    <div className="p-5 m-5 ">
      <Container className="p-5 m-5 ">
        <h1>Please Register First!!!</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          {/* name starts from here */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridText">
              <FloatingLabel
                controlId="floatingInput"
                label="First Name"
                className="mb-3 border-0"
              >
                <Form.Control
                  className="border-0 border-top-0 border-end-0 border-start-0 border-bottom border-dark"
                  type="text"
                  placeholder="First Name"
                  onBlur={(e) => setFirstName(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridText">
              <FloatingLabel
                controlId="floatingInput"
                label="Last Name"
                className="mb-3 border-0"
              >
                <Form.Control
                  className="border-0 border-top-0 border-end-0 border-start-0 border-bottom border-dark"
                  type="text"
                  placeholder="Last Name"
                  onBlur={(e) => setLastName(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
          </Row>
          {/* name ends here*/}

          {/* email starts from here */}
          <Form.Group className="mb-3" controlId="formGridEmail">
            <FloatingLabel
              controlId="floatingInput"
              label="Email Address"
              className="mb-3 border-0"
            >
              <Form.Control
                className="border-0 border-top-0 border-end-0 border-start-0 border-bottom border-dark"
                type="email"
                placeholder="Enter email"
                onBlur={(e) => setEmail(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
          {/* email ends here */}

          {/* password starts from here */}
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <FloatingLabel
                controlId="floatingInput"
                label="Enter Password"
                className="mb-3 border-0"
              >
                <Form.Control
                  className="border-0 border-top-0 border-end-0 border-start-0 border-bottom border-dark"
                  type="password"
                  placeholder="Password"
                  onBlur={(e) => setPassword(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col} controlId="">
              <FloatingLabel
                controlId="floatingInput"
                label="Confirm Password"
                className="mb-3 border-0"
              >
                <Form.Control
                  className="border-0 border-top-0 border-end-0 border-start-0 border-bottom border-dark"
                  type="password"
                  placeholder="Password"
                  onBlur={(e) => setConfirmPassword(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
          </Row>

          {/* password ends here */}

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <FloatingLabel
                controlId="floatingInput"
                label="City"
                className="mb-3 border-0"
              >
                <Form.Control
                  className="border-0 border-top-0 border-end-0 border-start-0 border-bottom border-dark"
                  type="text"
                  placeholder="City"
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <FloatingLabel
                controlId="floatingInput"
                label="State"
                className="mb-3 border-0"
              >
                <Form.Select
                  defaultValue=""
                  className="border-0 border-top-0 border-end-0 border-start-0 border-bottom border-dark"
                  type="select"
                  placeholder="State"
                >
                  {/* <option>Choose...</option>
                  <option>...</option> */}
                </Form.Select>
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridNumber">
              <FloatingLabel
                controlId="floatingInput"
                label="Phone Number"
                className="mb-3 border-0"
              >
                <Form.Control
                  type="number"
                  className="border-0 border-top-0 border-end-0 border-start-0 border-bottom border-dark"
                  placeholder="State"
                />
              </FloatingLabel>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Already have an account ?" />
          </Form.Group>
          <p className="text-danger">{error}</p>
          <Button
            onClick={() => createUserWithEmailAndPassword(email, password)}
            variant="primary"
            type="submit"
          >
            Join Now
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default JoinNow;
