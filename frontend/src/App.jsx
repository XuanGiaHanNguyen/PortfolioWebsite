import React from 'react'
import Landing from './page/Landing'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
