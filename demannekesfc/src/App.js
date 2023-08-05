import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Hairdresser from "./hairdresser/Main.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/hairdresser" element={<Hairdresser />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
