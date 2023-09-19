import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Comment from "./pages/Comment";
import Analytics from "./pages/Analytics";


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productlist" element={<ProductList />} />
        </Routes>
         <div className="con">
            <p className="p1">Nature Travel</p>
         </div>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
