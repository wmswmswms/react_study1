import './style1.css';
import {useState,useRef, useEffect,useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { UseContext } from './context/UserContext';
import Page from './componet/Page';



function App() {

  const [isDark, setIsdark] = useState(false);

  //contenxt 로 감싸주고 value에 useState 명을 지정하여 하위 컴포넌트 들 에서 사용 가능하게 해준다.
  //props 를 사용하지 않아도 되므로 자식의 자식등등 하위컴포넌트 들에서 userContext 로 받아서 사용한다
  //Provider value 에서 1개면 value 는 object형태로 해야됨. value 가 1개면 {} 2개면 {{}} 형태로
  return (      
      <UseContext.Provider value={'이름바꿈'}>  
        <ThemeContext.Provider value={{isDark, setIsdark}}>
          <Page isDark={isDark} setIsdark={setIsdark}></Page>
        </ThemeContext.Provider>
      </UseContext.Provider>
  );
}

export default App;

// eslint-disable-line no-unused-vars