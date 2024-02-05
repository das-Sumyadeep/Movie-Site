import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../ContextAPI/Context";

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <div>
        <p className="loading">Loading...</p>
      </div>
    )
  }

  return (
    <>
      <section className=" movie-page">
        <div className="container grid grid-4-col">
          {movie.map((ele) => {
            const { Title, imdbID, Poster } = ele;
            const movieName = Title.substring(0, 15);
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2>{movieName.length >= 15 ? `${movieName}...` : movieName}</h2>
                    <img src={Poster} alt={imdbID} />
                  </div>
                </div>
              </NavLink>
            )
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
