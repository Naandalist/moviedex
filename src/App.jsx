import React from "react";
import { CssBaseline } from "@mui/material";
import { Route, Switch } from "react-router-dom";
import {
  Actors,
  Movies,
  MovieInformation,
  NavBar,
  Profile,
} from "./components";

import useStyles from "./styles";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exac path='/'>
            <Movies />
          </Route>
          <Route exac path='/movie:id'>
            <MovieInformation />
          </Route>
          <Route exac path='/actors'>
            <Actors />
          </Route>
          <Route exac path='/profile'>
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
