import React from 'react'
import Link from 'gatsby-link'

import { BioContainer, ProfileImage } from './styledComponents'

import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <BioContainer>
        <ProfileImage src={profilePic} alt="Kevin Tovar" />
        <p>
          Soy un desarollador de la CDMX, me enfoco en React y Django.
          Actualmente me encuentro trabajando en{' '}
          <a href="http://www.apli.jobs/" target="blank">
            Apli
          </a>, el Uber de los empleos 🤩 en México.{' '}
          <a href="https://twitter.com/kevinwestmx" target="blank">
            Sigueme en twitter.
          </a>{' '}
          Comparto muy seguido tips de programación de React.
        </p>
      </BioContainer>
    )
  }
}

export default Bio
