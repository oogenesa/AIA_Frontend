import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    paddingInline: "10px",
    marginTop: "5px",
  },
}));
export default function ImgMediaCard(props) {
  const onClickImage = () => {
    window.open(props.link, "_blank").focus();
  };
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 345 }} className={classes.card}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        src={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="caption" component="div">
          {props.title}
        </Typography>

        {props.description}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onClickImage()}>
          Go to Link{" "}
        </Button>
      </CardActions>
    </Card>
  );
}
