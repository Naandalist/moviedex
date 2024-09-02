import React, { useState, useEffect } from "react";
import {
  Box,
  useMediaQuery,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { MovieList } from "..";

import { useGetMoviesQuery } from "../../services/TMDB";

function Movies() {
  const { data, error, isFetching } = useGetMoviesQuery();

  if (isFetching) {
    return (
      <Box display='flex' justifyContent='center'>
        <CircularProgress size='4rem' />
      </Box>
    );
  }

  if (!data.results) {
    <Box display='flex' alignItems='center' mt='20px'>
      <Typography variant='h4'>{`No movies match with that name.\n Please search for something else!`}</Typography>
    </Box>;
  }

  return (
    <div>
      <MovieList movies={data.results} />
    </div>
  );
}

export default Movies;
