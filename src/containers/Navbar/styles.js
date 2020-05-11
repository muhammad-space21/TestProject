import styled from 'styled-components';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export const NavbarStyled = styled(Navbar)`
  width: 100vw;
  height: 100px;
  background-color: #000000;
  font-family: 'Varela Round', sans-serif;
  padding-left: 50px;
  padding-right: 50px;
`;

export const NavStyled = styled(Nav)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavLinkStyled = styled(Nav.Link)`
  font-size: 16px;
  line-height: 20px;
  font-weight: 300;
  color: #ffffff;
  margin-right: 30px;
  &:hover {
    color: white;
  }
`;

export const NavDropdownStyled = styled(NavDropdown)`
  font-size: 18px;
  line-height: 20px;
  font-weight: 300;
  color: #ffffff;
`;

export const NavItemStyled = styled(Nav.Item)`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
  }
  span {
    font-size: 16px;
    line-height: 21px;
    font-weight: 400;
    color: #ffffff;
    margin-left: 15px;
    font-family: 'Montserrat', sans-serif;
  }
`;

export const HR = styled.div`
  height: 50px;
  border-left: 1px solid white;
  margin-right: 10px;
`;

export const NavbarBrand = styled(Navbar.Brand)`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 13px;
  img {
    width: 80%;
    height: 25px;
  }
`;