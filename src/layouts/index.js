import React from 'react'
import Link from 'gatsby-link'

import {
  RootHeader,
  ChildHeader,
  Container,
  linkStyle,
} from './styledComponents'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <RootHeader>
          <Link className={linkStyle} to={'/'}>
            Kevin Tovar
          </Link>
        </RootHeader>
      )
    } else {
      header = (
        <ChildHeader>
          <Link className={linkStyle} to={'/'}>
            Kevin Tovar
          </Link>
        </ChildHeader>
      )
    }
    return (
      <Container>
        {header}
        {children()}
      </Container>
    )
  }
}

export default Template
