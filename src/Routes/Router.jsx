import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "../components/Header";
import AllSneakers from "../components/AllSneakers";
import Favorite from "../components/Favorite";
import Purchase from "../components/Purchase";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AllSneakers />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
        <Route path="/purchase" element={<Purchase />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
