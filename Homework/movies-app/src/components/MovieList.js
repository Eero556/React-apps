import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import MovieListItem from './MovieListItem';
function MovieList() {
  const [movies, setMovies] = useState([])

  const getData = async () => {
    const { data } = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=79f98bb449c9a0eb366576882d49539b&append_to_response=videos');
    setMovies(data.results);
  };

  useEffect(() => {
    getData();
  }, []);







  return (
    <div>
      <input placeholder='Search' type="text" ></input>
      {movies.map((movie) => <MovieListItem key={movie.id} movie={movie} />)}
    </div>
  )
}

export default MovieList