import { useState } from "react";

function MyUl (props){
    const todoElement = props.showTodo;
    console.log(todoElement);
    const [completeTodo, setCompleteTodo] = useState([]);
    const handleTogger = (index) => {
        console.log(222,completeTodo);
        setCompleteTodo([...completeTodo, index]);     
        }
    return(
        <ul id="myUL">
        {todoElement.map((element,index)=>{   
            const isComplete = completeTodo.includes(index);        
            return <li key={index} onClick={() => handleTogger(index)} className={isComplete ? 'completed' : ''}>{element}</li>
        })}
      </ul>
    )
}
export default MyUl;