import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super()
    this.state = {
      menuSelection: 'profile'
    }
  }

  changeState = (e) => {
    // debugger
    this.setState({
      menuSelection: e.currentTarget.id
    })
  }

  render() {
    let result

    switch (this.state.menuSelection) {
      case 'profile':
        result = < Profile />
        break
      case 'photo':
        result = < Photos />
        break
      case 'cocktail':
        result = < Cocktails />
        break
      case 'pokemon':
        result = < Pokemon />
        break
      default:
        result = "Something went wrong. Please debug me."
    }

    const detailsToDisplay = <div>{result}</div>

    return (
      <div>
        <MenuBar changeState={this.changeState}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
