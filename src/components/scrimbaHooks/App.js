import React, {useState, useEffect} from 'react'
import randomcolor from 'randomcolor'
import './style.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("")

    function increment() {
       setCount(prevCount => prevCount + 1)
    }

    function decroment() {
       setCount(prevCount => prevCount - 1)
    }

    function double() {
      setCount(prevCount => prevCount * 2)
    }

    function half() {
      setCount(prevCount => Math.floor(prevCount / 2))
    }

    useEffect(() => {
      setColor(randomcolor())
    }, [count])

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1)
      }, 1000)

      return () => clearInterval(intervalId)
    }, [])

  return(
    <div>
      <h1 style={ {color: color} }>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decroment}>Decrement</button>
      <button onClick={double}>Double</button>
      <button onClick={half}>Half</button>
    </div>
  )
}

export default App
