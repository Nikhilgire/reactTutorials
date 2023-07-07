import React, {useState} from 'react';
import "./Counter.css"

const Counter = ({count, incrementCount}) => {
//  const [count, setCount] = useState(0)

//  const handleIncrement = () => {
//   // setCount(count++); // count = count + 1
//   setCount((count)=> count + 1); // count + 1 // value
//  }

//  const handleDecrement = () => {
//   if(count > 0){
//     setCount((count) => count -1)
//   }
//  }

  return (
    <div className='counterContainer'>
        <h1>{count}</h1>

        <div>
          <button onClick={incrementCount}>Increment</button>
          {/* <button onClick={handleDecrement} disabled={count <= 0}>Decrement</button> */}

        </div>
    </div>
  )
}

export default Counter