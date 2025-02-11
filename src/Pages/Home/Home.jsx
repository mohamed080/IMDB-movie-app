import React, { useEffect, useState } from 'react'
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
const Home = () => {
    const [popularMovies, setPopularMovies] = useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])
    return (
        <div>
            <div className="poster">
                <Carousel 
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{color: "white"}} to={`/movie/${movie.id}`} >
                                <div className="poster-img">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}alt=""/>
                                </div>
                                <div className="poster-img-overlay">
                                    <div className="poster-img-title">{movie ? movie.original_title : ""}</div>
                                    <div className="poster-img-runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="poster-img-rating">
                                            {movie ? movie.vote_average : ""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="poster-img-desc">
                                        {movie ? movie.overview : ""}
                                    </div>
                                </div>
                            </Link>
                        )
                        )
                    }
                </Carousel>
                <MovieList />
            </div>
        </div>
    )
}

export default Home
