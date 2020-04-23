import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import RegisterModal from "./auth/RegisterModal";
import Logout from "./auth/Logout";
import LoginModal from "./auth/LoginModal";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="app-navbar">
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">ShoppingList</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {!user ? (
                <>
                  <NavItem>
                    <RegisterModal />
                  </NavItem>
                  <NavItem>
                    <LoginModal />
                  </NavItem>
                </>
              ) : (
                  <>
                  <NavItem>
              <span className="navbar-text mr-3"><strong>{user ? `Welcome ${user.name}` : ''}</strong></span>
                  </NavItem>
                <NavItem>
                  <Logout />
                </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
