// @flow
import * as React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header'
import { Container } from './styledComponents'

import { rhythm, scale } from '../utils/typography'

type TemplateProps = {
  location: Object,
  children: Function,
}

class Template extends React.Component<TemplateProps> {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Header big={location.pathname === rootPath} />
        {children()}
      </Container>
    )
  }
}

export default Template
