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
import { get_image } from "../api";

const theme = createTheme();

// import Markdown from "./Markdown";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  item: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
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
  const [flicker_img, setFlickerImage] = React.useState([]);
  const [search_tag, setSearchTag] = React.useState();

  React.useEffect(() => {
    const send = "all";
    console.log("useffect");
    get_image(send).then((res) => setFlickerImage(res.items));
  }, []);
  const { posts, title } = props;

  const classes = useStyles();

  const itemImage = () => {
    let arr = [];

    if (flicker_img.length !== 0) {
      flicker_img.map((img) => {
        arr.push(
          <ImgMediaCard
            image={img.media.m}
            title={img.title}
            desc={img.author}
          />
        );
      });
    }
    return arr;
  };
  const onClickSearch = () => {
    // console.log("click");
    let send = "all";
    if (search_tag !== "") {
      send = search_tag;
    }
    get_image(send).then((res) => setFlickerImage(res.items));
  };
  return (
    <div className={classes.items}>
      <Grid container spacing={2} className={classes.search}>
        <TextField
          fullWidth
          label="Search"
          id="fullWidth"
          className={classes.input}
          onChange={(e) => setSearchTag(e.target.value)}
        />
        <Button
          variant="contained"
          endIcon={<SearchIcon />}
          onClick={() => onClickSearch()}
        >
          Search
        </Button>
      </Grid>
      <Grid container fixed className={classes.item}>
        {itemImage()}
      </Grid>
    </div>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
