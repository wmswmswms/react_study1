import './App.css';
import { useState, useEffect } from 'react';





function App() {

  const [count,setCount] = useState(1);
  const [name,setName] = useState("");

 
  const updateCount = ()=>{
    setCount(count+1);
  }

  const handleUpdateInput = (e) =>{
    setName(e.target.value);
  }

  /*
  //레던링 될때마다 실행(디펜던스 어레이가 없으면)
  useEffect(()=>{
    console.log('렌더링');
  }) 


  //디펜던스 array에 적용하면처음 랜더링 될때와 count 값이 변경될경우에만 실행
  useEffect(()=>{
    console.log('카운트 변화');
  },[count])
  
  //디펜던스 array에 적용하면처음 랜더링 될때와 name 값이 변경될경우에만 실행
  useEffect(()=>{
    console.log('입력창 변화');
  },[name])
  */

  //디펜던스 어레이에 빈 어레이를 넣으면 처음 한번만 실행됨
  useEffect(()=>{
    console.log('처음 랜더링만');
  },[])

  return (
    <div className="App">
      <button onClick={updateCount}>Update</button>
      count: {count}
      <input type="text" onChange={handleUpdateInput}></input>
      <span>{name}</span>
    </div>
  );
}

export default App;

// eslint-disable-line no-unused-vars