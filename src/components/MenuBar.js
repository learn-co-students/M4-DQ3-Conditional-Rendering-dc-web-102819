import React from 'react'


class MenuBar extends React.Component {
  
  render() {
    // console.log(this.props)
    return (
      <div className="ui four item menu">
        <a className="item active" id="profile" onClick={this.props.changeDisplayedCard}>
          <i className="user large icon" id="profile"/>
        </a>

        <a className="item" id="photo" onClick={this.props.changeDisplayedCard}>
          <i className="photo large icon" id="photo"/>
        </a>

        <a className="item" id="cocktail" onClick={this.props.changeDisplayedCard}>
          <i className="cocktail large icon" id="cocktail"/>
        </a>

        <a className="item" id="pokemon" onClick={this.props.changeDisplayedCard}> 
          <i className=" themeisle large icon" id="pokemon"/>
        </a>
      </div>
  )
  }
}
  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */
export default MenuBar
