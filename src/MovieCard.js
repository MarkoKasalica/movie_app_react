import React from "react";
import "./MovieCard.css";
const MovieCard = (props) => {
  const API_IMAGE = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="card">
      <div className="poster">
        <img
          src={
            props.poster_path
              ? API_IMAGE + props.poster_path
              : "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          }
        />
      </div>
      <div className="info">
        <p className="title"> {props.title} </p>
        <p className="vote"> {props.vote_average}</p>
      </div>
      <div className="overview">
        <h2 className="title_overview">Overview :</h2>
        <h3 className="overview_info"> {props.overview}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
