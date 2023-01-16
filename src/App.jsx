import "./App.css";
import NumberSorter from "./Components/NumberSorter";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Calculator from "./Components/Calculator";
import Todo from "./Components/Todo";
function App() {
  // let key = 5
  return (
    <>
      <div className="body">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<NumberSorter/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
        <Route path="/todo" element={<Todo/>}/> 
      </Routes>
    </BrowserRouter>
      </div>
    </>
  );
}

export default App;
