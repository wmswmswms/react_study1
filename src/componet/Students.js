import React from "react";
                                
const Student = ({ name, dispatch, id, isHere})=>{

    console.log(id);
    console.log(dispatch);

    return(
        <div>
            <span style={{
                textDecoration: isHere ? 'line-through' : 'none',
                color: isHere ? 'gray' : 'black'
            }}
            onClick={()=>{
                console.log(id);

                dispatch(
                    {
                        type: 'mark-student',payload: {id:id},
                    }
                )


            }}
            >{name}</span>
            <button onClick={()=>{
                dispatch(
                    {
                        type: 'delete-student',payload: {id:id},
                    }
                )
            }}>삭제</button>
        </div>
    );

}

export default Student;