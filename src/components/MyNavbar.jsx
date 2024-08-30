import { Navbar, Nav, Container } from 'react-bootstrap';

const MyNavbar = () => (
  <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#024345' }}>
    <Container fluid>
      <Navbar.Brand className='text-white'href="#home">Meteo</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link  className='text-white' href="#features">About</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link  className='text-white' href="#deets">More deets</Nav.Link>
          <Nav.Link  className='text-white' eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNavbar;