import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';


const App = () => {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
