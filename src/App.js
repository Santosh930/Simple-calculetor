// import logo from './logo.svg';
import './App.css';
import React from 'react';
import  {useRef,useState} from 'react';

function App() {
  const inputRef=useRef(null);
  const resultRef=useRef(null);
  const [result,setResult]=useState(0);
  const plus=(e)=>{
    e.preventDefault();
    setResult((result)=>result+Number(inputRef.current.value));
  }
  const minus=(e)=>{
    e.preventDefault();
    setResult((result)=>result-Number(inputRef.current.value));
  }
  const times=(e)=>{
    e.preventDefault();
    setResult((result)=>result*Number(inputRef.current.value));
  }
  const divide=(e)=>{
    e.preventDefault();
    setResult((result)=>result/Number(inputRef.current.value));
  }
  const resetInput=(e)=>{
    e.preventDefault();
    inputRef.current.value=0;
  }
  const resetResult=(e)=>{
    e.preventDefault();
    setResult((preval)=>preval*0);
  }
  return (
    <div className="App">
      <h1>Simplest Working Calculetor App</h1>
      <form>
        <p ref={resultRef}>{result}</p>
        <input pattern='[0-9]' ref={inputRef} type='number' placeholder='Enter a number!'/><br/><br/>
        <button onClick={plus}>Add</button>
        <button onClick={minus}>Substraction</button>
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>
      
      
    </div>
  );
}

export default App;
