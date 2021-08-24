import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = ({ user }) => {
  const { users } = useSelector((state) => state.users);
  const userData = user ? users[user] : null;

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home" className="nav-link">
              Home
            </Link>
            <Link to="/add" className="nav-link">
              New Question
            </Link>
            <Link to="/leaderboard" className="nav-link">
              Leader Board
            </Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <div className="d-flex">
                <div className="pr-2 text-white">
                  {userData ? userData.name : ""}
                </div>
                <div className="">
                  <div
                    className="rounded-circle border border-light"
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundImage: `url(${
                        userData ? userData.avatarURL : ""
                      })`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                    }}
                  />
                </div>
              </div>
            </Nav.Link>
            <Link to="/logout" className="nav-link">
              <i className="fas fa-cloud">Logout</i>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
