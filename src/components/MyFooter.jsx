import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const MyFooter = () => {
  const currentYear = new Date().getFullYear(); // Sposta questa riga all'interno del componente

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
            <a href="https://facebook.com" className="text-white me-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="text-white me-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;