import { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useProductContext } from "./context/produc_context";

export const EditProductForm = (props) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [descr, setDescr] = useState('');
  const [categ, setCateg] = useState('');
  const [image, setImage] = useState('');

  const { productos } = useProductContext();

  useEffect(() => {

    const item = productos.find(item => item.id == props.id)
    setTitle(item.title);
    setPrice(item.price)
    setDescr(item.description)
    setCateg(item.category)
    setImage(item.image)
  }, [props.id])



  return (
    // considerar usar o no un onsubmit
    <Form >
      
      <Form.Group as={Row} className="mb-3" controlId="nombre">
        <Form.Label column sm={2}>Nombre</Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder={title}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              props.avisameQuecambiasteDatos(e.target.value, price, descr, categ, image);

            }}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="precio">
        <Form.Label column sm={2}>Precio</Form.Label>
        <Col sm={10}>
          <Form.Control
            type="number"
            placeholder={price}
            value={price}
            onChange={(e) => {
              setPrice(e.target.value)
              props.avisameQuecambiasteDatos(title, e.target.value, descr, categ, image);
            }}
            min="0"
            step="0.01"
          />
        </Col>
      </Form.Group>

       <Form.Group as={Row} className="mb-3" controlId="descripcion">
        <Form.Label column sm={2}>Descripción</Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder={descr}
            value={descr}
            onChange={(e) => {
              setDescr(e.target.value)
              props.avisameQuecambiasteDatos(title, price, e.target.value, categ, image);
            }}
            min="0"
            step="0.01"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="category">
        <Form.Label column sm={2}>Categoría</Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder={categ}
            value={categ}
            onChange={(e) => {
              setCateg(e.target.value)
              props.avisameQuecambiasteDatos(title, price, descr, e.target.value, image);
            }}
            min="0"
            step="0.01"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="imagen">
        <Form.Label column sm={2}>URL Imagen</Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder={image}
            value={image}
            onChange={(e) => {
              setImage(e.target.value)
              props.avisameQuecambiasteDatos(title, price, descr, categ, e.target.value);
            }}
            min="0"
            step="0.01"
          />
        </Col>
      </Form.Group>
      
    </Form>
  );
}