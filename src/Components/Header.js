import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/Css/Header.css'
import logo from "../Assets/Images/logo.png";
import PhoneIcon from '@mui/icons-material/Phone';

function Header() {
  return (
    <Navbar expand="md" className="header-bg">
      <div>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Graphic Designer - Jetly"
            className="logo"
          />
        </Navbar.Brand>
      </div>
      <div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className='header-text'>Home</Nav.Link>
          <Nav.Link href="#features" className='header-text-wt'>About</Nav.Link>
          <Nav.Link href="#pricing" className='header-text-wt'>Resume</Nav.Link>
          <Nav.Link href="#home" className='header-text-wt'>Portfolio</Nav.Link>
          <Nav.Link href="#features" className='header-text-wt'>Contact</Nav.Link>
          <div className="vertical-line"></div>
          <Nav.Link href="#pricing" className='header-text'><PhoneIcon className='header-icon' />+971 54 422 0855</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;