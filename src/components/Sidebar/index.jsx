import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";

import useStyles from "./styles";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];
const demoCategories = [
  { label: "Comedy", value: "comedy" },
  { label: "action", value: "action" },
  { label: "Animation", value: "animation" },
];

const IMAGES = {
  logo_blue: new URL("../../assets/moviedex-blue-logo.png", import.meta.url)
    .href,
  logo_red: new URL("../../assets/moviedex-red-logo.png", import.meta.url).href,
};

function Sidebar({ setMobileOpen }) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={
            theme.palette.mode === "light" ? IMAGES.logo_blue : IMAGES.logo_red
          }
          alt="MovieDex logo"
        />
      </Link>
      <Divider />
      <ListSubheader>Categories</ListSubheader>
      {categories.map(({ label, value }) => (
        <Link key={value} className={classes.links} to="/">
          <ListItem onClick={() => {}} button>
            {/* <ListItemIcon>
              <img src={redLogo} className={classes.genreImages} height={30} />
            </ListItemIcon> */}
            <ListItemText primary={label} />
          </ListItem>
        </Link>
      ))}
      <Divider />
      <ListSubheader>Genres</ListSubheader>
      {demoCategories.map(({ label, value }) => (
        <Link key={value} className={classes.links} to="/">
          <ListItem onClick={() => {}}>
            {/* <ListItemIcon>
              <img src={icon} className={classes.genreImages} height={30} />
            </ListItemIcon> */}
            <ListItemText primary={label} />
          </ListItem>
        </Link>
      ))}
    </>
  );
}

export default Sidebar;
