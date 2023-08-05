import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import HairdresserMain from "./hairdresser/Main.js"; // Rename to avoid conflict

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/hairdresser/*" element={<HairdresserMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
