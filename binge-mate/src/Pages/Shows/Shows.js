import { React, useEffect, useState } from 'react'
import { Button, createTheme, TextField, ThemeProvider } from '@mui/material';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import './Shows.css';
import SingleContent from '../../components/SingleContent/SingleContent';

const Shows = () => {
    const [showResults, setShowResults] = useState(false)
    const [searchText, setSearchText] = useState("");
    const [content, setContent] = useState();
    const [selection, setSelection] = useState();

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    useEffect(() => {
        setContent((prev) => []);
    }, [showResults === true]);

    const fetchSearch = async () => {
        setShowResults(false)
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`)
        setContent(data.results);
    };

    const findRecommendations = async (name, id) => {
        setShowResults(true);
        setSelection(name);
        const { data } = await axios.get(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
        setContent(data.results);
    };

    return (
        <div>
            <h1 className="sectionName">TV Show Recommendation Tool</h1>
            <ThemeProvider theme={darkTheme}>
                <div className="search">
                    <TextField
                        style={{ flex: 1 }}
                        className="searchBox"
                        label="Search"
                        variant="filled"
                        value={searchText}
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
                {!showResults && content && content.map((c) => (
                    <div className="showName" onClick={() => findRecommendations(c.name, c.id)}>{c.name}</div>
                ))}
            </div>
            {showResults && <h2 className="subheading">Recommendations for <span class="selected">{selection}</span></h2>}
            <div className="recommendations">
                {
                    showResults && content && content.map((c) => (
                        <SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.name} date={c.first_air_date} media_type={"tv"} vote_average={c.vote_average} />
                    ))
                }
            </div>
        </div>
    )
}

export default Shows