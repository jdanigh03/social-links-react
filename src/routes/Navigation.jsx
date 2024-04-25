import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import CardRick from '../CardRick';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/social-links-profile' element={<Home />} />
        <Route path='/character' element={<CardRick />} />
        <Route path="/*" element={<p>Error 404</p>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation;
