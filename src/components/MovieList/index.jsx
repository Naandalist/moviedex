import React from "react";
import { Grid } from "@mui/material";

import useStyles from "./styles";
import { Movie } from "..";

function MovieList({ movies }) {
  const classes = useStyles();

  console.log("content movies: ", movies);
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.map((movie, index) => {
        return <Movie key={index} movie={movie} index={index} />;
      })}
    </Grid>
  );
}

export default MovieList;
