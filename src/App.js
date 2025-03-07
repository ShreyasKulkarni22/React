import React, { useState, useEffect } from "react";
import Hello from "./Hello";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";
import Message from "./Message";
import Parent from "./ParentComponent";
import UserGreeting from "./UserGreeting";
import List from "./List";
import CompA from "./CompA";
import { UserConsumer, UserProvider } from "./userContext";


const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    
    // <div className="app">
    //   <h1>MovieLand</h1>
    //   <Hello/>
    //   <div className="search">
    //     <input
    //       value={searchTerm}
    //       onChange={(e) => setSearchTerm(e.target.value)}
    //       placeholder="Search for movies"
    //     />
    //     <img
    //       src={SearchIcon}
    //       alt="search"
    //       onClick={() => searchMovies(searchTerm)}
    //     />
    //   </div>

    //   {movies?.length > 0 ? (
    //     <div className="container">
    //       {movies.map((movie) => (
    //         <MovieCard movie={movie} />
    //       ))}
          
    //     </div>
    //   ) : (
    //     <div className="empty">
    //       <h2>No movies found</h2>
    //     </div>
    //   )}
    // </div>
    // <UserGreeting/>
    // <List/>
    <UserProvider >
      <CompA/>
    </UserProvider>
     

      
  );
};

export default App;