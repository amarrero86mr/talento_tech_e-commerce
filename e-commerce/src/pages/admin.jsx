import { useNavigate } from "react-router-dom";
import { useProductContext } from "../components/context/produc_context";
import { Button, Col, Container, Modal, Row, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useUserContext } from "../components/context/user_admin_context";
import { EditProductForm } from "../components/edit_product";
import { AddProductForm } from "../components/add_product";


const Admin = () => {
  const { productos, editProducts, addProducts, deleteProducts } = useProductContext();
  const { loggedUser, isAuth } = useUserContext();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showAdd, setShowAdd] = useState(false)
  const [product, setProduct] = useState(null)
  const [productId, setProductId] = useState(null)
  const [showDelete, setShowDelete] = useState(false)
  // useEffect(()=>{
  //   if (!Boolean(loggedUser?.admin)) {
  //   navigate('/productos')
  // } 
  // },[])

  const handleClose = () => {
    console.log("le pego a la api con este prod", product)
    setShowAdd(false)
    setShow(false)
  };
  const handleShow = (id) => {
    setShowAdd(true)
    setShow(true)
    setProductId(id)
  };

  const handleShowDelete = (id) => {
    setShowDelete(true)
    setProductId(id)
  }
  const handleDeleteClose = () => {
    setShowDelete(false)
  }

  const saveEdit = () => {
    handleClose();
    editProducts(productId, product);
  }
  const handleShowADD = () => {
    setShowAdd(false)
    setShow(true)
  };

  const saveNew = () => {
    handleClose();
    console.log(product)
    addProducts(product);
  }


  return (
    <>
      <Container >
        <Row>
          <Col xs={9}>
            <h2>ADMINISTRACION</h2>
          </Col>
          <Col>
            <Button
              variant="success"
              size="sm"
              className="me-2"
              onClick={() => handleShowADD()}
            >
              Agregar Producto
            </Button>
          </Col>
        </Row>

      </Container>



      
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Precio</th>
            <th style={{ width: '150px' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(({ id, title, image, price }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td><img height={25} src={image} alt={title} /></td>
              <td>${price}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => handleShow(id)}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => { handleShowDelete(id) }}
                >
                  Borrar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{showAdd ? 'Editar Producto' : 'Agregar Producto'} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showAdd
            ? <EditProductForm id={productId} avisameQuecambiasteDatos={(title, price, description, category, image) => {
              setProduct({ title, price: Number(price), description, category, image })
            }}>
            </EditProductForm>
            : <AddProductForm avisameQuecambiasteDatos={(title, price, description, category, image) => {
              console.log("acá se debería sobreescribir el producto", title, price)
              setProduct({ title, price: Number(price), description, category, image })
            }}></AddProductForm>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          {showAdd ? <Button variant="primary" onClick={saveEdit}>
            Guardar Cambios
          </Button>
            : <Button variant="primary" onClick={saveNew}>
              Guardar Producto
            </Button>}
        </Modal.Footer>
      </Modal>

      {showDelete 
      ? <Modal
        show={showDelete}
        onHide={handleDeleteClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>ESTAS POR BORRAR UN PRODUCTO !!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ESTAS SEGURO DE BORRAR EL PRODUCTO ID: {productId} ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleDeleteClose}>
            CANCELAR
          </Button>
          <Button variant="danger" onClick={()=> {deleteProducts(productId); handleDeleteClose()}}>ELIMINAR</Button>
        </Modal.Footer>
      </Modal>: null}

    </>
  )

};

export default Admin;