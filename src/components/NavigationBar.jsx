import React from 'react';
import "bootstrap/js/src/collapse.js";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark">
       <Container> 
        <Navbar.Brand href="/">DEFENCE MINISTRY</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <LinkContainer to="/defence">
              <Nav.Link>Defence</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Parliament Affairs" id="collasible-nav-dropdown">
              <NavDropdown.Item href="http://loksabha.nic.in/">Lok Sabha</NavDropdown.Item>
              <NavDropdown.Item href="http://rajyasabha.nic.in/">Rajya Sabha</NavDropdown.Item>
              <NavDropdown.Item href="https://mod.gov.in/parliament-replies">Parliament Replies</NavDropdown.Item>
              <NavDropdown.Item href="https://mod.gov.in/parliament-matters">Parliament Matters</NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/equipmentSortedList">
              <Nav.Link>EquipmentList</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact-us">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
       </Container> 
    </Navbar>
  );
};

export default NavigationBar;
