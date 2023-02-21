//import './style1.css';
//import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';
import { useCallback, useState,useReducer, useMemo } from 'react';
import Child from './componet/Child';

function App() {

  const [parentAge, setParentAge] = useState(0);
  

  const increaseParentAge = ()=>{
    setParentAge(parentAge + 1);
  }



  console.log('부모 컴포넌트가 렌더링 되었어요')

  //오브젝트 형태는 props 값이 변경이 된다.(메모리 형태로 저장되기 때문에)
  //그래서 Child 컴포넌트에서 memo 를 사용했지만 렌더링이 된다.(props 가 변경이 된것이기 때문에)
  //그래서 useMemo를 사용하여 객체도 한번만 렌더링 하게 함
  const name = useMemo(()=>{    
      return{
        lastName: '홍',
        firstName: '길동'
      }
  },[])
  
  

  return (  
      <>
      <div style={{ border: '2px solid navy', padding: '10px' }}>
        <h1>부모</h1>
        <p>{parentAge}</p>
        <button onClick={increaseParentAge}>부모 나이 증가</button>

        
      </div>
      <Child name={name}></Child>  
      </>
  );
}

export default App;

// eslint-disable-line no-unused-vars