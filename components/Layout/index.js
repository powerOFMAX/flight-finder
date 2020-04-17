import React from 'react'
import PropTypes from 'prop-types'
import Logo from '../Logo'

const Layout = ({ content, subtitle }) => (
  <>
    <Logo subtitle={subtitle} />
    {content}
  </>
)

Layout.propTypes = {
  content: PropTypes.any,
  subtitle: PropTypes.string
}

export default Layout
