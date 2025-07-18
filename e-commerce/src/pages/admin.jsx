import { useNavigate } from "react-router-dom";
import { useProductContext } from "../components/context/produc_context";
import { Button, Modal, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useUserContext } from "../components/context/user_admin_context";
import { EditProductForm } from "../components/edit_product";

const Admin = () => {
  const { productos, editProducts } = useProductContext();
  const { loggedUser, isAuth } = useUserContext();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState(null)
  const [productId, setProductId] = useState(null)

  // useEffect(()=>{
  //   if (!Boolean(loggedUser?.admin)) {
  //   navigate('/productos')
  // } 
  // },[])

  const handleClose = () => {
    console.log("le pego a la api con este prod", product)
    setShow(false)
  };
  const handleShow = (id) =>  {
    
    setShow(true)
    setProductId(id)
  };

  const saveEdit = () => {
    handleClose();
    console.log(productId)
    editProducts(productId, product);
  }


  return (
    <>

      <h2>ADMINISTRACION</h2>

      <p>tabla de administracion en construccion</p>
      <Table striped bordered hover>
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
              <td>${price.toFixed(2)}</td>
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
                  onClick={() => { }}
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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditProductForm id={productId} avisameQuecambiasteDatos={(title, price) => {

            console.log("acá se debería sobreescribir el producto", title, price)
            setProduct({ title, price: Number(price) })
          }

          }></EditProductForm>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={ saveEdit }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )

};

export default Admin;