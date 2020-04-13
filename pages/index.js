import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <article>
        <section>
          <h2>Promotions</h2>
        </section>
        <section>
          <Link href="/search">
            <a>Search</a>
          </Link>
        </section>
      </article>
    </main>
  );
}
