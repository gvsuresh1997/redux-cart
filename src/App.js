import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

function App() {
  // cart setup
  // THis is the change
  // THis is the change
  // THis is the change
  // THis is the change
  // THis is the change
  // THis is the change

  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
