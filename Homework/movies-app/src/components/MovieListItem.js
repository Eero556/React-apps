import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Modalmodel from './Modal';

function MovieListItem(props) {

    const [movie, setMovie] = useState([])
    // id from array
    const id = props.movie.id
    



    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=79f98bb449c9a0eb366576882d49539b&append_to_response=videos');
            setMovie(data);
            console.log(data)
        };
        getData();
    }, []);

    // get image/poster
    let IMAGEPATH = 'http://image.tmdb.org/t/p/w500'
    let imageurl = IMAGEPATH + props.movie.poster_path;

    // get genre
    var genres = "";
    if (movie !== undefined && movie.genres !== undefined) {
        for (var i = 0; i < movie.genres.length; i++) {
            genres += movie.genres[i].name + " ";
        }
    }
    




    return (
        <div className="Movie">
            
            <img src={imageurl} alt="imageurl" />
            <p className="MovieTitle">{props.movie.original_title} : {props.movie.release_date}</p>
            <p className="MovieText">{props.movie.overview}</p>
            <span className="GenresText">Genres: {genres}</span><br />
            <div><Modalmodel jotain={"ee"}/></div>
            
        </div>
    )
}

export default MovieListItem