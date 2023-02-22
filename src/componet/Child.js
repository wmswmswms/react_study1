import React,{memo} from "react";


const Child = ({name,tellMe})=>{
    console.log('자녀 컴포넌트가 렌더링 되었어요')
    return(
        <div>
            <p>자녀</p>
            <p>이름: {name}</p>
            <button onClick={tellMe}>tellMe 호출하기</button>
        </div>
    )
}

//memo라는 고착 컴퍼넌트에 인자값의 컴포넌트를 받아서 최적해 준다.
//props 값이 변경될때만 렌더링 된다, 변경안되면 렌더링 된걸 재 사용
export default memo(Child);     