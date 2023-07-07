import { useState } from "react"
import "./Input.css"

const Input = ({text}) => {
    
    return (
        <div>
            <input className="input-box" value={text} type="text" placeholder="Enter todo" />
            <button>Add Todo</button>
        </div>
    )
}

export default Input;