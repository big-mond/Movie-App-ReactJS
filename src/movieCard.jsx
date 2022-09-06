import React from 'react';

const API_IMG="https://image.tmdb.org/t/p/w500/";

const MovieCard = ({poster_path, overview, release_date, genre_ids, id, original_title, 
                    original_language, title, backdrop_path, popularity, vote_count, vote_average}) => {
    return (
      <div className="movie">
        <div>
          <p>{vote_average}</p>
        </div>
  
        <div>
          {/*If API doesn't provide image, uses placeholder image instead.*/}
          <img src={API_IMG+poster_path !== "N/A" ? API_IMG+poster_path : "http://via.placeholder.com/400" } 
          alt={title}/> 
        </div> 
        
        <div>
          <span>{title}</span>
          <h3>{}</h3>
        </div>
      </div>
    );
}

export default MovieCard;