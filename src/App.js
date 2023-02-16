import './App.css';
import { useState, useEffect } from 'react';
import Timer from './componet/Timer';




function App() {

  const [showTimer,setshowTimer] = useState(false);

  return (
    <div className="App">
      {showTimer && <Timer /> } {/*showTimer 가 true일때만 실행*/}
      <button onClick={()=>{ setshowTimer(!showTimer)  }}>Toggle Timer</button> {/* !showTimer 이건 현재값에 반대값이란말. showTimer 가 false면 반대값인 true, false이면 true 로 변ㄱ*/}
     </div>
  );
}

export default App;

// eslint-disable-line no-unused-vars