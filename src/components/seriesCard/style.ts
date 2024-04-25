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
  &:hover {
    transform: scale(1.05);
    transition: transform 0.25s ease;
  }
`
