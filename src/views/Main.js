import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { TextField, Button, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ImgMediaCard from "../components/Card";
const theme = createTheme();

// import Markdown from "./Markdown";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  item: {
    display: "flex",
    alignContent: "center",
    justifyContent: "left",
  },
  search: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  grid: {
    backgroundColor: "pink",
  },
  input: {
    width: "400px",
  },
  items: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
}));
function Main(props) {
  const { posts, title } = props;

  const classes = useStyles();
  return (
    <div className={classes.items}>
      <Grid container spacing={2} className={classes.search}>
        <TextField
          fullWidth
          label="Search"
          id="fullWidth"
          className={classes.input}
        />
        <Button variant="contained" endIcon={<SearchIcon />}>
          Search
        </Button>
      </Grid>
      <Grid container fixed className={classes.item}>
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
      </Grid>
    </div>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
