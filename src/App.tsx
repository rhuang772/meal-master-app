import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideMenu from './SideMenu';

function App() {
  return (
    <div className="row">
      <SideMenu/>
      <input className='output-box' readOnly placeholder='Recipe suggestions appear here'></input>
      <input className="respond-box" placeholder='Ask about recipes here'></input>
    </div>
  );
}

export default App;
