// @flow
import React from 'react'
import Link from 'gatsby-link'

import { RootHeader, ChildHeader, linkStyle } from './styledComponents'

type HeaderProps = {
  big: boolean,
}

const Header = ({ big = false }: HeaderProps) =>
  big ? (
    <RootHeader>
      <Link className={linkStyle} to={'/'}>
        Kevin Tovar
      </Link>
    </RootHeader>
  ) : (
    <ChildHeader>
      <Link className={linkStyle} to={'/'}>
        Kevin Tovar
      </Link>
    </ChildHeader>
  )

export default Header
