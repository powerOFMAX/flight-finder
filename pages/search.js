import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { Element, scroller } from 'react-scroll'
import { routes } from '../routes.json'
import { Wrapper } from '../components/Search'
import AirportCards from '../components/AirportCards'
import Layout from '../components/Layout'
import FlightsContext from '../components/context'

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

  const { update } = useContext(FlightsContext)

  const onSelectCard = (card) => {
    const option = Object.keys(card)[0]

    setState({
      ...state,
      destination: option === 'origin' && {},
      [option]: (card[option].code !== state[option].code) ? card[option] : {}
    })
  }

  function scrollTo(element) {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: 0
    })
  }

  const renderContent = () => (
    <main>
      <article>
        <Wrapper>
          <section>
            <AirportCards
              routes={routes}
              location={state.origin}
              onClick={(value) => onSelectCard(value)}
              option='origin'
            />
          </section>
          <section>
            <Element name='destination' />
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
          <Element name='search' />
          <Link href='/flights'>
            <button type='button' onClick={() => update(state)}>Start your journey!</button>
          </Link>
        </Wrapper>
        {Object.keys(state.origin).length > 0 && scrollTo('destination')}
        {Object.keys(state.destination).length > 0 && scrollTo('search')}
      </article>
    </main>
  )
  return (
    <Layout content={renderContent()} subtitle='Select an airport' />
  )
}
