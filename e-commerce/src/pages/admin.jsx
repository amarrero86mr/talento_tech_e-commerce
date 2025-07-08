import { useNavigate } from "react-router-dom";
import { useProductContext } from "../components/context/produc_context";
import { Button, Table } from "react-bootstrap";
import { useState } from "react";

const Admin = () => {
    const { productos } = useProductContext();
    const [ userOn, setUserOn ] = useState(localStorage.admin);

    const navigate = useNavigate();

    const local = localStorage
    console.log(local)
    
    if (userOn == false){
        
      return navigate('/user')
    } else {    
    
    return(
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
                onClick={() => {}}
              >
                Editar
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => {}}
              >
                Borrar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
        </>
    )
}
};

export default Admin;