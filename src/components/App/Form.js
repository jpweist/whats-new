import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class Form extends Component {
    constructor() {
        super()
        this.state = {
          firstName: "",
          lastName: "",
          age: "",
          gender: "",
          destination: "",
          isVegan: false,
          isKosher: false,
          isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
      const { name, value, type, checked } = event.target
      this.setState({
        [name]: value
      })
    }

    render() {
        return (
            <main>
                <form>
                    <input
                      name="firstName"
                      value={this.state.firstName}
                      placeholder="First Name"
                      onChange={this.handleChange}/>
                      <br />
                    <input
                      name="lastName"
                      value={this.state.lastName}
                      placeholder="Last Name"
                      onChange={this.handleChange}/>
                      <br />
                    <input
                      name="age"
                      value={this.state.age}
                      placeholder="Age"
                      onChange={this.handleChange}/>
                      <br />
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                      />Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                      />Female
                    </label>
                    <br />

                      <select value={this.destination} name="destination" onChange={this.handleChange}>
                        <option value="">Pick One</option>
                        <option value="japan" >Japan</option>
                        <option value="Ireland" >Ireland</option>
                        <option value="Mexico" >Mexico</option>
                      </select>
                    <br />

                    <label>
                      <input
                        type="checkbox"
                        name="isVegan"
                        onChange={this.handleChange}
                        />Vegan?
                    </label>
                    <br />

                    <label>
                      <input
                        type="checkbox"
                        name="isKosher"
                        onChange={this.handleChange}
                        />Kosher?
                    </label>
                    <br />

                    <label>
                      <input
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={this.handleChange}
                        />Lactose Free?
                    </label>

                    <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions:
                    <br />
                    {this.state.isVegan ? "Vegan" : ""}
                    <br />
                    {this.state.isKosher ? "Kosher" : ""}
                    <br />
                    {this.state.isLactoseFree ? "Lactose Free" : ""}
                </p>
            </main>
        )
    }
}

export default Form
