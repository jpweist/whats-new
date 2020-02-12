import React, {Component} from 'react'

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
          isLactoseFree: false,
          isKosher: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
      const {name, value, type, checked} = event.target

      type === "checkbox" ?
        this.setState({
          [name]: checked
        })
      :
      this.setState({
        [name]: value
      })
      console.log(this.state)
    }

    render() {
        return (
            <main>
                <form>
                    <input placeholder="First Name" name="firstName" onChange={this.handleChange}/><br />
                    <input placeholder="Last Name" name="lastName" onChange={this.handleChange}/><br />
                    <input placeholder="Age" name="age" onChange={this.handleChange}/><br />

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

                    <select
                    value={this.state.destination}
                    name="destination"
                    onChange={this.handleChange}>
                      <option value="" >Choose One</option>
                      <option value="japan" >Japan</option>
                      <option value="iceand" >Iceand</option>
                      <option value="maine" >Maine</option>
                      <option value="swizerland" >Swizerland</option>
                    </select>
                    <br />

                    <label>
                      <input
                        type="checkbox"
                        name="isVegan"
                        onChange={this.hangleChange}
                        checked={this.state.isVegan}
                      />Vegan?
                    </label>
                    <br />

                    <label>
                      <input
                        type="checkbox"
                        name="isKosher"
                        onChange={this.hangleChange}
                        checked={this.state.isKosher}
                      />Kosher?
                    </label>
                    <br />

                    <label>
                      <input
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={this.hangleChange}
                        checked={this.state.isLactoseFree}
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
                <p>Your dietary restrictions:</p>
                <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
                <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
                <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
            </main>
        )
    }
}
