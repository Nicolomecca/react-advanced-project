import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import CitySearch from "./CitySearch"; 

const HomePage = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

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

  const handleCitySearch = (city) => {
    setIsLoading(true); 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7f07777075088034e8a506a8aac02915`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('City not found');
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData([data]); 
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        setErr(error);
        setIsLoading(false); 
      });
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Row className="justify-content-center mt-5">
            <Col xs={12} md={4} className="text-center">
              <CitySearch onSearch={handleCitySearch} />
            </Col>
          </Row>

          {isLoading && (
            <Container className="text-center mt-5">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Container>
          )}

          {err && <div>Error: {err.message}</div>}

          {weatherData.length === 1 ? (
            <Row className="justify-content-center">
              <Col xs={12} md={4} className="d-flex justify-content-center mt-3">
                <WeatherCard
                  city={weatherData[0].name}
                  temperature={weatherData[0].main.temp}
                  condition={weatherData[0].weather[0].description}
                  icon={`http://openweathermap.org/img/wn/${weatherData[0].weather[0].icon}@2x.png`}
                />
              </Col>
            </Row>
          ) : (
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
          )}

          {weatherData.length === 1 && (
            <Row className="justify-content-center mt-4">
              <Col xs={12} md={4} className="text-center">
                <Button variant="primary" onClick={fetchWeather}>
                  Mostra tutte le città
                </Button>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;