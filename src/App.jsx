import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CardHome from "./components/CardHome";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<CardHome />}/>
      <Route exact path="/item" element={<ItemListContainer tittle={'All Products'} />}/>
      <Route exact path="/item/:forId" element={<ItemListContainer tittle={'Food Store: '}/>}/>
      <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
      <Route exact path="/dogs" element={<Navbar />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
