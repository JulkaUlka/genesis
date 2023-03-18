import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const Block = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 20px;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #f39c1c;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
  transition: background-color 0.2s ease;

  &:disabled{
    background-color: #f39c1c4a;
    cursor: auto;
    &:hover {
      background-color: #f39c1c4a;
    }
  }

  &:hover {
    background-color: #818080;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  &.active {
    background-color: #818080;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 500px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const LinkStyled = styled(Link)`
  margin-left: 50px;
  display: inline-block;
  background-color: #f39c1c;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #818080;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
`;
export const NavLinkStyled = styled(NavLink)`
  margin-left: 50px;
`;
