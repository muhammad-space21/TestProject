import styled from 'styled-components';

import ImageBackground from '../../assets/images/malibu.3.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${ImageBackground});
  background-size: cover;
`;