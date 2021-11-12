import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link , useHistory} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";



const Register = () => {
    const {user, registerUser, isLoading, authError} = useAuth();
    const [loginData, SetLoginData] = useState({});
    const history = useHistory();

     const handleOnBlur = (e) => {
       const field = e.target.name;
       const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        SetLoginData(newLoginData);
     };

     const handleLoginSubmit = (e) => {
       if(loginData.password !== loginData.password2){
           alert('Your password didnt match')
           return;
       }
       registerUser(loginData.email, loginData.password,loginData.name,  history);
       e.preventDefault();
     };

  return (
    <>
      <Container>
        <h4 className="text-center">Register</h4>
        <div className="d-flex flex-column justify-content-center align-items-center">
          {!isLoading && (
            <Form onSubmit={handleLoginSubmit} className="w-50">
              <Form.Group className="mb-3">
                <Form.Label>Your name</Form.Label>
                <Form.Control
                  onBlur={handleOnBlur}
                  name="name"
                  type="text"
                  placeholder="Your Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onBlur={handleOnBlur}
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onBlur={handleOnBlur}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  onBlur={handleOnBlur}
                  name="password2"
                  type="password"
                  placeholder="Confirm Password"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <p>
                Already have an account? Please <Link to="/login">Login</Link>!
              </p>
            </Form>
          )}
          {isLoading && (
            <div className="spinner-border text-center" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          )}
          {user?.email && (
            <div className="alert alert-primary d-block w-50" role="alert">
              User Created Successfully!!
            </div>
          )}
          {authError && (
            <div className="alert alert-danger" role="alert">
              {authError}
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Register;
