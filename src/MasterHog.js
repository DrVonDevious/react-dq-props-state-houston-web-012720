import React, { Component } from 'react'
import Master from './assets/master-hog.png'
import BabyHog from './BabyHog'
import offspring from './db.js'

export default class MasterHog extends Component {

  constructor() {
    super()
    this.state = {
      eyeColor: "blue",
    }
  }


  changeEyeColor = (e) => {
    this.setState({
      eyeColor: e.target.value
    })
  }


  render() {
    return (
      <div>

        <input type="radio" name="eyeColor" value="blue" onChange={this.changeEyeColor} />
        Blue<br></br>
        <input type="radio" name="eyeColor" value="sun" onChange={this.changeEyeColor} />
        Sun<br></br>
        <input type="radio" name="eyeColor" value="glowing" onChange={this.changeEyeColor} />
        Glowing<br></br>

        <h2>Name: Master Blaster</h2>
        <h3>Weight: 2.54 Tons</h3>
        <h3>Eye Color: {this.state.eyeColor}</h3>

        <div id="masters-domicile">
          <img id="m:w
          aster-blaster" src={Master} alt="" />
        </div>

        <ul className="hoglist">
          <BabyHog name={offspring[0].name} color={this.state.eyeColor} hobby={offspring[0].hobby}/>
          <BabyHog name={offspring[1].name} color={this.state.eyeColor} hobby={offspring[1].hobby}/>
          <BabyHog name={offspring[2].name} color={this.state.eyeColor} hobby={offspring[2].hobby}/>
        </ul>

      </div>
    )
  }

}
