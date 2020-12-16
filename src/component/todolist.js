import React from 'react';

function ToDolist(props) {
    const {student} = props;
    return (
        <div>
            {student.map((item)=>{
                <p>{item.name}</p>
            })}
        </div>
    )
}
export default ToDoList;