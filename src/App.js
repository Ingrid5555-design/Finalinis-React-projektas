import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import AddEdit from './pages/AddEdit';
import Users from './pages/Users';

// Components
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <section className='container'>
        <h1>Renginiu Organizavimo App</h1>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/add' element={<AddEdit />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
