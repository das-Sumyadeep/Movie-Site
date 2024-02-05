import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API } from '../ContextAPI/Context';

const SingleMovie = () => {

  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovies = async (url) => {

    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // Debouncing : makes the function wait for its next request and return a single response not in every character 
    let timeOut = setTimeout(() => {
      getMovies(`${API}&i=${id}`);
    }, 500);

    return () => clearTimeout(timeOut);
  }, [id]);

  if (isLoading) {
    return (
      <div className='movie-section'>
        <p className="loading">Loading...</p>
      </div>
    )
  }

  return (

    <section className='movie-section'>
      <div className='movie-card'>
        <figure>
          <img src={movie.Poster} alt='' />
        </figure>
        <div className='card-content'>
          <p className='title'>{movie.Title}</p>
          <p className='card-text'>{movie.Released}</p>
          <p className='card-text'>{movie.Genre}</p>
          <p className='card-text'>{movie.imdbRating}</p>
          <p className='card-text'>{movie.Country}</p>
          <NavLink to='/' className='back-btn'>Go Back</NavLink>
        </div>
      </div>
    </section>

  )
}

export default SingleMovie