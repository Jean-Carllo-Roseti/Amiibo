import styled from 'styled-components'

export const DestaqueContent = styled.section`
  background-color: #cdcdd8;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding: 10px 0;
  border-radius: 8px;

  :nth-child(2) {
    margin-left: 0;
    margin-right: 0;

    @media (max-width: 768px) {
      margin: 0 auto;
      padding: 4px 0;
    }
  }

  @media (max-width: 768px) {
    width: 80%;
    display: block;
  }

  .container {
    margin-top: 24px;
    margin-bottom: 24px;
  }
`
