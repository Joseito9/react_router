import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <Navbar bg="danger" data-bs-theme="dark">
        <Container>
                <Nav className="ms-1">
                    <Link to="/" className="text-white text-decoration-none ms-3"> Home🏘 </Link>
                    <Link to="/contact" className="text-white text-decoration-none ms-3"> Contacto</Link>
                </Nav>
                <Navbar.Brand href="/">Happy Cake🍰</Navbar.Brand>
        </Container>
    </Navbar>   
  )
}

export default Navigation
