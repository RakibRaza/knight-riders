import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: { height: "100%" },
  cardImg: {
    width: "75%",
    margin: "auto",
    padding: "1rem 0",
  },
}));
const Vehicle = ({ image, type }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardImg}
          component="img"
          alt={type}
          image={image}
        />
        <CardContent>
          <Typography align="center" variant="h3">
            {type}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Vehicle;
