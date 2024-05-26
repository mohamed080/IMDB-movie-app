import React, {useEffect, useState} from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import './Cards.css'
import { Link } from 'react-router-dom'
const Cards = ({movie}) => {

    const [isLoading, SetIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            SetIsLoading(false)
        },1500)
    }, [])

    return (
        <>
            {
                isLoading
                ?
                <div className="cards">
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <Skeleton height={300} duration={2}/>
                    </SkeletonTheme>
                </div>
                :
                <Link to={`movie/${movie.id}`} style={{color: "white"}}>
                    <div className="cards">
                        <img className='cards-img' src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt="poster img" />
                        <div className="cards-overlay">
                            <div className="card-title">
                                {movie?movie.original_title:""}
                            </div>
                            <div className="card-runtime">
                                {movie?movie.release_date:""}
                                <span className='card-rating'>{movie?movie.vote_average:""}<i className='fas fa-star' /></span>
                            </div>
                            <div className="card-desc">
                                {movie?movie.overview.slice(0,118)+"...":""}
                            </div>
                        </div>
                    </div>
                </Link>
                        
            }
        </>
    )
}

export default Cards
