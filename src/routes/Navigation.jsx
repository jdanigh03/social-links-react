import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from '../Card';
import Home from '../Home';
import CardRick from '../CardRick';

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/character' element={<CardRick />} />
        <Route path="/*" element={<p>Error 404</p>}/>
      </Routes>
    </Router>
  )
}

export default Navigation;
