import styled from 'styled-components'
// Main Wrapper
const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
// Art Column
const ArtColumn = styled.div`
  height: 100%;
  width: 35%;
  background: #e2d0ff;
  display: flex;
  padding-top: 10rem;
  align-items: center;
  justify-content: center;
`
// FormColumn
const FormColumn = styled.div`
  height: 100%;
  width: 65%;
  margin: auto;
  padding-top: 10rem;
  background: #fff;
`

export { MainWrapper, ArtColumn, FormColumn }
