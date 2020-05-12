import styled, {css} from 'styled-components';

const getButtonStyles = props => {
    if (props.secondary) {
        return Secondary;
    } else {
      return Container;
    }
};


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
  ${getButtonStyles}
`;

export const Secondary = css`
  width: 223px;
  height: 45px;
  border: none;
  text-align: center;
  color: white;
  font-size: 15px;
  font-weight: 600;
  outline: none;
  background-color: #000000;
  border-radius: 0px;
  transition: 0.5s;
    &:hover {
      cursor: pointer;
      background-color: #00CE1B;
    }
    &:focus {
      outline: none;
    }
`;