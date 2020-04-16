import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './components/styled'

export const Card = ({ code, description, location, countryCode, isSelected, hasLocation, index, onClick }) => (
  <Wrapper isSelected={isSelected} hasLocation={hasLocation} onClick={() => onClick()}>
    <div className='image-wrapper'>
      <img src={`https://picsum.photos/200/250?random=${index}`} alt='location' />
    </div>
    <div className='description-wrapper'>
      <strong className='code'>{code}</strong>
      <p>{description}</p>
      <p>{`${location.cityName}, ${countryCode}`}</p>
    </div>
  </Wrapper>
)

Card.propTypes = {
  code: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.object,
  countryCode: PropTypes.string,
  isSelected: PropTypes.bool,
  hasLocation: PropTypes.number,
  index: PropTypes.number,
  onClick: PropTypes.func
}
export default Card
