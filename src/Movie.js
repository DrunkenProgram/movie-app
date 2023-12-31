import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, url, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <a href={url}><h3 className="movie__title">{title}</h3></a>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
                {index+1}
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.length > 180 ? summary.slice(0, 200) + '...' : summary}</p>
      </div>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;