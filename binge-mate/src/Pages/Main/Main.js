import React from 'react'
import rrr from '../../Image/rrrlogo.JPG';
import jack from '../../Image/tyvshowlogo.JPG';
import Button from '@mui/material/Button';

const Main = () => {
  return (
    <div id="body"> 
        <div id = "body1">
          <h1 id="description">
            Witness the New Generation of Movies <br/> 
            with a Compilation of <br/>
            Multiple Genres
          </h1>
          <p id="sub"> Get access to more wider variety of movies based on what you watched. </p>
        </div>
        <div id="everything">
        <div id="images">
          <div id="image1">
            <img src={rrr} id="rrrP" alt=""></img>
            <br></br>
            <Button variant="contained" id="movieB"> Movies </Button>
          </div>
          <div id="image2">
            <img src={jack} id="jackP" alt=""></img>
            <br></br>
            <Button variant="contained" id="tvB"> TV </Button>
          </div>
          <div>
          </div>
        </div>
        <p id="phrase">Where <span id="streaming">STREAMING</span> meets <span id="matchmaking">MATCHMAKING</span></p>
        </div>
      </div>
  )
}

export default Main