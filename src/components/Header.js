import React from 'react';
import './header.css'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch, FaUser, FaBell, FaCog, FaBars, FaCompass, FaStar, FaCertificate, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: '#E3D5F8' }} bg="light" expand="lg" className="px-1">
      <Navbar.Brand href="#home">
        <h3 style={{ fontStyle: 'italic', color: 'purple', marginBottom: 0 }}>hobbycue</h3>
        <h6 style={{ fontStyle: 'italic', fontSize: '12px', marginTop: 0 }}>Your Hobby Your community</h6>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
  <div className="d-flex align-items-center">
    <FaSearch className="me-3" style={{ color: 'purple' }} />
    <FaBell className="me-3" style={{ color: 'purple' }} />
    <FaBars style={{ color: 'purple' }} />
  </div>
</Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav">
        <Form className="d-flex me-auto align-items-center" inline>
          <FormControl type="text" placeholder="Search here" className="mr-2" style={{ width: '150px' }} />
          <Button variant="outline-purple"><FaSearch style={{ color: 'purple', marginRight: '5px' }} /></Button>
        </Form>
        <Nav className="ml-auto">
          <NavDropdown title={<><FaCompass style={{ color: 'purple' }} /> Explore</>} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={<><FaStar style={{ color: 'purple' }} /> Hobbies</>} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Hobby 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Hobby 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Hobby 3</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#notifications">
            <FaCertificate style={{ color: 'purple' }} />
          </Nav.Link>
          <Nav.Link href="#settings">
            <FaBell style={{ color: 'purple' }} />
          </Nav.Link>
          <Nav.Link href="#profile">
            <FaShoppingCart style={{ color: 'purple' }} />
          </Nav.Link>
          <Button style={{ border: 'purple', borderRadius: '2px', background: 'white', color: 'purple' }} className="ms-3">Sign In</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

