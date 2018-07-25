import styled, { css } from 'react-emotion'
import { scale, rhythm } from '../../utils/typography'

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

export const linkStyle = css`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`
