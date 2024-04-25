import styled from 'styled-components'

export const DestaqueContent = styled.section`
  background-color: #f4f4f4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  padding: 10px 0;

  :nth-child(2) {
    margin-left: 0;
    margin-right: 0;
  }

  .container {
    margin-top: 24px;
    margin-bottom: 24px;
  }
`
