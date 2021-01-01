import React, { Component } from "react";
import "./Home.css";
import Header from "../../common/header/Header";
import { withStyles } from "@material-ui/core/styles";
import moviesData from "../../common/movieData";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  upcomingMoviesHeading: {
    textAlign: "center",
    background: "#ff9999",
    padding: "8px",
    fontSize: "1rem",
  },
  gridListUpcomingMovies: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    width: "100%",
  },
  gridListReleasedMovie: {
    padding: "20px",
    width: "65%",
  },
});

//console.log(typeof styles);

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header />
        <div className={classes.upcomingMoviesHeading}>
          <span>Upcoming Movies</span>
        </div>
        <GridList cols={5} className={classes.gridListUpcomingMovies}>
          {moviesData.map((movie) => (
            <GridListTile key={movie.id}>
              <img
                src={movie.poster_url}
                className="movie-poster"
                alt={movie.title}
              />
              <GridListTileBar title={movie.title} />
            </GridListTile>
          ))}
        </GridList>
        <GridList
          className={classes.gridListReleasedMovie}
          cellHeight="auto"
          cols={3.5}
        >
          {moviesData.map((movie) => (
            <GridListTile key={movie.id} style={{ margin: "15px 15px" }}>
              <img
                src={movie.poster_url}
                className="released-movie"
                alt={movie.title}
              />
              <GridListTileBar
                style={{ fontWeight: "400" }}
                title={<div style={{ fontSize: "140%" }}>{movie.title}</div>}
                subtitle={
                  <span style={{ fontSize: "160%" }}>
                    Release Date: {new Date(movie.release_date).toDateString()}
                  </span>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
