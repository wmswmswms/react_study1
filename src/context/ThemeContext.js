//context 만들기
import { Context, createContext } from "react";




//한줄로 해줘야 됨
// createContext 괄호안에 값을넣으면
// app.js 에서  <ThemeContext.Provider value={{isDark, setIsdark}}> 로 감싸주지 않아도 초기값으로 사용이 가능함
// Heder.jsx 에서 확인가능: console.log(useContext(ThemeContext));
// <ThemeContext.Provider value={{isDark, setIsdark}}>  로 감싸주었다면 괄호안에 값에 무시됨
export const ThemeContext = createContext('hello');