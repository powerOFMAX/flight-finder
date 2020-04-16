import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  const renderContent = () => (
    <main>
      <article>
        <section>
          <Link href='/search'>
            <button type='button'>Search</button>
          </Link>
        </section>
      </article>
    </main>
  )
  return (
    <Layout content={renderContent()} subtitle='Find your perfect flight!' />
  )
}
