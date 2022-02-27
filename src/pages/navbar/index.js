import React from "react";
import {  Col, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";
import { navLinkStyle } from "./styels";

function Navbars() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={9}
          className="d-flex justify-content-between"
        >
          <Navbar.Brand className="mx-3" >
            <Link to="/" className="text-decoration-none">
              Project
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar" />
        </Col>
        <Col className="m-auto">
          <Navbar.Collapse>
            <Nav id="basic-navbar">
              <Nav.Link>
                <NavLink to="store" style={navLinkStyle}>
                  Store
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="posts" style={navLinkStyle}>
                  Posts
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="movies" style={navLinkStyle}>
                  Movies
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="local" style={navLinkStyle}>
                  Local
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="mobiles" style={navLinkStyle}>
                  Mobiles
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Navbars;
