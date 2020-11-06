import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Movies from './components/Movies/Movies';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  const API_KEY = 'c3ed94545b381cd59ee060f8d40ebc54';
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const POPULAR_API = `${BASE_URL}movie/popular?api_key=${API_KEY}`;
  const IMG_API = "https://image.tmdb.org/t/p/w500";

  const fetchData = async api => {
    const movieResponse = await fetch(api);
    const movieData = await movieResponse.json();

    setMovies(movieData.results);
  };

  useEffect(() => {
    fetchData(POPULAR_API); 
  }, []);

  return (
    <div className='App'>
      <Navbar fetchData={fetchData} POPULAR_API={POPULAR_API} BASE_URL={BASE_URL} API_KEY={API_KEY} />
      <Movies movies={movies} IMG_API={IMG_API} />
      <footer>
        <p>Powered By <a href='https://www.themoviedb.org' rel='noreferrer' target='_blank'><img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' alt='tmdb' /></a> | &copy; 2020 by <a href='https://msun0320.github.io/portfolio-website' rel='noreferrer' target='_blank'>Mingyue Sun</a></p>
      </footer>
    </div>
  );
};

export default App;
