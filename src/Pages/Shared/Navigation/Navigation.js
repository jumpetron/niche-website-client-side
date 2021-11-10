import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
  const {user, logOut} = useAuth()
    return (
      <div>
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img style={{ width: "150px" }} src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/explore">
                  Explore
                </Nav.Link>
                <Nav.Link as={Link} to="/free-demo">
                  Free Demo
                </Nav.Link>
                <Nav.Link as={Link} to="/support">
                  Help Center
                </Nav.Link>
              </Nav>
              <Nav>
                {user?.email ? (
                  <Nav>
                    <Nav.Link className="border-end" to="/dashboard">
                      Dashboard
                    </Nav.Link>
                    <Nav.Link onClick={logOut}>
                      Logout
                    </Nav.Link>
                  </Nav>
                ) : (
                  <Nav>
                    <Nav.Link as={Link} className="border-end" to="/login">
                      Login
                    </Nav.Link>
                    <Nav.Link as={Link} to="/register">
                      Register
                    </Nav.Link>
                  </Nav>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Navigation;