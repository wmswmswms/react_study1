//import './style1.css';
import {useState,useRef, useEffect,useContext,useMemo,useCallback } from 'react';



function App() {

  const [number, setNumber] = useState(0);
  const [toggle, setToggle] =  useState(true);


  //useCallback 의존성배열인 number 값이 변할경우에만 실행
  //의존성배열을 [] 하면 처음 한번만 실행되므로 number 값이 처음값인 0만 저장이 되어서
  //nummber 값이 변한후 someFunction을 실행해도 number 값이 0이된다.
  const someFunction = useCallback(()=>{
    console.log(`someFunction: number: ${number}`);    
  },[number]);

  

  useEffect(()=>{
    console.log('someFunction이 변경되었습니다.')
  },[someFunction]);

  return (      
      <div>
       
        <input
          type="number"
          value={number}
          onChange={(e)=>{
            setNumber(e.target.value);
          }}
        >
        </input>

        <button onClick={()=> setToggle(!toggle)}>{toggle.toString()}</button>
          
        <button onClick={someFunction}>someFunction실행</button>

      

      </div>

  );
}

export default App;

// eslint-disable-line no-unused-vars