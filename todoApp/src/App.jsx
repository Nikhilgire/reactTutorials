
import { useState } from 'react'
import './App.css'
import {v4} from "uuid"

import Input from './components/Input/Input'
import TodoList from './components/TodoList/TodoList'

function App() {

 const [text, setText] = useState("");
 const [todos,setTodos] = useState([])

 const handleOnTextChange = (e) => {
  setText(e.target.value)
 }

 const handleAddTodo = () => {

  if(text !== ""){
    const newTodo = {
      id: v4(),
      title: text,
      isComplete: false
     }
  
     setTodos((prevTodos) => [...prevTodos, newTodo])
  
     setText("")
  }else{
    alert("Todo can't be empty")
  }
 }

 const handleDeleteTodo = (id) => {
  console.log("Delete todo: " + id);

  const newTodos = todos.filter(todo => todo.id !== id)

  setTodos(newTodos)
 }

  return (
    <>
      <Input text={text} onTextChange={handleOnTextChange} addTodo={handleAddTodo}/>
      <TodoList todos={todos} deleteTodo={handleDeleteTodo}/>
    </>
  )
}

export default App
