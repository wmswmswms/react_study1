import './style1.css';
import {useState,useRef, useEffect } from 'react';
//#import  Header  from './componet/Header';
import Page from './componet/Page';




function App() {

  const [isDark, setIsdark] = useState(false);

  return (
   
      <Page isDark={isDark} setIsdark={setIsdark}></Page>
    
  );
}

export default App;

// eslint-disable-line no-unused-vars