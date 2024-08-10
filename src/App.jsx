import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/HomePage" element={<HomePage/>} />
      </Routes>

    </Router>
  )
};
export default App;