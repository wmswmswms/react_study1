//import './style1.css';
//import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';
import { useCallback, useState,useReducer } from 'react';
import { useInput } from './componet/useInput';



const displayMessage = (message)=>{
  alert(message);
}

function App() {

  //useInput.js 에서의  리턴값이 return [inputValue, handleChange]; 데로 명시해준다
  //useInpt(,) useInput.js 에 매겨변수로 넘겨준다.
  //onChange onClick 에 명시된 함수를 실행해준다고 생각하면 됨  
  //displayMessage는 매개변수 이름이고 useInput.js 에서 매개변수로 받는다(매개변수 주고받을때 이름이 같을 필요는 없는듯)
  //app.js 에서의 함수명을 입력해서 usInput.js에서 submitAction(inputValue); 이런행태로 받은것을 displayMessage 함수에서 처리
  const [inputValue, handleChange, handleSubmit] = useInput('',displayMessage);
  
  //useInput




  return (  
      
      <div>
        <h1>useInput</h1>

        <input type="text" value={inputValue} onChange={handleChange}></input>        
        <button onClick={handleSubmit}>확인</button>
        

        
      </div>
      
  );
}

export default App;

// eslint-disable-line no-unused-vars