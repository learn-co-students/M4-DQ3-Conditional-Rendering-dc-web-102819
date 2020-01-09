import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super()
    this.state = {
      active: false
    }
  }

  changeDisplayedCard = (e) => {
    this.setState({
      active: e.target.id
    })
  }

  render() {

    if (this.state.active === 'profile' ) {
      return (
        <div>
          <MenuBar changeDisplayedCard={this.changeDisplayedCard}/>
          <Profile />
        </div>
      )
    } else if (this.state.active === 'photo') {
      return (
        <div>
          <MenuBar changeDisplayedCard={this.changeDisplayedCard}/>
          <Photos />
        </div>
      )
    } else if (this.state.active === 'cocktail') {
        return (
          <div>
            <MenuBar changeDisplayedCard={this.changeDisplayedCard}/>
            <Cocktails />
          </div>
        )
    } else if (this.state.active === 'pokemon') {
        return (
          <div>
            <MenuBar changeDisplayedCard={this.changeDisplayedCard}/>
            <Pokemon />
          </div>
        )
    } else {
        return (
          <div>
            <MenuBar changeDisplayedCard={this.changeDisplayedCard}/>
          </div>
        )
    }

  }

}

export default MainBox
