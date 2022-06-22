import React from 'react'
import { NavBarContainer, NavbarLogo, Buttons, LoginButton, SignUpButton } from './Navbar.styles'
import Logo from '../images/Logo1.png'

function Navbar() {
  return (
    <>
      <NavBarContainer>
        <NavbarLogo src={Logo} alt='Logo'></NavbarLogo>
        <Buttons>
          <LoginButton to='/login'>Login</LoginButton>
          <SignUpButton to='/SignUp'>Sign Up</SignUpButton>
        </Buttons>        
      </NavBarContainer>
    </>
  )
}

export default Navbar