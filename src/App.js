//import './style1.css';
//import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';
import { useCallback, useState,useReducer } from 'react';
import Child from './componet/Child';

function App() {

  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const increaseParentAge = ()=>{
    setParentAge(parentAge + 1);
  }

  //React.memo Child컴포넌트의 props 값이 변경 될때만 렌더링됨
  //Child 컴포넌트에 memo 컴포넌트로 감싸서 형태로 명시해서 사용
  const increaseChildAge = ()=>{
    setChildAge(childAge+1);
  }

  console.log('부모 컴포넌트가 렌더링 되었어요')

  return (  
      <>
      <div style={{ border: '2px solid navy', padding: '10px' }}>
        <h1>부모</h1>
        <p>{parentAge}</p>
        <button onClick={increaseParentAge}>부모 나이 증가</button>
        <button onClick={increaseChildAge}>자녀 나이 증가</button>
        
      </div>
      <Child name={'홍길동'} age={childAge}></Child>  
      </>
  );
}

export default App;

// eslint-disable-line no-unused-vars