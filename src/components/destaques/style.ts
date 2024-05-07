import styled from 'styled-components'

export const DestaqueContent = styled.section`
  background-color: #cdcdd8;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding: 10px 0;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 340px;
    display: block;
  }

  .container {
    margin-top: 24px;
    margin-bottom: 24px;
  }
`
