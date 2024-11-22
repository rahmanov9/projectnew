import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import "./pages/Home.jsx"
import Home from './pages/Home.jsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />

      </Routes>
    </>
  );
};

export default App;
