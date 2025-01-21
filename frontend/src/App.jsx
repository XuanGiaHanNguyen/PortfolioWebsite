import React from 'react';
import Landing from './page/Landing';
import Header from './page/component/header';
import Footer from './page/component/footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';

function App() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
