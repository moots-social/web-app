import React from "react";
import SideBar from './components/SideBar/SideBar';
import TelaLogin from '../pages/telaLogin/telaLogin';
import '../src/App.css';


export default function App() {
  return (
    <div className="app">
      <TelaLogin />
    </div>
  );
}