
const WeatherCard = ({ city, temperature, condition, icon, isSearchResult }) => {
  return (
    <div className={`weather-card ${isSearchResult ? 'search-result' : ''}`}>
      <div className="weather-card-header">
        <h2>{city}</h2>
      </div>
      <div className="weather-card-body">
        <img src={icon} alt={condition} className="weather-icon" />
        <div className="weather-info">
          <h3>{Math.round(temperature)}°C</h3> 
          <p>{condition}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;