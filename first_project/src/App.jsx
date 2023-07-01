import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Friend from './Friend'
import FriendName from './FriendName'

function App() {

  const friendList = [
    {name: "yashwant Mangate", companyName: "Google", age: 19},
    {name: "kishen aher", companyName: "Google", age: 20},
    {name: "Abhishek Mulik", companyName: "D&G", age: 22}
  ]

  return (
    <>
      <h1 title='these are my friend'>Friend List</h1>
      {/* {
        friendList.map((friend, index)=>{
          const {name, companyName, age} = friend;
          if(age > 19) return <Friend key={index} name={name} companyName={companyName}/>
        })
      } */}

      {
        friendList.filter((friend) => friend.age > 19).map((friends, index) => {
          const {name, companyName} = friends;
          return <Friend name={name} companyName={companyName}/>
        })
      }
      
    </>
  )
}

export default App
