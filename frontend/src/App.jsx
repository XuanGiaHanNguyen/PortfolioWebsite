import React from 'react';
import Landing from './page/Landing';
import Header from './page/component/header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;