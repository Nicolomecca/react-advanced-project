import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; 


const MyFooter = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className=" text-white mt-5 p-4 text-center" style={{ backgroundColor: '#2569B2' }}>
      <Container>
        <Row>
          <Col md="4">
            <h5>WeatherApp</h5>
            <p>&copy; {currentYear} MeteoApp. Tutti i diritti riservati.</p>
          </Col>
          <Col md="4">
            <h5>Contatti</h5>
            <p>Email: info@weatherapp.com</p>
            <p>Telefono: +39 012 345 6789</p>
          </Col>
          <Col md="4">
            <h5>Seguici</h5>
            <div className ="mt-4">
            <a href="https://facebook.com" className="text-white me-2 ms-2 fs-3">
            <i className="bi bi-facebook footer-icon me-2"></i> </a>
            <a href="https://twitter.com" className="text-white me-2 ms-2 fs-3">
            <i className="bi bi-twitter-x footer-icon me-2"></i>
            </a>
            <a href="https://instagram.com" className="text-white">
            <i className="bi bi-instagram footer-icon me-2 ms-2 fs-3"></i>
            </a>
            </div>
            
            
          
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;