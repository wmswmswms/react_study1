import React from "react";

const Content = ({isDark})=>{
    return(
        <div 
        className="content"
        style={{
            backgroundColor: isDark? 'black' : 'lightgray',
            color: isDark? 'white' : 'black'
        }}
        
        >
            홍길동님 좋은 하루되세요
        </div>
    )
}

export default Content;