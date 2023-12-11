import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavBarList = styled.ul`
  display: flex;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const NavBarItem = styled.li`
  list-style: none;
  margin-right: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  height: 20px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s, box-shadow 0.2s;
  color: black;
  background-color: #3470ff;
  font-size: 18px;
  text-align: center;
  align-items: center;
    color: white;

  &:hover {
  
    background-color: black;
  }
  &.active {
    color: white;
    background-color: black;
  }

  @media (max-width: 767px) {
    display: flex;
    height: 14px;
    padding: 6px;
    border-radius: 10px;
    border: none;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5);
    transition: transform 0.2s, box-shadow 0.2s;
    color: black;
    background-color: white;
    font-size: 12px;
    text-align: center;
    align-items: center;
  }
`;

export const NavLogo = styled(Link)`
  height: 80px;
  width: 80px;
  position: absolute;
  top: 0px;
  left: 30px;

  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    border-left: 2px solid white;
    border-right: 2px solid white;
  }
`;

export const MenuText = styled.p`
  display: none;
  color: white;

  @media (max-width: 767px) {
    position: absolute;
    top: 40px;
    left: 30px;
    display: flex;
  }
`;