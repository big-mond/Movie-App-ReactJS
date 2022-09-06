//Pull data rom API as soon as app loads
import React, { useState, useEffect } from 'react';
import './app.css';
import MovieCard from './movieCard';
import searchIcon from './searchIcon.svg';

//TMDB API 
const API_URL = 'http://api.themoviedb.org/3/movie/popular?api_key=e8bdff352d6337a321dd40e176a9926e';
//const API_SEARCH="http://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query";
//const API_KEY = '{process.env.REACT_APP_TMDB}';
const API_KEY='e8bdff352d6337a321dd40e176a9926e'

//App Settings
function App () {

  //Search Bar
  const [query, setQuery] = useState('');
  //Movie Catalog
  const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
        })
    }, []);

    //Function to fetch movies    
    const searchMovies = async(e) => {
      e.preventDefault();
      console.log("Searching");
      try{
        const url=`http://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setMovies(data.results);
        }
        catch(e){
          console.log(e);
        }
    }
    
    const changeHandler=(e) => {
      setQuery(e.target.value);
    }
    
    return (
        <div className="app" >
          <h1>Filmography</h1>  
          
          <div className="search">
            <input
              type="text"
              placeholder="Search"  
              value={query}
              onChange={changeHandler}
            />
            <img
              src={searchIcon}
              alt="search"
              onClick={searchMovies}
            />
          </div>  
          
          {/*If movie length is greater than 0, show movie card*/}
          {movies?.length > 0 ? (
              <div className="container">
                <div className="grid">
                {movies.map((movie) => 
                  <MovieCard key={movie.id} {...movie} />
                )}
                </div>
              </div>
            ) : (
              /* If its not, show No Movies Found */
              <div className="empty">
                <h2>No Movies Found</h2>
              </div>
            )
          }
          
          {/*TMDb attribution*/}
          This product uses the TMDB API but is not endorsed or certified by TMDB. 
        </div>
    );
}

export default App;