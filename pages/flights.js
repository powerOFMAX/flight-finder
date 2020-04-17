import React, { useContext, useState, useEffect } from 'react'
import { Element, scroller } from 'react-scroll'
import styled from 'styled-components'
import FlightsContext from '../components/context'
import FlightResult from '../components/FlightResult'
import Layout from '../components/Layout'

const FinalPrice = styled.h2`
  color: ${(props) => props.theme.colors.bokaraGrey};
  border-top: 1px solid ${(props) => props.theme.colors.vistaWhite};
  padding: 20px 0;
`

/**
  Here it should be a flight list with all available outbound flights
  for the selected trip. Each list item should have:
    A dummy image
    Should be selectable by clicking the whole card
    Display the airport code
    Display the location city name
    Display the flight times and duration
    Display the price for the leg
 *
 */

export default function Flights() {
  const { origin, destination } = useContext(FlightsContext)
  const [state, setState] = useState({
    outbound: {},
    inbound: {}
  })

  function scrollTo(element) {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -20
    })
  }

  const onSelectCard = (item, option) => {
    setState({
      ...state,
      [option]: item
    })
  }

  useEffect(() => {
    if (Object.keys(state.outbound).length > 0) {
      return scrollTo('inbound')
    }
    if (Object.keys(state.inbound).length > 0) return scrollTo('final-price')
    return scrollTo('outbound')
  })

  const renderContent = () => (
    <main>
      <article>
        <section>
          <Element name='outbound' />
          <FlightResult
            originCode={origin.code}
            destinationCode={destination.code}
            type='outbound'
            selectedId={state.outbound && state.outbound.id}
            onClick={(item, type) => onSelectCard(item, type)}
            cityName={Object.keys(destination).length > 0 ? destination.location.cityName : ''}
          />
        </section>
      </article>
      <Element name='inbound' />
      {Object.keys(state.outbound).length > 0
        && (
        <article>
          <section>
            <FlightResult
              originCode={destination.code}
              destinationCode={origin.code}
              type='inbound'
              selectedId={state.inbound && state.inbound.id}
              onClick={(item, type) => onSelectCard(item, type)}
              cityName={Object.keys(origin).length > 0 ? origin.location.cityName : ''}
            />
          </section>
        </article>
        )}
      {Object.keys(state.outbound).length > 0 && Object.keys(state.inbound).length > 0
        && (
        <article className='text-center'>
          <FinalPrice>
            Total to pay:
            {state.inbound.fares[0].prices.afterTax + state.outbound.fares[0].prices.afterTax}
          </FinalPrice>
        </article>
        )}
      <Element name='final-price' />
    </main>
  )

  return (
    <Layout content={renderContent()} />
  )
}
