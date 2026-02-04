import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Calculator from "./Components/Calculator";
import Footer from "./Components/Footer";
// import Todo from "./Components/Todo";
import Notepad from "./Components/Notepad/Notepad";
import AlarmClock from "./Components/AlarmClock";
import CurrencyConverter from "./Components/CurrencyConverter";
import WeatherWidget from "./Components/WeatherWidget";
import Dictionary from "./Components/Dictionary";
import Navbar from "./Components/Navbar";
import ImageSearch from "./Components/ImageSearch";
import GroceryList from "./Components/GroceryList";
import ToolsPage from "./Components/Tools/ToolsPage";
import Calender from "./Components/TaskManager/Calender";
import RegexTester from "./Components/RegexTester";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Navbar /><Notepad /></>} />
          <Route path="/grocerylist" element={<><Navbar /><GroceryList /></>} />
          <Route path="/calculator" element={<><Navbar /><Calculator /></>} />
          <Route path="/calender" element={<><Navbar /><Calender /></>} />
          {/* <Route path="/todo" element={<><Navbar /><Todo /></>} /> */}
          <Route path="/imagesearch" element={<><Navbar /><ImageSearch /></>} />
          <Route path="/alarmclock" element={<><Navbar /><AlarmClock /></>} />
          <Route path="/regex" element={<><Navbar /><RegexTester/></>} />
          <Route path="/currencyconverter" element={<><Navbar /><CurrencyConverter /></>} />
          <Route path="/weather" element={<><Navbar /><WeatherWidget /></>} />
          <Route path="/dictionary" element={<><Navbar /><Dictionary /></>} />
          <Route path="/tools" element={<><Navbar /><ToolsPage /></>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
