import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import { Container, Row, Col, Form } from "react-bootstrap";

const HomePage = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); 

  const cities = [
    "London",
    "New York",
    "Tokyo",
    "Paris",
    "Berlin",
    "Sydney",
    "Rome",
    "Madrid",
  ];

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = () => {
    const fetchPromises = cities.map((city) => {
      return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7f07777075088034e8a506a8aac02915`) 
        .then((response) => response.json());
    });

    Promise.all(fetchPromises)
      .then((results) => {
        setWeatherData(results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        setErr(error);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (err) {
    return <div>Error: {err.message}</div>;
  }

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Row className="justify-content-center mt-5">
            <Col xs={12} md={4} className="text-center">
              <Form.Group>
                <Form.Control
                  type="search"
                  placeholder="Cerca una città"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {weatherData.map((data, index) => (
              <Col xs={12} md={3} key={index}> 
                <WeatherCard
                  city={data.name}
                  temperature={data.main.temp}
                  condition={data.weather[0].description}
                  icon={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;