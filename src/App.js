import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components//Footer/Footer";
import MoviesList from "./Components/MoviesList/MoviesList";
import './App.css';
import { moviesData } from "./constants/data";
import BasicModal from "./Components/AddMovie/AddMovie";
import { Switch,Route } from "react-router-dom";
import Description from "./Components/Description/Description";



function App() {
  const [movies,setMovies ] = useState(moviesData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);
 
  const addMovie= (movie)=>setMovies([...movies, movie]);

  return (
    <div>
       <Navbar setSearchTitle={setSearchTitle} 
       setSearchRating={setSearchRating}
       searchRating={searchRating}/>
       <Switch>
         <Route exact path="/"> 
       <BasicModal addMovie={addMovie}/>
       <MoviesList movies={movies} searchTitle={searchTitle}  searchRating={searchRating}/>
       </Route>
       {/* <Route path="/Description" component={Description}> */}
       {/* </Route> */}
       <Route path="/description/:id" render={(props)=><Description {...props} movies={movies}/>}>
       </Route>
       </Switch>
       
       <Footer/>
       
    </div>
  );
}

export default App;

