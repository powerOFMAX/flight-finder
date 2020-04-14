import React from 'react'
import styled from 'styled-components'

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffb33e;
  border-bottom: 1px solid #e0dcd5;
  padding-bottom: 20px;

  h1 {
    font-size: 40px;
    text-shadow: #00000054 1px 1px;
  }

  img {
    height: 100px;
    padding-right: 30px;
  }
`

export const Logo = () => (
  <LogoWrapper>
    <img src='https://image.flaticon.com/icons/svg/469/469347.svg' alt='Logo' />
    <h1>Flight Finder</h1>
  </LogoWrapper>
)

export default Logo
