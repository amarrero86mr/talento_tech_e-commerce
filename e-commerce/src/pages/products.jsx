import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useProductContext } from "../components/context/produc_context"
import ProductoCard from "../components/productoCard";



const Productos = () => {
  const { productos } = useProductContext();

  return (
    <Container className="mb-4">
        <h1>Lista de Productos</h1>
        <Row xs={2} md={3} className="g-4">
            {productos.map((item) => (
                <Col key={item.id}>
                    <ProductoCard item={item} key={item.id} />
                </Col>
            ))}
        </Row>
    </Container>
  );
};

export default Productos;