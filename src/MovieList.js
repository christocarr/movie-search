import React from 'react'

const MovieList = (props) => {
  
  const { movies } = props

  console.log(movies)

  return (
    <ul className="movie__list">
      {movies.map((movie, index) => {
        console.log(movie)
        return (
          <li className="movie__list-item" key={index}>
            <h3 className="movie__title">{movie.title}</h3>
            <div className="movie__details">
              <p><small>Release date: {movie.release_date}</small></p>
              <p><small>Rating: {movie.vote_average}</small></p>
            </div>
            {movie.backdrop_path ?
              <img className="movie__image" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={`${movie.title}`} />
              : <div className="movie__image no-image">No Image to Show</div>
            }
            <p className="movie__desc">{movie.overview}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default MovieList