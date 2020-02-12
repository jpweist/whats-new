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
      const { name, value } = event.target
      this.setState({
        [name]: value
      })
      // console.log(this.state)
    }

    render() {
        return (
            <main>
                <form>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.handleChange}/>
                      <br />
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      onChange={this.handleChange}/>
                      <br />
                    <input
                      placeholder="Age"
                      name="age"
                      value={this.state.age}
                      onChange={this.handleChange}/>
                      <br />

                    {/* Create radio buttons for gender here */}
                    <label onClick={this.handleChange}>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === 'male'}
                      />Male

                    <br />

                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={this.state.gender === 'female'}
                    />Female
                  </label>

                    <br />

                    <select
                      value={this.state.destination}
                      name="destination"
                      onChange={this.handleChange}
                    >
                      <option value="" >choose one --</option>
                      <option value="colorado" >Colorado</option>
                      <option value="utah" >Utah</option>
                      <option value="paris" >Paris</option>
                    </select>
                    <br />

                    {/* Create check boxes for dietary restrictions here */}
                    <label>
                      <input
                        type="checkbox"
                        name="isVegan"
                        value={this.state.isVegan}
                        onChange={this.handleChange}
                      />Vegan?
                    </label>
                    <br />
                    <label>
                    <input
                      type="checkbox"
                      name="isKosher"
                      value={this.state.isKosher}
                      onChange={this.handleChange}
                    />Kosher?
                  </label>
                  <br />
                  <label>
                  <input
                    type="checkbox"
                    name="isLactoseFree"
                    value={this.state.isLactoseFree}
                    onChange={this.handleChange}
                  />Lactose Free?
                </label>
                <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age /* Age here */}</p>
                <p>Your gender: {this.state.gender/* Gender here */}</p>
                <p>Your destination: {this.state.destination /* Destination here */}</p>
                <p>
                    Your dietary restrictions:
                    {/* Dietary restrictions here, comma separated */}
                    <p>{this.state.isVegan ? "Vegan" : ""}</p>
                    <p>{this.state.isKosher ? "Kosher" : ""}</p>

                    <p>{this.state.isLactoseFree ? "Lactose Fr" : ""}</p>

                </p>
            </main>
        )
    }
}

export default Form
