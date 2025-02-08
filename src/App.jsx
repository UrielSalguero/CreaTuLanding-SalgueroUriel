import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navegacion from "./components/Navegacion";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartWidget from "./components/CartWidget";
import Auth from "./components/Auth";
import { CartProvider } from "./context/CartContext";
import { auth } from "./config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
    return () => unsubscribe()
  }, [])

  return (
    <CartProvider>
      <Router>
        <Navegacion />
        <Auth setUser={setUser} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/product/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartWidget />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App;
