import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [ userName, setUserName ] = useState('')

  const logueo = () => {
    localStorage.setItem('name', `${userName}`);
    localStorage.setItem('admin', 'false')
    if ( userName == 'admin') {
      localStorage.setItem('admin', 'true');
      navigate('/admin');
    } else {
      localStorage.setItem('admin', 'false')
      return navigate('/user')
    }
  };

  console.log(localStorage)
  return (
    <Container className="mt-5" style={{ maxWidth: 400 }}>
      <h2>Iniciar sesión</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="text" placeholder='nombre de usuario' onChange={(e)=> {setUserName(e.currentTarget.value)}}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder='contraseña'/>
        </Form.Group>
        <Button variant="primary" onClick={logueo}>Entrar</Button>
      </Form>
    </Container>
  );
}

export default Login;