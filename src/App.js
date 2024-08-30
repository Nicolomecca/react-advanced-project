import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
    <header>
   <MyNavbar/>
    </header>
    <main className="flex-grow-1">
     <h1 className="text-center mt-4">Welcome to the Weather App</h1>
      <p className="text-center">Here you can find weather forecasts.</p>
    </main>
    <footer>
      <MyFooter/>
    </footer>
    </div>

  );
}

export default App;
