import styled from 'styled-components'

export const CenterWrapper = styled.div`
  padding: 2rem;
`
export const FeedFilterStyle = styled.h6`
  color: ${({ active }) => (active ? '#A872FF;' : '#a4b6e1;')};
  font-size: 14px;
  padding: 0 1rem;
  cursor: pointer;
  font-weight: ${({ active }) => active && '800'};
`
export const ImageStyle = styled.img`
  width: 100%;
  border: solid 3px #f7f7f7;
  border-radius: 10px;
`
export const IconsStyle = styled.i`
  font-size: 20px;
  margin: 3px 12px;
  color: #a4b6e1;
`
