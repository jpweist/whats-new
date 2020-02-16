import React, {Component} from 'react'

class MemeGenerator extends Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      altText: "One Desnot Simply Walk into Mordor",
      allMemeImg: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    const randomNum = Math.floor(Math.random() * this.state.allMemeImg.length)
    this.setState({ randomImg: this.state.allMemeImg[randomNum].url })
    this.setState({ altText: this.state.allMemeImg[randomNum].name })

  }


  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data
        console.log(memes)
        this.setState({ allMemeImg: memes })
      })
  }

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={ this.handleSubmit }>
          <input
            name="topText"
            placeholder="Top Text"
            value={ this.state.topText }
            onChange={ this.handleChange }
            />

          <input
            name="bottomText"
            placeholder="Bottom Text"
            value={ this.state.bottomText }
            onChange={ this.handleChange }
            />

            <button>Gen</button>
          </form>

          <div className="meme">
            <img src={ this.state.randomImg } alt=""/>
            <h2 className="top">{ this.state.topText === "" ? "One Does Not" : this.state.topText}</h2>
            <h2 className="bottom">{ this.state.bottomText === "" ? "Walk into Modor" : this.state.bottomText}</h2>
          </div>
      </div>
    )
  }
}

export default MemeGenerator
