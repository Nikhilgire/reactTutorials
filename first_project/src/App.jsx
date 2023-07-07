import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Friend from './components/Friend/Friend'
import Table from './components/Table/Table'
import Counter from './components/Counter/Counter'

const App = () => {

  // const friendList = [
  //   {name: "yashwant Mangate", companyName: "Google", age: 19},
  //   {name: "kishen aher", companyName: "Google", age: 20},
  //   {name: "Abhishek Mulik", companyName: "D&G", age: 22}
  // ]

  // const rowData = [
  //   {name: "Yashwant Mangate", email: "yash@gmail.com", contact:8329659032},
  //   {name: "kishen Aher", email: "kishen@gmail.com", contact:1234567890},
  //   {name: "Abhishek Mulik", email: "abhishek@gmail.com", contact:4987654321},
  //   {name: "Manoj", email: "manoj@gmail.com", contact:8329659032},
  //   {name: "vishal", email: "vishal@gmail.com", contact:8329659032},
  //   {name: "Robin", email: "robin@gmail.com", contact:8329659032},
  // ]

  const [counter1, setcounter1] = useState(0)
  const [counter2, setcounter2] = useState(0)

  const handleIncrement1 = () => {
    setcounter2(counter2 + 1)
  }

  const handleIncrement2 = () => {
    setcounter1(counter1 + 1)
  }

  return (
    <>
      {/* <h1 title='these are my friend'>Friend List</h1> */}
      {/* {
        friendList.map((friend, index)=>{
          const {name, companyName, age} = friend;
          return <Friend key={index} name={name} companyName={companyName}/>
        })
      } */}

      {/* {
        friendList.filter((friend) => friend.age > 19).map((friends, index) => {
          const {name, companyName} = friends;
          return <Friend name={name} companyName={companyName}/>
        })
      } */}

      {/* <Table data={rowData}/> */}
      <div id="container">
        <Counter count={counter1} incrementCount={handleIncrement1}/>
        <Counter count={counter2} incrementCount={handleIncrement2}/>
      </div>
      
    </>
  )
}

export default App
