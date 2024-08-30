import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <header>
          <MyNavbar />
        </header>
        <main className="flex-grow-1">
          <div  className="hero " >
            <div className="text-center text-white">
              <h1 className="mb-3">Welcome to the Weather App</h1>
              <p className="lead">Here you can find weather forecasts.</p>
            </div>
          </div>
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFoundPage />} /> 
          </Routes>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
