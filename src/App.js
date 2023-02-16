import './App.css';
import {useState,useRef, useEffect } from 'react';
//import Timer from './componet/Timer';




function App() {
  

  //useRef는 값이 바뀌어도 렌더링 되지 않는다
  //랜더링 수 구하는 예  
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(()=>{
    renderCount.current++;
  });

  const increaseCount = ()=>{
    setCount(count+1);
  }  


  return (
    <div className="App">      
      렌더링 카운트: {renderCount.current}
      <button onClick={increaseCount}>count증가</button>
    </div>
  );
}

export default App;

// eslint-disable-line no-unused-vars