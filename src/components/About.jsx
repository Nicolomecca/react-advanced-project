
const About = () => {
  return (
    <div className="about-container">
      <h1>Come si Studia il Meteo</h1>
      <p>
        Lo studio del meteo è una scienza complessa che coinvolge l'osservazione e l'analisi di vari fenomeni atmosferici. Ecco alcuni dei principali metodi utilizzati:
      </p>
      <div className="method">
        <h2>1. Osservazioni Dirette</h2>
        
        <p>
          Le osservazioni dirette includono la misurazione della temperatura, umidità, pressione atmosferica, velocità e direzione del vento. Questi dati vengono raccolti utilizzando strumenti come termometri, igrometri, barometri e anemometri.
        </p>
      </div>
      <div className="method">
        <h2>2. Satelliti Meteorologici</h2>
        <p>
          I satelliti meteorologici forniscono immagini e dati in tempo reale dell'atmosfera terrestre. Questi satelliti aiutano a monitorare i sistemi nuvolosi, le tempeste e altri fenomeni atmosferici su larga scala.
        </p>
      </div>
      <div className="method">
        <h2>3. Modelli Meteorologici</h2>
        <p>
          I modelli meteorologici sono simulazioni computerizzate che utilizzano equazioni matematiche per prevedere il tempo. Questi modelli prendono in considerazione variabili come temperatura, pressione e umidità per fornire previsioni accurate.
        </p>
      </div>
    </div>
  );
};

export default About;
