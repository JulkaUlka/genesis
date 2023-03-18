import { Outlet } from 'react-router-dom';

import {
  HeaderWrapper,
  LinkWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled';

export const Header = () => {
  return (
    <>
      <NavBar>
        <HeaderWrapper>
          <LinkWrapper>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/courses">Courses</NavLinkStyled>
          </LinkWrapper>
        </HeaderWrapper>
      </NavBar>
      <Outlet />
    </>
  );
};
