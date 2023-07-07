
import { useState } from 'react'
import './App.css'
import Input from './components/Input/Input'
import TodoList from './components/TodoList/TodoList'

function App() {

 const [text, setText] = useState("");


  return (
    <>
      <Input text={text}/>
      <TodoList/>
    </>
  )
}

export default App
