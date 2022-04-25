import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import * as eruda from 'eruda'

function App() {
  useEffect(() => eruda.init({
    autoScale: true,
    defaults: {
      displaySize: 40,
      transparency: 0.95
    }
  }))
    return (
    <></>
  );
}

export default App;
