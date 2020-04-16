import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper } from './components/styled'
import { Card } from './components/Card'

const AirportCard = ({ routes, location, onClick, option }) => (
  <Wrapper>
    {routes.map((item, i) => {
      const key = `_${Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)}`

      return (
        <Card
          isSelected={location.code === item.code}
          hasLocation={Object.keys(location).length}
          key={key}
          onClick={() => onClick({ [option]: item })}
          code={item.code}
          description={item.description}
          location={item.location}
          countryCode={item.countryCode}
          index={i}
        />
      )
    })}
  </Wrapper>
)

AirportCard.propTypes = {
  routes: PropTypes.array,
  location: PropTypes.object,
  onClick: PropTypes.func,
  option: PropTypes.string
}

export default AirportCard
