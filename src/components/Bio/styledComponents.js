import styled from 'react-emotion'
import { rhythm } from '../../utils/typography'

export const BioContainer = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2.5)};
`

export const ProfileImage = styled.img`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: ${0};
  width: ${rhythm(2)};
  height: ${rhythm(2)};
  border-radius: 50%;
`
