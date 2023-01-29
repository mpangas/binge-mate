import React from 'react'
import gitPic from '../../Image/github.png';
import amazon from '../../Image/amazon.JPG';
import disney from '../../Image/disney.JPG';
import netflix from '../../Image/netflix.JPG';

const Footer = () => {
  return (
    <div id="footer">
          <p id="quote"><em>"A good movie makes the audience feel like they've
          journeyed with the characters"</em></p>
          <p id="author">- Rich Moore</p>
          <div id="lower">
            <div id="credit">
              <h2 id="listCreator">Creators</h2>
              <div id = "underline"></div>
              <p id="pranet">Pranet Allu</p>
              {/*<SocialIcon url="https://linkedin.com/in/jaketrent" />*/}
              <p id="mike">Mike Pangas</p>
            </div>
            <div id="OTT">
              <img className="logo" src={amazon} width="70px" height="50px" alt=""></img>
              <img className="logo" src={netflix} width="70px" height="50px" alt=""></img>
              <img className="logo" src={disney} width="70px" height="50px" alt=""></img>
            </div>
            <div id="final">
              <a href="https://github.com/mpangas/binge-mate"><img src={gitPic} id="gitP" align="right" alt=""></img></a>
              {/*<p id="copy">Copyright© 2023 BingeMate. All Rights Reserved</p>*/}
            </div>
          </div>
      </div>
  )
}

export default Footer