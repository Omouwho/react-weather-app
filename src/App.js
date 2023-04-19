import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer"

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />

         <Footer />
      </header>
      </div>

     



    </div>
  );
}
