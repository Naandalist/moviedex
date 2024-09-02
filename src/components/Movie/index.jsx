import React from "react";
import { Typography, Grid, Grow, Tooltip, Rating } from "@mui/material";
import { Link } from "react-router-dom";

import useStyles from "./styles";

function Movie({ movie, index }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in key={index} timeout={(index + 1) * 300}>
        <Link to={`/movie/${movie.id}`} className={classes.link}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "https://picsum.photos/200/300?grayscale"
            }
            className={classes.image}
            alt={movie.title}
          />

          <Typography className={classes.title} variant='h5' noWrap={true}>
            {movie.title}
          </Typography>
          <Tooltip
            disableFocusListener
            title={`${movie.vote_average.toFixed(1)}/10`}
          >
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
}

export default Movie;
