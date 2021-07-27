import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {

  const[blur, setBlur] = useState();

  return (
    <div className="App">
      <Header blur={blur} setBlur={setBlur} />
      <Home blur={blur} />
    </div>
  );
}

export default App;
