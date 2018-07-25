// @flow
import styled, { css } from 'react-emotion'
import { rhythm, scale } from '../utils/typography'

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  height: 100%;
`
