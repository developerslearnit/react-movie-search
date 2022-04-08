import React from "react";
import SerachIcon from "../assets/search.svg";
import { fetchMovies } from "../redux/actions/movies";
import { useDispatch } from "react-redux";

const Header = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const dispatch = useDispatch();
  const searcMovies = (title) => {
    dispatch(fetchMovies(title));
  };
  return (
    <>
      <h1>Movie Search</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <img
          src={SerachIcon}
          alt="Search"
          onClick={() => {
            searcMovies(searchTerm);
          }}
        />
      </div>
    </>
  );
};

export default Header;
