import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useUserContext } from '../components/context/user_admin_context';

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('')
  const { login } = useUserContext();

  const [error, setError] = useState('');

  const handleLogin = () => {
    const success = login(userName);
    if (!success) {
      setError("Usuario no encontrado");
    } else {
      setError('');
      return navigate('/user')

    }
  };

  
  return (
    <Container className="mt-5" style={{ maxWidth: 400 }}>
      <h2>Iniciar sesión</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder='nombre de usuario' onChange={(e) => { setUserName(e.currentTarget.value) }} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder='contraseña' />
        </Form.Group>
        <Button variant="primary" onClick={handleLogin}>Entrar</Button>
      </Form>
    </Container>
  );
}

export default Login;