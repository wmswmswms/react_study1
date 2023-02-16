import './App.css';
import { useState } from 'react';

const heavyWork = () =>{
  console.log('무거운 작업');
  return ['이름1','이름2']
}



function App() {


  //heavyWork() 계속 실행됨.  return heavyWork();  콜백 형태로 하면 렌더링 될때 한번만 불려짐
  // const [names, setNames] = useState(()=>{
  //   return heavyWork();
  // }); 

  // heavyWork 이렇게 괄호없이 쓰면 콜백 형태로 되는듯
  const [names, setNames] = useState(heavyWork);

  const [input, setInput] = useState("");
  


  const handleInput = (e) =>{
    setInput(e.target.value);
    //console.log(input);
  }

  const names_add = () =>{
    /*
    const new_names = [...names];
    new_names.push(input);
    setNames(new_names);
    */

    setNames((prevState)=>{
      //return [input,...prevState] //새값을 기존 배열 앞에
      return [...prevState,input] //새값을 기존 배열 뒤에
    })
  }

  return (
    <div className="App">
      <input type="text" name="input_name" onChange={handleInput}></input>
      <button onClick={names_add}>upload</button>
      {
        names.map((name,idx)=>{
          //console.log(idx);
          return <p key={idx}>{name}</p>
        })
      }
    </div>
  );
}

export default App;

// eslint-disable-line no-unused-vars