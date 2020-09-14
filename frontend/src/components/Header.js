import React from 'react'
import { Navbar, NavbarBrand } from "reactstrap"

const Header = () => {
   return(
      <Navbar color="primary" dark className="mb-4">
         <NavbarBrand href="/">Movie list</NavbarBrand>
      </Navbar>
   )
}

export default Header