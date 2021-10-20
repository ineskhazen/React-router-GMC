import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const MoviesList = ({ movies,searchTitle,searchRating }) => {
    const handleName = (name) => alert(`this movie's name is ${name}`);
    return (
      <div >
        <h2 className="title">MoviesList </h2>
        <div className="container" style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}} >
          {movies.filter((el)=>el.name.toUpperCase().includes(searchTitle.toUpperCase()) 
          &&
          el.rating >= searchRating
          )
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} handleName={handleName} />
          ))}
      </div>
    </div>
  );
};
         
  export default MoviesList;