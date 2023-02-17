import './App.css';
import {useState,useRef, useEffect } from 'react';
//import Timer from './componet/Timer';




function App() {
  
  const inputRef = useRef();

  useEffect(()=>{
    //console.log(inputRef);
    inputRef.current.focus();
  },[])

  const login = () =>{
    alert(`환영합니다. ${inputRef.current.value}`);
    inputRef.current.value = "";
    inputRef.current.focus();    
  }



  return (
    <div className="App">      
      <input type="text" ref={inputRef} placeholder='username'></input>
      <button onClick={login}>로그인</button>
    </div>
  );
}

export default App;

// eslint-disable-line no-unused-vars