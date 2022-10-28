import React from "react";

import Cart from "./components/Cart/Cart";
import Router from "./Routes/Router";
import { ShopProvider } from "./hooks/Shop.hook";

import "./index.scss";

function App() {
  return (
    <>
      <ShopProvider>
        <div className="wrapper">
          <Cart />
          <Router />
        </div>
      </ShopProvider>
    </>
  );
}

export default App;
