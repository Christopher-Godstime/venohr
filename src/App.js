import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageRender from "./customRouter/PageRender";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  const [show, setShow] = useState(false);
  return (
    <Router>
      <div className="font-manrope">
        <Navbar show={show} setShow={setShow} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:page" element={<PageRender />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
