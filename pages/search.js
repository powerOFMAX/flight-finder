import React, { useState } from 'react'
import Link from 'next/link'
import { routes } from '../routes.json'
import { Wrapper } from '../components/Flights'
import { FlightLogo } from '../components/Logo'
import AirportCards from '../components/AirportCards'

/* Here should be a card approach list of all available origin
airports. When an origin airport is selected, the list should
display all available destination for given selection. The card
should have:

A dummy image
Should be selectable by clicking the whole card
Display the airport code
Display the location city name
*/

/**
 * URL used to get random Images
 * https://picsum.photos/
 */
export default function Search() {
  const [state, setState] = useState({
    origin: {},
    destination: {}
  })

  const onSelectCard = (card) => {
    const option = Object.keys(card)[0]

    setState({
      ...state,
      destination: option === 'origin' && {},
      [option]: (card[option].code !== state[option].code) ? card[option] : {}
    })
  }

  return (
    <main>
      <article>
        <Wrapper>
          <FlightLogo subtitle='Select an airport' />
          <section>
            <AirportCards
              routes={routes}
              location={state.origin}
              onClick={(value) => onSelectCard(value)}
              option='origin'
            />
          </section>
          <section>
            <div className='destination-wrapper'>
              <h2>Select a destination</h2>
            </div>
          </section>
          <section>
            {Object.keys(state.origin).length > 0
            && (
            <AirportCards
              routes={state.origin.destinations}
              location={state.destination}
              onClick={(value) => onSelectCard(value)}
              option='destination'
            />
            )}
          </section>
          <Link href='/flights'>
            <button type='button'>Start your journey!</button>
          </Link>
        </Wrapper>
      </article>
    </main>
  )
}
