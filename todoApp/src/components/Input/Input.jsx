import { useState } from "react"
import "./Input.css"

const Input = ({text, onTextChange, addTodo}) => {
    
    return (
        <div>
            <input className="input-box" value={text} onChange={onTextChange} type="text" placeholder="Enter todo" />
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}

export default Input;