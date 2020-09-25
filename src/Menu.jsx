import React from 'react';
import {NavLink} from 'react-router-dom'
const Menu = () =>{
  return(<>
    <div className='main_div'>
    <NavLink exact activeClassName='active_class' to='/'>Contact us</NavLink>
    <NavLink exact activeClassName='active_class' to='/about'>About us</NavLink>
    <NavLink exact activeClassName='active_class' to='/user/:name'>User</NavLink>
    <NavLink exact activeClassName='active_class' to='/service'>Service</NavLink>
    </div>
    
  </>)
};
export default Menu;