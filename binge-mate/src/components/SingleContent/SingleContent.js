import React from 'react'
import { Badge } from '@mui/material';
import { img_300, unavailable } from '../../config/config'
import './SingleContent.css'
import axios from 'axios';

const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
    genre,
}) => {
    const [video, setVideo] = React.useState();

    const fetchVideo = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        setVideo(data.results[0]?.key);
    };
    fetchVideo();

    return (
        <div className="media">
            <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary" : "secondary"} />
            <a className="imageWrap" href={`https://www.youtube.com/watch?v=${video}`} target="_blank" alt="trailer"><img className="poster" src={poster ? `${img_300}/${poster}` : unavailable} alt={title} /></a>
            <b className="title">{title}</b>
            <span className="subtitle">
                {genre}
            </span>
            <span className="subtitle">
                {date.substring(0, 4)}
            </span>
        </div>
    )
}

export default SingleContent