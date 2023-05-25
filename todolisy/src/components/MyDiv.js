import React, { useRef } from 'react';
function MyDiv(props){
    const inputRef = useRef(null);
    const handleAdd = () => {
        const inputValue=inputRef.current.value.trim();
        if(inputValue !== ""){
            props.addTodo(inputValue);
            inputRef.current.value="";
        }
    }
    return (
        <div id="myDIV" className="header">
        <h2>My To Do List</h2>
        <input type="text" id="myInput" placeholder="Title..." ref={inputRef}/>
        <span className="addBtn" onClick={handleAdd}>
          Add
        </span>
      </div>
    )
}
export default MyDiv;