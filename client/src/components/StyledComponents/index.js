import styled, { keyframes } from 'styled-components'

export const Heading = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 2px;
   margin-bottom: 0px;
   text-align: center;
`

export const fade = keyframes`
  0%, 100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
`;

export const LoaderWrapper = styled.div`
  min-height: 300px;
  width: 100%;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  margin: 0 6px;
  background: black;
  border-radius: 50%;
  box-shadow: 0 0 12px black;
  animation: ${fade} 0.7s infinite;
  animation-delay: ${props => props.delay};
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
`;


