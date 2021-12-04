import styled from 'styled-components'

export const Button = styled.button`
  align-self: center;
  background-color: #BF9775;
  border-radius: 10px;
  box-shadow: 4px 6px 0px #A69992;
  color: #272626;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 16px;
  width: 150px;

  &:active {
    background-color: #D9D9D9;
    box-shadow: 2px 2px 0px #BF9775 inset;
  }
  @media screen and (min-width: 1280px) {
    grid-column-start: span 2;
    justify-self: center;
    width: 200px;
    font-size: 2.25rem;
  }
`
