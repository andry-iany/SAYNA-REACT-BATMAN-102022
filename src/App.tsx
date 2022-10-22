import "./App.css";
import { Routes, Route } from "react-router-dom";
import EShop from "./pages/eshop";
import Game from "./pages/game";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Nav from "./components/nav";
import ContainerWrapper from "./components/container";

function App() {
  return (
    <div>
      <ContainerWrapper>
        <Nav />
        <Routes>
          <Route element={<EShop />} path="/" />
          <Route element={<Game />} path="/game" />
        </Routes>
      </ContainerWrapper>
    </div>
  );
}

export default App;
