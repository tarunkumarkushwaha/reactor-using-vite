import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Calculator from "./Components/Calculator";
import Footer from "./Components/Footer";
import Todo from "./Components/Todo";
import Notepad from "./Components/Notepad/Notepad";
import AlarmClock from "./Components/AlarmClock";
import CurrencyConverter from "./Components/CurrencyConverter";
import WeatherWidget from "./Components/WeatherWidget";
import Dictionary from "./Components/Dictionary";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notepad/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/alarmclock" element={<AlarmClock/>}/>
        <Route path="/currencyconverter" element={<CurrencyConverter/>}/>
        <Route path="/weather" element={<WeatherWidget/>}/>
        <Route path="/dictionary" element={<Dictionary/>}/>
      </Routes>
    </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
