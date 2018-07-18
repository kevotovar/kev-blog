import React from 'react'
import Link from 'gatsby-link'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Soy un desarollador de la CDMX, me enfoco en React y Django.
          Actualmente me encuentro trabajando en <a href="http://www.apli.jobs/" target="blank">Apli</a>,
          el Uber de los empleos 🤩 en México.
          <br/>
          <a href="https://twitter.com/kevinwestmx" target="blank">
            Sigueme en twitter.
          </a>
          Comparto muy seguido tips de programación de React.
        </p>
      </div>
    )
  }
}

export default Bio
