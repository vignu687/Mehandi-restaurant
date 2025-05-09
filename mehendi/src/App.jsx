import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu/Menu";
import { FoodMenu } from "./components/Menu/FoodMenu";
import ShishaMenu from "./components/Menu/ShishaMenu";
import { WineMenu } from "./components/Menu/WineMenu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/foodmenu" element={<FoodMenu />} />
        <Route path="/shishamenu" element={<ShishaMenu />} />
        <Route path="/winemenu" element={<WineMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
