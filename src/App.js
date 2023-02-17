//import './style1.css';
import {useState,useRef, useEffect,useContext,useMemo } from 'react';


const hardCalculator = (hardNumber)=>{
  console.log('어려운 계산됨');
  for(let i=0;i<=999999999;i++){

  }
  return hardNumber + 10000;
}


const easyCalculator = (easyNumber)=>{
  console.log('쉬운 계산됨');
  return easyNumber + 1;
}


function App() {

  const [hardNumber, setHardnumber] = useState(1);
  const [easyNumber, seteasyNumber] = useState(1);


  //useNemo 는 렌더링될때 처리 예외를 할 수 있다
  //[hardNumber] 은 hardNumber 값이 변경될 때만 실행한다. [] 를 넣으면 최초 한번만 실행
  //안에서 return 사용 해야됨
  const hardSum = useMemo(()=>{
    return hardCalculator(hardNumber);
  },[hardNumber]);

  // const hardSum = hardCalculator(hardNumber);
  const easyNum = easyCalculator(easyNumber);

  return (      
      <div>
        <h3>어려운 계산기</h3>
        <input 
        type="number"
        value={hardNumber}
        onChange={(e)=>{
          setHardnumber(parseInt(e.target.value));
        }}
        >
        </input>
        <span>+ 10000 = {hardSum}</span>


        <h3>쉬운 계산기</h3>
        <input 
        type="number"
        value={easyNumber}
        onChange={(e)=>{
          seteasyNumber(parseInt(e.target.value));
        }}
        >
        </input>
        <span>+ 1 = {easyNum}</span>

      </div>

  );
}

export default App;

// eslint-disable-line no-unused-vars