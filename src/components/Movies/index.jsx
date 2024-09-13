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
import { selectGenreOrCategory } from "../../features/currentGenreOrCategories";

function Movies() {
  const [page, setPage] = useState(1);

  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );

  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data?.results) {
    <Box display="flex" alignItems="center" mt="20px">
      <Typography variant="h4">{`No movies match with that name.\n Please search for something else!`}</Typography>
    </Box>;
  }

  return (
    <div>
      <MovieList movies={data.results} />
    </div>
  );
}

export default Movies;
