import React, { useEffect } from 'react';
import './App.css';
import eruda from 'eruda'
import {useLocalStateProvider, useLocalState} from './localState'
import { useRecoilState } from 'recoil';
function H() {
    const [num, setNum] = useLocalState(0)
    return <>
      <h1>num</h1>
      <p>{num}</p>
      <J />
      <button onClick={() => setNum(Math.random() * 100)}>change num</button>
    </>
}
function J() {
  const [, setNum] = useLocalState(0)
  return <button onClick={() => setNum(-Math.random() * 100)}>set negative num</button>
}
function App() {
  const [numState, NumStateProvider] = useLocalStateProvider(0)
  const [num] = useRecoilState(numState)
  useEffect(() => eruda.init({
    autoScale: true,
    defaults: {
      displaySize: 40,
      transparency: 0.95
    }
  }), [])
    return (
      <NumStateProvider><H />{num}</NumStateProvider>

  );
}

export default App;
