import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./redux/actions/movies";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies("Superman"));
    return () => {};
  }, [dispatch]);

  return <div className="app">{<Home />}</div>;
};

export default App;
