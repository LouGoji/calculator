import React from 'react'
import NavLink from './NavLink'

function Nav() {

    return (
        <div className="Nav" style={{'backgroundColor': 'white'}}>
            <NavLink content="Good" />
            <NavLink content="Luck" />
            <NavLink content="On" />
            <NavLink content="Me!" />
        </div>
    )
}

export default Nav
