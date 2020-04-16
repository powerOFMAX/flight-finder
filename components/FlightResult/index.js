import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NoResults from './components/NoResults'

const FlightResult = ({ flights }) => (
  <Wrapper>
    {flights.length ? ''
      : <NoResults />}
  </Wrapper>
)

FlightResult.propTypes = {

}


const Wrapper = styled.div`

`

export default FlightResult
