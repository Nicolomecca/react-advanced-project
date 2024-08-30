import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const MyNavbar = () => {
  const location = useLocation(); 

  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#2569B2' }}>
      <Container fluid>
        <Link to="/" className="nav-link"style={{ textDecoration: 'none' }}>
          <Navbar.Brand className='text-white'>Meteo</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={`text-white ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='text-white' href="#deets">More deets</Nav.Link>
            <Nav.Link className='text-white' eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

