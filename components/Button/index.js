import styled from 'styled-components'

export const Button = styled.button`
  font-weight: bolder;
  color: white;
  background-color: ${(props) => props.theme.colors.yellowOrange};
  border-radius: 30px;
  width: 150px;
  height: 40px;
  border: none;
  font-size: 16px;
  outline: none;
  &:hover, &:active {
    outline: none;
    box-shadow: 0 0px 10px ${(props) => props.theme.colors.buttercup};
  }
`
