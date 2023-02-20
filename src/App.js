//import './style1.css';
//import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';
import { useCallback, useState } from 'react';
import Box from './Box';


function App() {

  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);


  //useCallback 을 사용 하여 size값이 바뀔경우에만 실행
  // 함수명 = useCallback... 안에 return 값 정의
  const boxStyle = useCallback(()=>{

 
      return{
        backgroundColor: 'pink',
        width: `${size}px`,
        height: `${size}px`,
      }    
   

  },[size])
  



  

  return (      
      <div style={
        {
          background: isDark? 'black' : 'white'
        }
      }>
       
        <input
          type="number"
          value={size}
          onChange={(e)=>{
            setSize(e.target.value);
          }}
        >
        </input>
        <button onClick={()=>{ setIsDark(!isDark) }}>배경변경</button>
        <Box createBoxStyle={boxStyle}></Box>

        

      

      </div>

  );
}

export default App;

// eslint-disable-line no-unused-vars