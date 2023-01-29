import React from 'react'
import rrr from '../../Image/rrrlogo.JPG';
import jack from '../../Image/tyvshowlogo.JPG';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (value === 0)
            navigate("/");
        else if (value === 1)
            navigate("/movies");
        else if (value === 2)
            navigate("/shows");
    }, [value, navigate])

    return (
        <div id="body">
            <div id="body1">
                <h1 id="description">
                    Where <span className="emphasis">Streaming</span> Meets <span className="emphasis">Matchmaking</span>
                </h1>
                <p id="sub"> Find more movies and shows just like the ones you and can't get enough of. </p>
                <p id="sub"> Click the buttons on the left or use the navigation bar to get started. </p>
            </div>
            <div id="everything">
                <div id="images">
                    <div id="image1">
                        <img src={rrr} id="rrrP" alt=""></img>
                        <br></br>
                        <Button id="movieB" onClick={() => {setValue(1)}}> Movies </Button>
                    </div>
                    <div id="image2">
                        <img src={jack} id="jackP" alt=""></img>
                        <br></br>
                        <Button id="tvB" onClick={() => {setValue(2)}}> TV </Button>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main