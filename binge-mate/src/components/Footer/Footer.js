import React from 'react'
import gitPic from '../../Image/github.png';
import amazon from '../../Image/amazon.JPG';
import disney from '../../Image/disney.JPG';
import netflix from '../../Image/netflix.JPG';

const Footer = () => {
  return (
    <div id="footer">
          <div id="lower">
            <div id="credit">
              <h2 id="listCreator">Creators</h2>
              <div id = "underline"></div>
              <p id="pranet"><a className="footerLinkedin" href="https://www.linkedin.com/in/pranetallu/" target="_blank" alt="">Pranet Allu</a></p>
              {/*<SocialIcon url="https://linkedin.com/in/jaketrent" />*/}
              <p id="mike"><a className="footerLinkedin" href="https://www.linkedin.com/in/mikepangas/" target="_blank" alt="">Michael Pangas</a></p>
            </div>
            <div id="OTT">
              <a href="https://www.amazon.com/amazonprime"><img className="logo" src={amazon} width="70px" height="50px" alt=""></img></a>
              <a href="https://www.netflix.com/login"><img className="logo" src={netflix} width="70px" height="50px" alt=""></img></a>
              <a href="https://www.disneyplus.com/login"><img className="logo" src={disney} width="70px" height="50px" alt=""></img></a>
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