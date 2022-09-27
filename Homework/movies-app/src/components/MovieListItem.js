import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import YouTube from 'react-youtube';
import Modal from "react-modal"
function MovieListItem(props) {

    const [movie, setMovie] = useState([])
    const [trailer, setTrailer] = useState("")
    // id from array
    const id = props.movie.id




    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=79f98bb449c9a0eb366576882d49539b&append_to_response=videos');
            setMovie(data);
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



    const videoPressed = (key) => {
        console.log(key)
        setTrailer(key)
        setIsOpen(true)

    }


    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };



    // get first youtube video
    var video = "";
    if (movie !== undefined && movie.videos !== undefined && movie.videos.results !== undefined) {
        video = <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => videoPressed(movie.videos.results[0].key)}>{movie.videos.results[0].name}</span>
    }


    const [modalIsOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <div className="Movie">
            <img src={imageurl} alt="imageurl" />
            <p className="MovieTitle">{props.movie.original_title} : {props.movie.release_date}</p>
            <p className="MovieText">{props.movie.overview}</p>
            <span className="GenresText">Genres: {genres}</span><br />
            <span className="VideosText">Video: {video}</span>
            <div>
                <Modal
                    ariaHideApp={false}
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                >
                    <button onClick={closeModal}>close</button>
                    <div>
                        <YouTube videoId={trailer} opts={opts} />
                    </div>
                </Modal >
            </div>
        </div>
    )
}

export default MovieListItem