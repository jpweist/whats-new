import React, {Component} from 'react'

class MemeGenerator extends Component {
  constructor() {
    super()
    this.state = {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
      allMemeImages: [],
      altText: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response => {
      const { memes } = response.data
      this.setState({ allMemeImages: memes })
    })
  }
  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const randNum = Math.floor(Math.random() * this.state.allMemeImages.length)
    const randMemeImg = this.state.allMemeImages[randNum].url
    const altText = this.state.allMemeImages[randNum].name

    this.setState({ randomImage: randMemeImg })
    this.setState({ altText: altText })

  }



  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Top Text"
            name="topText"
            value={ this.state.topText }
            onChange={ this.handleChange }
          />
          <input
            type="text"
            placeholder={this.state.altText.length > 0 ? this.state.altText : "Bottom Text"}
            name="bottomText"
            value={ this.state.bottomText }
            onChange={ this.handleChange }
          />
          <button >GEN</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} alt={this.state.altText}/>
          <h2 className="top" >{this.state.topText}</h2>
          <h2 className="bottom" >{this.state.bottomText}</h2>
        </div>

      </div>
    )
  }

}

export default MemeGenerator
