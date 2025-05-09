import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu/Menu";
import { FoodMenu } from "./components/Menu/FoodMenu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/foodmenu" element={<FoodMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
