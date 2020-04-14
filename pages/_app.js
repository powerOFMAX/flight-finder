import App from 'next/app'
import React from 'react'
import Head from 'next/head'
import GlobalStyles from '../config/globalStyles'
/* eslint-disable */

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <GlobalStyles />
        <Head>
          <title>Flight Finder</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
