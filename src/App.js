//import './style1.css';
//import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';
import { useCallback, useState,useReducer } from 'react';
import Child from './componet/Child';

function App() {

  const [parentAge, setParentAge] = useState(0);
  

  const increaseParentAge = ()=>{
    setParentAge(parentAge + 1);
  }

  console.log('부모 컴포넌트가 렌더링 되었어요')

  //parentAge 값변경시  <Child name={'홍길동'} tellMe={tellMe}></Child>   부분 name값 tellMe 함수 변동이 없고
  //Child 컴포넌트에 Memo 를 적용했는데도 Child 컴포넌트가 실행이 된다
  //함수도 객체와 동일하게 메모리값 형태로 저장되기 때문에 값이 변한걸로 인식이 되기 때문이다
  //그래서 함수일경우 useCallback 을 사용한다.

  // const tellMe = ()=>{
  //   console.log('tellMe 실행')
  // }


  const tellMe = useCallback(()=>{
    console.log('tellMe 실행');
  },[])


  return (  
      <>
      <div style={{ border: '2px solid navy', padding: '10px' }}>
        <h1>부모</h1>
        <p>{parentAge}</p>
        <button onClick={increaseParentAge}>부모 나이 증가</button>

        
      </div>
      <Child name={'홍길동'} tellMe={tellMe}></Child>  
      </>
  );
}

export default App;

// eslint-disable-line no-unused-vars