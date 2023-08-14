import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CardHome from "./components/CardHome";
import Cart from "./components/Cart";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<CardHome />}/>
      <Route exact path="/item" element={<ItemListContainer tittle={'All Products'} />}/>
      <Route exact path="/item/:forId" element={<ItemListContainer tittle={'Food Store: '}/>}/>
      <Route exact path="/items/:id" element={<ItemDetailContainer />}/>
      <Route exact path="/cart" element={<Cart />}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
