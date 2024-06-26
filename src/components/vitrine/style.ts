import styled from 'styled-components'

export const AmiiboList = styled.ul`
  margin-top: 16px;
  display: flex;
  height: 260px;
  background-color: #cdcdd8;
  padding: 12px;
  border-radius: 8px;
`

export const AmiiboItem = styled.li`
  width: 185px;
  margin-right: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  .link {
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 180px;
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

export const VitrineSec = styled.section`
  display: flex;
  overflow-x: auto;
  padding: 10px;
  background-color: #f4f4f4;
  border-radius: 8px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; // Assegura que a barra de rolagem não apareça em browsers como IE e Firefox
  scrollbar-width: none; // Assegura que a barra de rolagem não apareça em browsers Firefox

  ${AmiiboItem} {
    &:hover {
      border: solid 4px rgba(144, 238, 0, 1);
      transition: border-color 0.9s ease;
    }
  }
`

export const VitrineGeral = styled.div`
  display: flex;
  position: relative;
`
export const VitrineButton = styled.button`
  position: absolute;
  top: 45%;
  width: 40px;
  border-radius: 20px;
  border: none;
`
export const LeftButton = styled(VitrineButton)`
  left: 0;
`

export const RightButton = styled(VitrineButton)`
  right: 0;
`
