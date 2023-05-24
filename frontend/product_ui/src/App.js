import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./component/AddProduct";
import EditProduct from "./component/EditProduct";
import Home from "./component/Home";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/addProduct" element={<AddProduct />}></Route>
        <Route path="/editProduct" element={<EditProduct />}></Route>
      </Routes>
    </>
  );
}

export default App;
