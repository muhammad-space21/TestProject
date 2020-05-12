import styled from 'styled-components';

export const Container = styled.button`
  width: 150px;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 5px; 
  background-color: #523FDC;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: white;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;