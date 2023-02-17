import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UseContext } from "../context/UserContext";

const Content = ()=>{
    const {isDark} = useContext(ThemeContext);
    const user = useContext(UseContext);
    return(
        <div 
        className="content"
        style={{
            backgroundColor: isDark? 'black' : 'lightgray',
            color: isDark? 'white' : 'black'
        }}
        
        >
           {user}님 좋은 하루되세요
        </div>
    )
}

export default Content;