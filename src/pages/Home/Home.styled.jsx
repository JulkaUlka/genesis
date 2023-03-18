import styled from 'styled-components';

export const CourseList = styled.ul`
  margin-top: 0;
  margin-bottom: 0;
  padding: 10px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
`;
export const Title = styled.h1`
  margin-left: 20px;
`;

export const Pagination = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;
export const PageNumber = styled.button`
  width: 32px;
  background-color: #f39c1c;
  color: #fff;
  border: none;
  padding: 8px 10px;
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
  &.active {
    background-color: #818080;
  }
`;
