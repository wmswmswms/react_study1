//import './style1.css';
import {useState,useRef, useEffect,useContext,useMemo } from 'react';



function App() {

  const [number, setNumber] = useState(1);
  const [isKorea,setIskorea] = useState(true);
  

  //number 값이 변경하여 재 렌더링 될때
   // const location = isKorea ? "한국" :  "외국";
   //위와같이 일반 변수 사용시에는 값이 그대로 저장되어있는 형태라서 하단의 useEffect가 실행이 안되지만
   // const location = {
  //    country :  isKorea ? "한국" :  "외국",
   //}
   //이렇게 object 형태는 메모리에 값이 저장되고 그메모리가주소가 생기는것이기 때문에
   //값이 바뀌는것으로 인삭함
   // 그래서 useMemo를 사용한다
   //useMemo 는 return 해줘야됨
   //useMemo 는 값이 저장되는 형태임
  const location = useMemo(()=>{
    return{
      country :  isKorea ? "한국" :  "외국",
    }
  },[isKorea])

  

  // location값이 바뀔때만 실행함
  useEffect(()=>{
    console.log('useEffect호출')
  },[location]);

  return (      
      <div>
        <h3>하루에 몇기 먹어요?</h3>
        <input
          type="number"
          value={number}
          onChange={(e)=>{
            setNumber(e.target.value);
          }}
        >
        </input>

        <h3>어느나라에 있어요?</h3>
        나라: {location.country}
        <button onClick={()=>setIskorea(!isKorea)}>바꾸기</button>

      </div>

  );
}

export default App;

// eslint-disable-line no-unused-vars