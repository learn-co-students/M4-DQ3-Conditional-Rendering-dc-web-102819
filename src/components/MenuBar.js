import React from 'react'

const MenuBar = (props) => {

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */
  function setClassNames(id) {
    if (props.activeMenu === id) {
      return "item active"
    } else {
      return "item"
    }
  }

  return (
    <div className="ui four item menu">
      <a className={setClassNames("profile")} id="profile" onClick={props.setActiveMenuItem}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={setClassNames("photo")} id="photo" onClick={props.setActiveMenuItem}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={setClassNames("cocktail")} id="cocktail" onClick={props.setActiveMenuItem}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={setClassNames("pokemon")} id="pokemon" onClick={props.setActiveMenuItem} >
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
