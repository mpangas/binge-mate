import React from 'react'
import rrr from '../../Image/rrrlogo.JPG';
import jack from '../../Image/tyvshowlogo.JPG';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    return (
        <div id="body">
            <div id="body1">
                <h1 id="description">
                    Where <span className="emphasis">Streaming</span> Meets <span className="emphasis">Matchmaking</span>
                </h1>
                <p id="sub"> Find more movies and shows just like the ones you can't get enough of. </p>
                <p id="sub"> Use the navigation bar to choose the type of media to find recommendations for. </p>
            </div>
            <div id="everything">
                <div id="images">
                    <div id="image1">
                        <img src={rrr} id="rrrP" alt=""></img>
                        <br></br>
                    </div>
                    <div id="image2">
                        <img src={jack} id="jackP" alt=""></img>
                        <br></br>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main