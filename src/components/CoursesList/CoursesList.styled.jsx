import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieItem = styled.li`
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  width: calc((100% - 120px) / 5);
  &:hover {
    box-shadow: 0 10px 20px 5px rgba(0, 0, 0, 0.3);
  }
`;

export const LinkStyled = styled(Link)`
  color: black;
  display: block;
  margin-bottom: 10px;
  &:hover {
    color: orange;
  }
`;
export const Image = styled.img`
  height: 153px;
  width: 347px;
  margin: 0 auto;
`;
export const Title = styled.h3`
  width: 260px;
  height: 60px;
  text-wrap: wrap;
  text-align: center;
  margin: 0 auto;
`;
