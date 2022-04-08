import * as api from "../../api";

export const fetchMovies = (title) => async (dispatch) => {
  const movies = await api.fetchMovies(title);
  dispatch({ type: "FETCH_MOVIES", payload: movies });
};
