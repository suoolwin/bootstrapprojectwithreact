import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import HomePage from './pages/HomePage';
import ClientPage from './pages/ClientPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import SoftwarePage from './pages/SoftwarePage';



function App() {

  return (
    <div className='App'>

      <Navbar />

      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/clients' element={<ClientPage />} />
          <Route path='/contacts' element={<ContactPage />} />
          <Route path='/abouts' element={<AboutPage />} />
          <Route path='/pricings' element={<PricingPage />} />
          <Route path='/softwares' element={<SoftwarePage />} />
      </Routes>

      <Footer />
    

    </div>
  )

}

export default App
