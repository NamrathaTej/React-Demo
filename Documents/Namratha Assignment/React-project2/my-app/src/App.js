import logo from "./logo.svg";
import "./App.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./component/Home";
import Countrytable from "./Countrytable";
import React from "react";
import CountryDetails from "./component/Details/CountryDetails";
import Search from "./component/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details/:name" element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
