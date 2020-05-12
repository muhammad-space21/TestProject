import React from 'react';

import {
  NavbarStyled, 
  NavStyled, 
  NavLinkStyled,
  NavDropdownStyled,
  NavItemStyled,
  HR,
  NavbarBrand
} from './styles';

import { Navbar, NavDropdown } from 'react-bootstrap';
import IconPhone from '../../assets/icons/phone-icon.png';
import BrandLogo from '../../assets/images/logo@2x-1.png';

export const NavbarMain = () => (
    <NavbarStyled bg='default' variant='default' expand="lg">
      <NavbarBrand href="#home"> 
        <img src={BrandLogo} alt="Brand-logo"/> 
      </NavbarBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavStyled className="ml-auto">
          <NavLinkStyled href="#home">Главная</NavLinkStyled>
          
            <NavDropdownStyled title="Автомобили" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            </NavDropdownStyled>
          
          <NavLinkStyled href="#link">Как купить</NavLinkStyled>
          <NavLinkStyled href="#link">Партнеры</NavLinkStyled>
          <NavLinkStyled href="#Контакты">Контакты</NavLinkStyled>
          <NavItemStyled> 
            <HR />
            <img src={IconPhone} alt='icon-phone' /> 
            <span>+99895-479-0770</span>
          </NavItemStyled>
        </NavStyled>
      </Navbar.Collapse>
    </NavbarStyled>
);

export default NavbarMain;