import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import HairdresserMain from "./hairdresser/Main.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/barber/*" element={<HairdresserMain />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
