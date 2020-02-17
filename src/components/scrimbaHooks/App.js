import React, {useState} from 'react'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

    function increment() {
       setCount(prevCount => prevCount + 1)
    }

    function decroment() {
       setCount(prevCount => prevCount - 1)
    }

    function double() {
      setCount(prevCount => prevCount * prevCount)
    }

    function half() {
      setCount(prevCount => Math.floor(prevCount / 2))
    }

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decroment}>Decrement</button>
      <button onClick={double}>Double</button>
      <button onClick={half}>Half</button>
    </div>
  )
}

export default App
