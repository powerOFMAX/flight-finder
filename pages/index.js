import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { Button } from '../components/Button'

export default function Home() {
  const renderContent = () => (
    <main>
      <article>
        <section className='text-center'>
          <Link href='/search'>
            <Button type='button'>Search</Button>
          </Link>
        </section>
      </article>
    </main>
  )
  return (
    <Layout content={renderContent()} subtitle='Find your perfect flight!' />
  )
}
