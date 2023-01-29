import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './Pages/Main/Main';
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom"
import { Container } from '@mui/material';
import Movies from './Pages/Movies/Movies';
import Shows from './Pages/Shows/Shows';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="app">
                <Container>
                    <Routes>
                        <Route path="/" element={<Main />} exact />
                        <Route path="/movies" element={<Movies />} />
                        <Route path="/shows" element={<Shows />} />
                    </Routes>
                </Container>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
