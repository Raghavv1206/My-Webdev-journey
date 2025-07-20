import React from 'react'
import { NavLink} from 'react-router-dom'


const Navbar = () => {
 
  return (
    <div>
      <div>
        <nav>
            <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/Home"><li>Home</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/About"><li>about</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/Login"><li>Login</li></NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
