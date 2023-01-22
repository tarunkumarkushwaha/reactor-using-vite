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
import NumberSorter from "./Components/NumberSorter";
import Aboutapp from "./Components/Aboutapp";
function App() {
  return (
    <>
      <div className="body">
      {/* <Aboutapp/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notepad/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/numbersorter" element={<NumberSorter/>}/>
      </Routes>
    </BrowserRouter>
      <Footer/>
      </div>
    </>
  );
}

export default App;
