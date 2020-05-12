import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #dfe6e9; 
  /* #b2bec3 #636e72 */
`;

export const Heading = styled.h1`
  font-size: 48px;
  font-weight: 600;
  line-height: 48px;
  color: #000000;
  margin-top: 50px;
`;

export const HR = styled.div`
  border-bottom: 1px solid grey;
`;

export const Row = styled.div`
  width: 80vw;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 2px solid green;
  @media screen and (max-width: 991px) {
    width: 100vw;
    justify-content: space-evenly;
  }
`;
