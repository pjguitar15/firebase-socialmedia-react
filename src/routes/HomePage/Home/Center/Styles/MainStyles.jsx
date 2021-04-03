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
