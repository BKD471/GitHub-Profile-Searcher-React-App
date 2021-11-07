
import React,{useContext,useState} from 'react';

import {Collapse, 
Navbar,
NavbarToggler,
NavbarBrand,Nav,NavItem,NavLink,NavbarText} from 'reactstrap'


import {Link} from 'react-router-dom';

import {UserContext} from '../context/userContext';

const Header = ()  => {

    const context=useContext(UserContext);
    const [isOpen,setIsOpen]=useState(false);
  
    const toggle = () => setIsOpen(!isOpen)

   return (

      <Navbar  color="info" light expand="md">
          <NavbarBrand><Link to="/"  className="text-white">Github Profile search app</Link></NavbarBrand>
         <NavbarText className="text-white">{

             context.user?.email ? context.user.email : ""
         }</NavbarText>
         <NavbarToggler onClick={toggle}/>
         <Collapse isOpen={isOpen} navbar>

             <Nav className="ml-auto" navbar>
             {
                context.user? (<NavItem>
                     <NavLink   onClick={()=>{context.setUser(null)}} className="text-white">
                        Log Out
                     </NavLink>
                 </NavItem>):(
                     <>
                     <NavItem>
                     <NavLink tag={Link}  to="/signup" className="text-white">
                        Sign UP
                     </NavLink>
                 </NavItem>
                 <NavItem>
                     <NavLink tag={Link}  to="/signin" className="text-white">
                        Sign IN
                     </NavLink>
                 </NavItem></>)

             }
                 
                 
             </Nav>
         </Collapse>
      </Navbar>
   )

}

export default Header;