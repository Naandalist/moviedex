import React, { useState, useEffect } from "react";
import {
  Box,
  useMediaQuery,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

import { useGetMoviesQuery } from "../../services/TMDB";

function Movies() {
  const { data, isLoading, error } = useGetMoviesQuery();

 console.log("data: ", data)
  return <div>Movies</div>;
}

export default Movies;
