import React from "react";
import Header from "../components/Header";
import "./Home.css";
import MovieCard from "../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const movies = useSelector((state) => state.movies);
  return (
    <>
      <Header />
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h3>No Movies Found</h3>
        </div>
      )}
    </>
  );
};

export default Home;
