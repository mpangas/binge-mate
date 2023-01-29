import { React, useState, useEffect } from 'react'
import { Button, createTheme, TextField, ThemeProvider } from '@mui/material';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';

const Movies = (props) => {
    const [searchText, setSearchText] = useState("");
    const [content, setContent] = useState();

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    const fetchSearch = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/${props.type}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`)
        setContent(data.results);
    };

    return (
        <div>
            <h1 className="sectionName">{props.type === "movie" ? "Movie" : "TV Show"} Recommendation Tool</h1>
            <ThemeProvider theme={darkTheme}>
                <div className="search">
                    <TextField
                        style={{ flex: 1 }}
                        className="searchBox"
                        label="Search"
                        variant="filled"
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                fetchSearch();
                            }
                        }}
                    />
                    <Button
                        onClick={fetchSearch}
                        variant="contained"
                        style={{ marginLeft: 10 }}
                    >
                        <SearchIcon fontSize="large" />
                    </Button>
                </div>
            </ThemeProvider>
            <div className="output">
                {content && content.map((c) => (
                    <div className="movieName">{c.title}</div>
                ))}
            </div>
        </div>
    )
}

export default Movies