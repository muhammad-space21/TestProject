import styled from 'styled-components';


export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: white;

  /* background-color: #dfe6e9; */
  /* #b2bec3 #636e72 */
`;

export const Heading = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 55px;
  color: #000000;
  margin-top: 50px;
  margin-right: 50px;
  margin-left: 50px;
  @media screen and (max-width: 1000px) {
    font-size: 38px;
    line-height: 45px;
  }
  @media screen and (max-width: 600px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const HR = styled.div`
  width: 80%;
  border-bottom: 2px solid black;
  margin-top: 30px;
`;

export const Row = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 50px;
  margin-bottom: 50px;
`;
