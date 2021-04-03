import styled from 'styled-components'

const Button = styled.button`
  background: #a872ff;
  border: none;
  width: 100%;
  margin-top: ${(props) => (props.addMarginTop ? '16px' : '0')};
  padding: 8px;
  color: #ffffff;
  text-align: center;
  font-family: Open Sans;
  border-radius: 10px;
  font-size: 14px;
`
export { Button }
