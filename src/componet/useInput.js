import { useState } from "react";

//initialValue 는 넘어온값 그대로
//submitAction app.js에서 displayMessage 함수
// const handleSubmit 는 <input type="text" value={inputValue} onChange={handleChange}></input>    에서 
//onChange 안에가 적용
//onChange 시 handleChange 실행되는걸 리턴해주는것(실행된다는 의미)
//const handleSubmit <button onClick={handleSubmit}>확인</button> 에서 handleSubmit 가 적용// 
//onClick 시 useInput의 handleSubmit 가 실행 되는것을 리턴해주는것(실행된다는 의미)
//

export function useInput(initialValue, submitAction){

    const [inputValue, setInputValue] = useState(initialValue);
  
    const handleChange = (e)=>{      
      setInputValue(e.target.value)
    }

    const handleSubmit = ()=>{

      //빈값처리가 되지만
      //리액트가 제공하는 이벤트 핸들러에 등록이 되어서, 리액트의 판단에따라 가장 좋은 시점에 실행이 됩니다. 그렇기때문에 결과적으로 submitAction이 더 먼저 실행이 되는거죠
      setInputValue('')
      submitAction(inputValue);
    }

    //app.js 에서 배열로 명시된 것을 그대로 리턴해준다.(그대로 사용하게 처리함)
    return [inputValue, handleChange, handleSubmit];
    
}