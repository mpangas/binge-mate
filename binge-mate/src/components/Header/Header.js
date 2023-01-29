import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if(value === 0)
            navigate("/");
        else if(value === 1)
            navigate("/movies");
        else if(value === 2)
            navigate("/shows");
    }, [value, navigate])

    return (
        <div id="header">
            <h2 id="logoText" onClick={() => {setValue(0)}}>BingeMate</h2>
            <div id="navButtons">
                <button className="navButton" onClick={() => {setValue(1)}}>Movies</button>
                <button className="navButton" onClick={() => {setValue(2)}}>TV Shows</button>
            </div>
        </div>
    )
}

export default Header