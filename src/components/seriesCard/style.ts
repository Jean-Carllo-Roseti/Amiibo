import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
export const ContentCardSeries = styled.div`
  height: 208px;
  margin-bottom: 20px;
  border-radius: 28px;
  padding: 8px;
  background-size: cover;
  animation: ${fadeIn} 1s ease-out;
  cursor: pointer;
  box-shadow: 18px -17px 5px 1px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 18px -17px 5px 1px rgba(0, 0, 0, 0.8);
    transform: scale(1.05);
    transition:
      box-shadow 0.7s ease,
      transform 0.7s ease;
  }
`
