import { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useProductContext } from "./context/produc_context";

export const AddProductForm = (props) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [descr, setDescr] = useState('');
  const [categ, setCateg] = useState('');
  const [image, setImage] = useState('');

  const { productos } = useProductContext();

  return (
    // considerar usar o no un onsubmit
    <Form >
      
      <Form.Group as={Row} className="mb-3" controlId="nombre">
        <Form.Label column sm={2}>Nombre</Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder='Nombre'
            
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
            placeholder='Precio'
            
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
            placeholder='Descripción'            
            onChange={(e) => {
              setPrice(e.target.value)
              props.avisameQuecambiasteDatos(title, price, e.target.value, categ, image);
            }}
            min="0"
            step="0.01"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="categoria">
        <Form.Label column sm={2}>Categoria</Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder='Categoria'
            
            onChange={(e) => {
              setPrice(e.target.value)
              props.avisameQuecambiasteDatos(title, price, descr, e.target.value, image);
            }}
            min="0"
            step="0.01"
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="precio">
        <Form.Label column sm={2}>Descripción</Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder='URL de la imagen'
            
            onChange={(e) => {
              setPrice(e.target.value)
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