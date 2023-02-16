import React,{useEffect} from "react";

const Timer = (props) =>{

    //디펜던시 array 에 빈값을 넣었으므로 마운트 되었을때 한번만 실행됨
    //언마운트 되었을때 return 을 실행함
    useEffect(()=>{

        const timer = setInterval(() => {
            console.log('타이머 돌아가는중');
        }, 1000);

        //return 값을 넣어주면 언마운트 될떄 실행됨
        return ()=>{
            clearInterval(timer);
            console.log('useEffct 클린으로 setInterval 종료')
        }

    },[])



    return(
        <div>
            <span>타이머을 시작합니다. 콘솔을 확인하세요</span>
        </div>
    )
};

export default Timer;