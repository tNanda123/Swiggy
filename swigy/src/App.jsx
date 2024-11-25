
import React from 'react'
import LandingPage from './suby/pages/LandingPage'
import TopBar from './suby/components/TopBar';
import LoginPage from './suby/components/LoginPage';
import SignupPage from './suby/components/SignupPage';
import { Routes, Route } from 'react-router-dom'

import './App.css'
import ProductMenu from './suby/components/ProductMenu'

const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element = { <LandingPage />} />
          <Route path='/products/:firmId/:firmName' element = {<ProductMenu />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
      </Routes>
    
    </div>
  )
}

export default App
