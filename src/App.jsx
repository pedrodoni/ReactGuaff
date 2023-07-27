import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<ItemListContainer tittle={"Food Store"} />}/>
      <Route exact path="/cats" element={<ItemDetailContainer />}/>
      <Route exact path="/dogs" element={<Navbar />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
