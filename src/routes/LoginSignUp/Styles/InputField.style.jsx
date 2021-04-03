import styled from 'styled-components'

// FormMain
const FormMain = styled.form`
  margin: auto;
`

// Form Group
const FormGroup = styled.div`
  margin: 20px 0;
  width: ${(props) => (props.password ? '45%' : '100%')};
`
const TextInput = styled.input`
  background: #f6f6f6;
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 10px;
  border-radius: 7px;
  color: #686868;
  border: none;
  font-size: 14px;

  margin: auto;
  font-family: Open Sans;
  &:focus {
    outline: none;
  }
`
const PasswordInput = styled.input`
  background: #f6f6f6;
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 10px;
  border-radius: 7px;
  color: #686868;
  border: none;
  width: 100%;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`
// Checkbox
const CheckboxText = styled.span`
  color: #868686;
  font-family: Open Sans;
  font-weight: 400;
  font-size: 12px;
`

// h1 style
const HeaderText = styled.h1`
  color: #272727;
`
// Form Label
const FormLabel = styled.div`
  font-size: 13px;
  color: #3d3d3d;
  font-weight: 700;
  margin-bottom: 8px;
  margin-left: 2px;
`

export {
  TextInput,
  HeaderText,
  FormLabel,
  FormGroup,
  PasswordInput,
  FormMain,
  CheckboxText,
}
