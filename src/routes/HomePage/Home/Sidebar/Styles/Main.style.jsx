import styled from 'styled-components'
export const Sidebar = styled.div`
  background: white;
  height: 100vh;
  position: fixed;
  z-index: 1;
`
export const Container = styled.div`
  padding: 0 25px;
`
export const Logo = styled.h2`
  font-weight: 700;
  color: #a872ff;
  width: 100%;

  text-align: center;
  padding: 4rem 0;
`
export const SmallBoldText = styled.h6`
  color: #37497b;
  font-weight: 700;
  font-size: 13px;
`
export const NavlinksWrapper = styled.div`
  padding: 1rem 0;
  width: 100%;
  margin-top: 1.8rem;
`
export const NavLinksStyle = styled.div`
  padding: 20px 40px;
  font-weight: bold;
  font-size: 14px;
  color: ${(props) => (props.active ? '#152b65' : '#9EB1DF')};
  box-shadow: ${(props) => props.active && `rgba(0, 0, 0, 0.04) 0px 3px 5px;`};
  cursor: pointer;
  transition-duration: 0.2s;
  &:hover {
    background: #f5f5f5;
    transition-duration: 0.2s;
  }
`
export const IconStyle = styled.span`
  color: ${(props) => (props.active ? '#a872ff' : '#9EB1DF')};
  margin-right: 12px;
  font-size: 18px;
`

export const SmallMutedText = styled.div`
  color: #b3b3b3;
  font-weight: 600;
  font-size: 13px;
`
export const CircleDiv = styled.div`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background: tomato;
`
export const LogOutButton = styled.button`
  margin-top: 1rem;
  background: #a872ff;
  padding: 4px 0;
  color: white;
  border: 1px solid #a872ff;
  border-radius: 10px;
  transition-duration: 0.3s;
  font-size: 14px;
  &:hover {
    background: #c29bff;

    transition-duration: 0.3s;
  }
`
