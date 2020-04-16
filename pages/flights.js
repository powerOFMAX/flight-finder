import React from 'react'
import { useContext } from 'react'
import FlightsContext from '../components/context'
import { getFlights } from '../utils'
import FlightResult from '../components/FlightResult'
import Layout from '../components/Layout'

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
  const flights = getFlights(origin.code, destination.code)
  // console.log(getFlights('EPA', 'COR'))

  const renderContent = () => {
    return (
      <main>
        <article>
          <h2>Choose your outbound flight to Mendoza</h2>
          <section>
            <FlightResult
              flights={flights}
            />
          </section>
        </article>
        <article>
          <h2>Choose your inbound flight to Buenos Aires</h2>
          <section>
            <p>
              Here it should be a flight list with all available inbound flights
              for the selected trip.
            </p>
            <ul>
              <li>A dummy image</li>
              <li>Should be selectable by clicking the whole card</li>
              <li>Display the airport code</li>
              <li>Display the location city name</li>
              <li>Display the flight times and duration</li>
              <li>Display the price for the leg</li>
            </ul>
          </section>
        </article>
      </main>
    )
  }

  return (
    <Layout content={renderContent()} subtitle={'Choose your outbound flight to Mendoza'}/>
  )
}
