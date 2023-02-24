//import './style1.css';
//import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';
import { useCallback, useState,useReducer, useEffect } from 'react';
import { useFetch } from './useFetch';


const baseUrl = "https://jsonplaceholder.typicode.com";

function App() {

  //리스트 예
  // const {data, fetchUrl} = useFetch(baseUrl, "users");

  //1개의 데이타 불러오는 예
  //data: userData 는 받아온값의 변수명을 userData 로 변경한다는말
   const {data: userData} = useFetch(baseUrl,'users');
   const {data: postData} = useFetch(baseUrl,'posts');
   const {data: todoData} = useFetch(baseUrl,'todos');

  return (  
      
      <div>
        <h1>useFetch</h1>
        {/* 리스트 불러오는 예 */}
          {/* <button onClick={()=> fetchUrl('users')}>users</button>
          <button onClick={()=> fetchUrl('posts')}>posts</button>
          <button onClick={()=> fetchUrl('todos')}>todos</button>  
          <pre>{JSON.stringify(data, null, 2)}</pre>         */}

        {/* 1개의 데이타 불러오는 예 */}
          <h1>users</h1>
          {userData && <pre>{JSON.stringify(userData[0], null, 2)}</pre>}
          <h1>posts</h1>
          {postData && <pre>{JSON.stringify(postData[0], null, 2)}</pre>}
          <h1>users</h1>
          {todoData && <pre>{JSON.stringify(todoData[0], null, 2)}</pre>}                    

      </div>
      
  );
}

export default App;

// eslint-disable-line no-unused-vars
