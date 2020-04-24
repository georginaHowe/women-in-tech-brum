import React from 'react'

import logo from '../img/logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import slack from '../img/social/slack.svg'
import meetup from '../img/social/meetup.svg'

const PlaceholderPage = class extends React.Component {
  render() {
    return (
      <div className="placeholder-page">
        <div className="content has-text-centered logo">
          <img
            src={logo}
            alt="Women In Tech Birmingham"
          />
        </div>
        <div className="content has-text-centered">
          <div className="container socials">
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
                <a title="slack" href="https://join.slack.com/t/womenintech-meetup/shared_invite/zt-5xn8mjeq-SOHOGWEv2Gvq5NYDkN~nrw">
                  <img
                    src={slack}
                    alt="Slack"
                    style={{ width: '5em', height: '5em' }}
                  />
                </a>
                <a title="meetup" href="https://www.meetup.com/Women-In-Tech-Birmingham/">
                  <img
                    src={meetup}
                    alt="Meetup"
                    style={{ width: '3.5em', height: '3.5em', margin: '0.8em' }}
                  />
                </a>
          </div>
        </div>
      </div>
    )
  }
}

export default PlaceholderPage
