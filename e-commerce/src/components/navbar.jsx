import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { BsCart, BsCartFill } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { useCartContext } from './context/cart_context';

function NavBar() {
  const { carrito } = useCartContext();
const [ estadoCarrito, setEstadoCarrito ] = useState(false)

useEffect(()=> {
  setEstadoCarrito(Object.keys(carrito).length == 0)
  console.log(estadoCarrito, carrito)
}, [carrito])

 return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">WI'r SHOPEER</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            
          </Nav>
        <Navbar.Toggle />
        <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/cart">Carrito {estadoCarrito ? <BsCart /> : <BsCartFill /> }</Nav.Link>
            
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;