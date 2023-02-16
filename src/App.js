import './App.css';
import {useState,useRef } from 'react';
//import Timer from './componet/Timer';




function App() {
  
  // const [count, setCount] = useState(0);

  // //useRef는 object 형태임 {current: 0}
  // //useRef 값이 바뀌면 렌더링 되지 않지만 값은 바뀐다. 
  // const countRef = useRef(0); 
  // //console.log(countRef);

  // const increaseCountState = () =>{
  //   setCount(count+1);
  // }

  // const increaseCountRef = ()=>{
  //   countRef.current++;
  // }


  //useRef는 다시 렌더링도 해도 값을 유지함(마운트해제될때까지)
  //일반 변수는 렌더링시 다시 초기화 됨
  const countRef = useRef(0);
  var countVar = 0;
  const [render,setRender] = useState(0);

  const doRendering = ()=>{
      setRender(render+1);
  }

  const increaseRef = ()=>{
    countRef.current++;
    console.log('countRef:' + countRef.current);
  }

  const increaseVar = ()=>{
    countVar++;
    console.log('countVar:' + countVar);
  }



  return (
    <div className="App">      
    <p>ref: {countRef.current}</p>
    <p>var: {countVar}</p>
    <button onClick={doRendering}>랜더링하기</button>
    <button onClick={increaseRef}>Ref올려</button>
    <button onClick={increaseVar}>Var올려</button>
    

    </div>
  );
}

export default App;

// eslint-disable-line no-unused-vars