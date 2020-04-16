/* eslint-disable */
import App from 'next/app'
import React from 'react'
import Head from 'next/head'
import GlobalStyles from '../config/globalStyles'
import FlightContext from '../components/context'
import { ThemeProvider } from 'styled-components'
import { theme } from '../config/theme'

class MyApp extends App {
  state = {
    origin: {},
    destination: {}
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  updateContext = ({origin, destination}) => {
    this.setState({...this.state, origin, destination})
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Head>
            <title>Flight Finder</title>
          </Head>
          <FlightContext.Provider value={{ origin: this.state.origin, destination: this.state.destination, update: this.updateContext}}>
            <Component {...pageProps} /> 
          </FlightContext.Provider>
        </ThemeProvider>
      </>
    )
  }
}

export default MyApp
