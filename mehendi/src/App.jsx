import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
