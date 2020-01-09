import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(){
    super()
    this.state={
      activeMenu: 'profile'
    }
  }

  setActiveMenuItem = (event) => {
    this.setState({
      activeMenu: event.target.id
    })
  }

  selectDiplayContent(){
    switch (this.state.activeMenu){
      case "profile":
        return <Profile />
      case "photo":
        return <Photos />
      case "cocktail":
        return <Cocktails />
      case "pokemon":
        return <Pokemon />
    }
  }

  render() {
    

    const detailsToDisplay = <div>{this.selectDiplayContent()}</div>

    return (
      <div>
        <MenuBar activeMenu={this.state.activeMenu} setActiveMenuItem={this.setActiveMenuItem}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
