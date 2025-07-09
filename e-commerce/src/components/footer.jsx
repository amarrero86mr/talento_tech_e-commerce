import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useUserContext } from './context/user_admin_context';
import { useState } from 'react';

const Footer = () => {
  
  const { loggedUser } = useUserContext();

  return (
    <footer className="bg-dark py-3"
      style={{position: 'fixed', width: '100%', bottom: '0'}}
    >
      <Navbar>
      <Container>
        <Navbar.Brand as={Link} to="/">WI'r SHOPEER</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/user">Usuario</Nav.Link>
            {/* {loggedUser.admin ? <Nav.Link as={Link} to="/admin">administracion</Nav.Link> : null} */}
            <Nav.Link as={Link} to="/admin">administracion</Nav.Link>


            
          </Nav>
        <Navbar.Toggle />
        <Nav className="justify-content-end">
            <Nav.Link to="/contact">
            <img src="../src/assets/icons/whatsapp_icon.svg" alt="Icono de whatsapp"  width="30" height="30" />
            </Nav.Link>
            <Nav.Link to="/contact">
            <img src="../src/assets/icons/instagram_icon.svg" alt="Icono de instagram" width="30" height="30"/>
              </Nav.Link>
            <Nav.Link to="/contact">
            <img src="../src/assets/icons/Facebook_icon.svg" alt="Icono de facebook" width="25" height="25"/>
            </Nav.Link>
            
            
          </Nav>
      </Container>
      </Navbar>
    </footer>
  );
}

export default Footer;