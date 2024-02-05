import React from 'react'
import { useGlobalContext } from '../ContextAPI/Context'

const Search = () => {

  const { isError, query, setQuery } = useGlobalContext();
  return (
    <>
      <section className='search-section'>
        <h2>Search your Favorite Movie</h2>
        <form action='#' onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type='text'
              placeholder='search here'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        <div className='card-error'>
          <p>{isError.show && isError.msg}</p>
        </div>
      </section>
    </>
  )
}

export default Search