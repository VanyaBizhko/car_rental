import { NavBar } from '../NavBar/NavBar';
import React from 'react';
import { HeaderStyled } from './Header.styled';
import { MobileButtons } from '../MobileNav/MobileNav';

export const Header = () => {
  return (
    <HeaderStyled>
      <NavBar />
      <MobileButtons />
    </HeaderStyled>
  );
};