//import './style1.css';
//import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';
import { useCallback, useState,useReducer } from 'react';
import Box from './Box';


//userReducer 
//reducer - state를 업데이트 하는역활
//dispathch - state 업데이트를 위한 요구
//action - 요구의 내용

//오브젝트형태의 변수로 빼서 변수값을 일괄 관리함
const ACTION_TYPES = {
  deposit: 'deposit',
  withdraw: 'withdraw'
}

//useReducer 사용시 첫번째 인자값이 함수명이 된다.
//useReducer 사용시 첫번째값이 아래 첫번쨰 인자와 같다
//useReducer 사용시 두번째 인자값의 이름으로 action에 오브젝트값을 담아서 보내면 여기서 처리한디ㅏ
const reducer = (state, action) =>{
  console.log('dispatch 함수 실행됨', state, action);
  
    switch(action.type){
      case ACTION_TYPES.deposit:
        return state + action.payload;
      case ACTION_TYPES.withdraw:
        return state - action.payload;        
      default:
        return state;
    }

  
  
}

function App() {

  const [number, setNumber] = useState(0);
  const [money, dispathch22] = useReducer(reducer,0); //첫번째값: state, 두번째값은 요구. 첫번째인자 호출함수, 두번쨰값 money 값 정의
   

  return (      
      <div>
        <h1>useReducer 은행에 오신것을 환영합니다.</h1>
        <p>잔고: {money}</p>
        <input
          type="number"
          value={number}
          onChange={(e)=>{
            setNumber(parseInt(e.target.value));
          }}
          step="1000"
        >
        </input>
        <button onClick={()=>{
          dispathch22({
            type: ACTION_TYPES.deposit,
            payload: number
          })
        }}>입금</button>
        <button onClick={()=>{
          dispathch22({
            type: ACTION_TYPES.withdraw,
            payload: number
          })
        }}>출금</button>

        

      

      </div>

  );
}

export default App;

// eslint-disable-line no-unused-vars