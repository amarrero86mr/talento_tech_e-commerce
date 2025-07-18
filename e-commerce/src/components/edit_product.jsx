import { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useProductContext } from "./context/produc_context";

export const EditProductForm = (props) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [descr, setDescr] = useState('');
  const [categ, setCateg] = useState('');
  const [image, setImage] = useState('');
  const [rating, setRating] = useState({});

  const { productos } = useProductContext();

  useEffect(() => {

    const item = productos.find(item => item.id == props.id)
    setTitle(item.title);
    setPrice(item.price)
  }, [props.id])



  return (
    // considerar usar o no un onsubmit
    <Form >
      {/*{errores.length > 0 && (
        <Alert variant="danger">
          <ul>
            {errores.map((err, idx) => (
              <li key={idx}>{err}</li>
            ))}
          </ul>
        </Alert>
      )}*/}

      <Form.Group as={Row} className="mb-3" controlId="nombre">
        <Form.Label column sm={2}>Nombre</Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder={title}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              props.avisameQuecambiasteDatos(e.target.value, price);

            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="precio">
        <Form.Label column sm={2}>Precio</Form.Label>
        <Col sm={10}>
          <Form.Control
            type="number"
            placeholder="Precio"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value)
              props.avisameQuecambiasteDatos(title, e.target.value);
            }}
            min="0"
            step="0.01"
          />
        </Col>
      </Form.Group>




    </Form>
  );
}