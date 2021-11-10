import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const [loginData, SetLoginData] = useState({})
    const {user, loginUser, isLoading, authError} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value 
        const newLoginData = {...loginData}
        newLoginData[field] = value
        SetLoginData(newLoginData)

    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    return (
      <>
        <Container>
          <h4 className="text-center">Login</h4>
          <div className="d-flex flex-column justify-content-center align-items-center">
            {!isLoading && (
              <Form onSubmit={handleLoginSubmit} className="w-50">
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
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <p>
                  New user? Register <Link to="/register">here</Link>!
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
                Login Successfully!!
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

export default Login;