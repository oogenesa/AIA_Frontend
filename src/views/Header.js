import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import aia from "../assets/aia.png";
import flickr from "../assets/flickr.png";

function Header(props) {
  const sections = [{ title: "Flickr", url: "#" }];
  const title = "AIA Flickr";

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <img src={flickr} height="60px" />

        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>

        <img src={aia} height="60px" />
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      ></Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  // sections: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     title: PropTypes.string.isRequired,
  //     url: PropTypes.string.isRequired,
  //   })
  // ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
