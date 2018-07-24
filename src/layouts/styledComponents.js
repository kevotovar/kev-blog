// @flow
import styled, { css } from 'react-emotion'
import { rhythm, scale } from '../utils/typography'

export const RootHeader = styled.h1({
  ...scale(1.5),
  marginBottom: rhythm(1.5),
  marginTop: 0,
})

export const ChildHeader = styled.h3({
  fontFamily: 'Montserrat, sans-serif',
  marginTop: 0,
  marginBottom: rhythm(-1),
})

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

export const linkStyle = css`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`
