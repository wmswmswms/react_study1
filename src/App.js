//import './style1.css';
//import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';
import { useCallback, useState,useReducer } from 'react';
import Student from './componet/Students';


//userReducer 
//reducer - state를 업데이트 하는역활
//dispathch - state 업데이트를 위한 요구
//action - 요구의 내용

const reducer = (state,action) =>{  
  
  switch(action.type){    
    case 'add-student':
      const name = action.payload.name;
      if(name == ""){
        alert('이름을 입력하세요');
        return state;
      }
      const newStudent = {
        id: Date.now(),
        name, //key 와 value가 같으면 생략가능 ,
        isHere: false,
      }
      
      console.log(state.count +1);
      return {
        count: state.count +1,
        students : [...state.students,newStudent],  //기존 배열에 새벼열을 추가
      }      

    case 'delete-student':
      console.log(state,action);
      return{
        count: state.count-1,
        students: state.students.filter(  //filter 는 일치하지 않는것만 구한다는듯 
          // (student) 는 state.students 값을 사용하는것이므로 선언하는 인자값이므로 임의로 사용
          // onClick={(e)=>{}} 이것과 같은 의미
          (student) => student.id !== action.payload.id 
        )
      }
    
    case 'mark-student':
      return{
        count: state.count,
        students: state.students.map((student)=>{
          
          if(student.id === action.payload.id){            
            //console.log(student.name+'변경');
            if(student.isHere == false){
              var name_re = student.name+'변경'
            }else{
              var name_re = student.name.replace(/변경/gi,"");  
            }
            
            
            return {...student, isHere: !student.isHere, name: name_re }  //배열안에 해당 배열값을 변경
            //return student;  
          }
          return student;        
        })
      }

    default:
      return state;
  };  
}


const initialState = {
  count: 0,
  students: [],
}




function App() {

  const [name, setName] = useState('');

  //첫번째 배열값은 state명칭, 두번쨰 배열값은 요구사항 명칭
  //첫번쨰 인자값은 reducer 정의 함수명, 두번째 인자값은 state의 값 정의 함수명
  //첫번째배열값으로 하단에서 정의 한다.
  //첫번쨰 인자값의 reducer 함수안에서는 두번째 인자값이 같이 전달되기 때문에 첫번쨰 인자값 함수 안에서 사용이 가능함
  const [studentInfo, dispatch] = useReducer(reducer,initialState); 
   

  return (      
      <div>
        <h1>출석부</h1>      
        <p>총 학생수 {studentInfo.count}</p>
        <input          
          type="text" 
          value={name}
          onChange={(e)=> setName(e.target.value)}
        ></input>
        <button onClick={()=>{
          dispatch({
            type: 'add-student',
            payload: {name}
          })
        }}>추가</button>

        {
          studentInfo.students.map((student)=>{       
            return(
              <Student key={student.id} name={student.name} dispatch={dispatch} id={student.id} isHere={student.isHere} /> 
            ) 
          })
        }     

      </div>

  );
}

export default App;

// eslint-disable-line no-unused-vars