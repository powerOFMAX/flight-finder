import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Logo } from './components/Logo'

const Wrapper = styled.div`
  text-align: center;
  color: #ffb33e;
  h2 {
    border-bottom: 1px solid #e0dcd5;
    padding-bottom: 20px;
  }
`

export const FlightLogo = ({ subtitle }) => {
  if (!subtitle) return <Logo />

  return (
    <Wrapper>
      <Logo />
      <h2>{subtitle}</h2>
    </Wrapper>
  )
}

FlightLogo.propTypes = {
  subtitle: PropTypes.string
}

export default FlightLogo
