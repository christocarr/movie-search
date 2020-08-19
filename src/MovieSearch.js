import React, { useState } from 'react'

function MovieSearch() {

  const [query, setQuery] = useState('')

  const searchMovies = async (ev) => {
    ev.preventDefault()
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2d95dd1eaea4c170f5881bf6665251eb&query=${query}`)
      const data = await response.json()
      console.log(data)
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">Movie Name</label>
      <input className="input" type="text" value={query} onChange={e => setQuery(e.target.value)} name="query" id="query" placeholder="i.e. titanic" />
      <button className="button">Search</button>
    </form>
  )
}

export default MovieSearch