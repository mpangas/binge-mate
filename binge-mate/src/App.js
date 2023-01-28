import logo from './logo.svg';
import rrr from './Image/rrrlogo.JPG';
import jack from './Image/tyvshowlogo.JPG';
import Button from '@mui/material/Button';
import gitPic from './Image/github.png';
import amazon from './Image/amazon.JPG';
import disney from './Image/disney.JPG';
import netflix from './Image/netflix.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="header"> 
         <h2 id="logoText">Binge-Mate</h2>
         <h1 id="title"> Movie Recommendations </h1>
         <div id = "navButton">
          <h3 id="movieHeader">Movies</h3>
          <h3 id="TVHeader">TV Shows</h3>
         </div>
      </div>

      <div id="body"> 
        <div id = "body1">
          <h1 id="description">
            Witness the New Generation of Movies <br/> 
            with a Compilation of <br/>
            Multiple Genres
          </h1>
          <p id="sub"> Get access to more wider variety of movies based on what you watched. </p>
        </div>
        <div id="images">
          <div id="image1">
            <img src={rrr} id="rrrP"></img>
            <br></br>
            <Button variant="contained" id="movieB"> Movies </Button>
          </div>
          <div id="image2">
            <img src={jack} id="jackP"></img>
            <br></br>
            <Button variant="contained" id="tvB"> TV </Button>
          </div>
        </div>
      </div>

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
              <img id="ama" src={amazon} width="70px" height="50px"></img>
              <img id="net" src={netflix} width="70px" height="50px"></img>
              <img id="dis" src={disney} width="70px" height="50px"></img>
            </div>
            <div id="final">
              <a href="https://github.com/mpangas/binge-mate"><img src={gitPic} id="gitP" align="right"></img></a>
              {/*<p id="copy">Copyright© 2023 BingeMate. All Rights Reserved</p>*/}
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
