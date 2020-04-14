import React from 'react'
import Link from 'next/link'
import { FlightLogo } from '../components/Logo'

export default function Home() {
  return (
    <main>
      <article>
        <FlightLogo subtitle='Find your perfect flight!' />
        <section>
          <Link href='/search'>
            <button type='button'>Search</button>
          </Link>
        </section>
      </article>
    </main>
  )
}
