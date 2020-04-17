import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, Chevron, Location, Price, Duration } from './components/styled'
import { parseDate, getDuration } from '../../../../utils'

const Flight = (
  { isSelected, origin, destination, departureDate, arrivalDate, flightNo, fares, onClick }
) => (
  <Wrapper isSelected={isSelected} onClick={onClick}>
    <div className='location-wrapper'>
      <Location>
        <p className='location-name'>{origin}</p>
        <p className='date'>{parseDate(departureDate)}</p>
      </Location>
      <Chevron />
      <Location>
        <p className='location-name'>{destination}</p>
        <p className='date'>{parseDate(arrivalDate)}</p>
      </Location>
    </div>

    <div>
      <Duration>
        <strong>
          {`Duration: ${getDuration(departureDate, arrivalDate)}`}
        </strong>
        <strong>
          {`Flight Number: ${flightNo}`}
        </strong>
      </Duration>

      <Price className='price'>
        <p>Total you&apos;ll pay</p>
        <strong>{`$ ${fares.prices.afterTax}`}</strong>
      </Price>
    </div>
  </Wrapper>
)

Flight.propTypes = {
  origin: PropTypes.string,
  destination: PropTypes.string,
  departureDate: PropTypes.string,
  arrivalDate: PropTypes.string,
  flightNo: PropTypes.number,
  fares: PropTypes.object,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
}

export default Flight
