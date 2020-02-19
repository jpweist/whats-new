import React, {Component} from 'react'

class NewJSFeatures extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      greeting: "hi",
      age: 50

    }
    // this.increment = this.increment.bind(this)
    // this.decrement = this.decrement.bind(this)
  }

  increment = () => { // arrow function no need to bind this way
    this.setState(prevState => ({ count: prevState.count + 1 }) )
  }

  decrement = () => { // arrow function no need to bind this way
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      }
    })
  }

  render() {
    const {count, greeting, age} = this.state
    return (
      <div>
        <h1>{count} {greeting}  {age}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }


}

export default NewJSFeatures
