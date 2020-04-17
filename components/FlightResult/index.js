import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NoResults from './components/NoResults'
import Flight from './components/Flight'
import { getFlights } from '../../utils'

const FlightResult = ({ originCode, destinationCode, selectedId, cityName, type, onClick }) => {
  const flights = getFlights(originCode, destinationCode)
  return (
    <Wrapper>
      {flights.length ? (
        <>
          <h2 className='title'>{`Choose your ${type} flight to ${cityName}`}</h2>
          <div className='flights-wrapper'>
            {flights.map((item) => (
              <Flight
                onClick={() => onClick(item, type)}
                key={item.id}
                isSelected={selectedId === item.id}
                origin={item.origin}
                destination={item.destination}
                departureDate={item.departureDate}
                arrivalDate={item.arrivalDate}
                flightNo={item.flightNo}
                fares={item.fares[0]}
              />
            ))}
          </div>
        </>
      )
        : <NoResults />}
    </Wrapper>
  )
}

FlightResult.propTypes = {
  originCode: PropTypes.string,
  destinationCode: PropTypes.string,
  cityName: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  selectedId: PropTypes.string
}


const Wrapper = styled.div`
  .flights-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    color: ${(props) => props.theme.colors.yellowOrange};
    border-bottom: 1px solid #e0dcd5;
    padding-bottom: 20px;
    text-align: center;
  }
`

export default FlightResult
