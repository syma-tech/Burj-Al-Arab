import "./Login.css";
import React, { useState } from "react";
import { Button, Col, Container, FloatingLabel, Form } from "react-bootstrap";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (user) {
    navigate("/checkout");
  }

  console.log(email, password);
  console.log(user);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="p-5 mx-5 ">
      <Container className="px-5 mx-5 ">
        <h1>Please Login First!!!</h1>
        <Form
          className="p-5 m-5 "
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </FloatingLabel>
          </Form.Group>
          {/* email ends here */}
          {/* password starts from here */}
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
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </FloatingLabel>
          </Form.Group>
          {/* password ends here */}
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Already have an account ?" />
          </Form.Group>
          <p className="text-danger">{error?.message}</p>
          <p>{loading && "Loading.."}</p>
          <Button
            onClick={() => signInWithEmailAndPassword(email, password)}
            variant="primary"
            type="submit"
          >
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
