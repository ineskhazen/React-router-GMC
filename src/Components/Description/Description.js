import { Button } from "@material-ui/core";
import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const Description = ({
  location: {
    state: { movie },
  },
  history,
  movies,
  match,
}) => {
  const movieMatch = movies.find((e) => match.params.id == e.id);
  return (
    <div style={{ margin: "5%" }}>
      <h1>Description Page</h1>
      {/* <img src={movie.image} alt={movie.name}/> */}
      {/* <h2>{movie.name}</h2> */}

      <MovieCard movie={movie} />

       {movieMatch.Trailer ? movieMatch.Trailer : <h3>There is no Trailer to watch</h3>} 

{/* {movie.Trailer ? movie.Trailer : <h3>There is no Trailer to watch</h3>} */}
     <h4> Movie with Match </h4> 
    <MovieCard movie={movieMatch} />

      <Button onClick={() => history.goBack()}>Go back</Button>
    </div>
  );
};

export default Description;
