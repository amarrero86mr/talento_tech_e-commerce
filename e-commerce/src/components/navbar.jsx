import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
 return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">SHOPEA</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#products">Productos</Nav.Link>
            
          </Nav>
        <Navbar.Toggle />
        <Nav className="justify-content-end">
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#cart">Carrito</Nav.Link>
            
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;