import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Calculator from "./Components/Calculator";
import Todo from "./Components/Todo";
import Notepad from "./Components/Notepad/Notepad";
import NumberSorter from "./Components/NumberSorter";
function App() {
  // let key = 5
  return (
    <>
      <div className="body">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Notepad/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/numbersorter" element={<NumberSorter/>}/>
      </Routes>
    </BrowserRouter>
      </div>
    </>
  );
}

export default App;
