import React from 'react';
// import {Link} from 'react-router-dom';
import { Nav, Navbar,Container,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import './css/Navbar.css'

function Navigation(){
  return(
  <Navbar className='Navigationbar' bg="white" expand="lg">
    <Container>
      <Navbar.Brand href="#home"><img className='logo' src='인천대_IGEM.svg'></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='NavbarLink'>Project</Nav.Link>
          <Nav.Link className='NavbarLink'>Method</Nav.Link>
          <Nav.Link className='NavbarLink'>Modeling</Nav.Link>
          <Nav.Link className='NavbarLink'>Member</Nav.Link>
          {/*
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Wet lab</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">Dry lab</NavDropdown.Item>
          </NavDropdown>
          */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation