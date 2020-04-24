import React from 'react'

import logo from '../img/logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

const PlaceholderPage = class extends React.Component {
  render() {
    return (
      <div className="">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Women In Tech Birmingham"
            style={{ width: '23em', height: '25em' }}
          />
        </div>
        <div className="content has-text-centered">
          <div className="container">
                <a title="facebook" href="https://www.facebook.com/womenintechbirmingham/">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '3em', height: '3em', margin: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/WomenInTechBrum">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '3em', height: '3em', margin: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/womenintechbirmingham/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '3em', height: '3em', margin: '1em' }}
                  />
                </a>
          </div>
        </div>
      </div>
    )
  }
}

export default PlaceholderPage
