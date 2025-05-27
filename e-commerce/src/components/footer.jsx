import { Container } from 'react-bootstrap';
import NavBar from './navbar';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 py-3"
      style={{position: 'fixed', width: '100%', bottom: '0'}}
    >
      <NavBar></NavBar>
    </footer>
  );
}

export default Footer;