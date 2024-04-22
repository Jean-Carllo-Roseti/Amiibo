import styled from 'styled-components'

export const AmiiboList = styled.ul`
  display: flex;
  hight: 260px;
`

export const VitrineSec = styled.section`
  display: flex;
  overflow-x: auto;
  padding: 10px;
  background-color: #f4f4f4;
  border-radius: 8px;
`

export const AmiiboItem = styled.li`
  width: 160px;
  margin-right: 20px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 200px;
    display: block;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 16px;
    color: #333;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`
