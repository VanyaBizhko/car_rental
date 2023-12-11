import React from 'react';
import Logo from '../../images/logo.png';
import {
  NavBarList,
  NavBarItem,
  NavLinkStyled,
  NavLogo,
  Nav,
  MenuText,
} from './NavBar.styled';

export const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLogo to={'/'}>
          <img src={Logo} alt="logo" />
        </NavLogo>
        <NavBarList>
          <NavBarItem>
            <NavLinkStyled to={'/'} style={{ textDecoration: 'none' }}>
              Home
            </NavLinkStyled>
          </NavBarItem>
          <NavBarItem>
            <NavLinkStyled to={'/catalog'} style={{ textDecoration: 'none' }}>
              Catalog
            </NavLinkStyled>
          </NavBarItem>
          <NavBarItem>
            <NavLinkStyled to={'/favorites'} style={{ textDecoration: 'none' }}>
              Favorite
            </NavLinkStyled>
          </NavBarItem>
        </NavBarList>
        <MenuText>Menu</MenuText>
      </Nav>
    </>
  );
};