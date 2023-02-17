import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UseContext } from "../context/UserContext";


const Header = () =>{
    const {isDark} = useContext(ThemeContext);
    //console.log(useContext(ThemeContext));
    const user = useContext(UseContext);

    return (
        //아래 jsx부분에서 컴포넌트랑 동일한 명칭을 사용하면 안됨. 단 대소문자는 구분함. 컴포넌트=Header jsx=header 가능. 컴포넌트=Header jsx=Header 불가능
        <header
            className ="header"
            style={{
                backgroundColor: isDark? 'black' : 'lightgray',
                color: isDark? 'white' : 'black'
            }}
        >
        <h1>welcome {user}</h1>
        </header>
   );
};

export default Header;