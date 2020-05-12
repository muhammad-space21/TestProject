import styled from 'styled-components';

export const Container = styled.div`
  width: 22%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    width: 60%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 50%;
  object-fit: cover;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Model = styled.span`
  font-size: ${(props) => props.small ? '18px' : '24px'};
  line-height: ${(props) => props.small ? '18px' : '24px'};
  font-weight: ${(props) => props.small ? '500' : '700'};
  color: ${(props) => props.small ? 'black' : '#523FDC'};
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const Price = styled.span`
  font-size: 24px;
  line-height: 24px;
  font-weight: 600;
  color: black;
  margin-bottom: 30px;
`;