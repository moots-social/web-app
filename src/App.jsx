
import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from '../src/Components/Header/Header';
import Principal from './Pages/Principal/Principal';
import TelaLogin from './Pages/telaLogin/TelaLogin';

function App() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  )
}


export default App

