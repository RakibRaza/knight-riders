import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
  Zoom,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  card: {
    minHeight: "300px",
    borderRadius: theme.spacing(1.5),
    cursor: "pointer",
  },
  cardImg: {
    width: "70%",
    margin: "auto",
    padding: "1rem 0",
  },
  title: {
    fontWeight: "bold",
  },
}));
const Vehicle = ({ id, image, type }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Grid
      onClick={() => history.push(`/destination/${id}`)}
      item
      xs={12}
      sm={6}
      md={3}
    >
      <Zoom in={true}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardImg}
            component="img"
            alt={type}
            image={image}
          />
          <CardContent>
            <Typography className={classes.title} align="center" variant="h4">
              {type}
            </Typography>
          </CardContent>
        </Card>
      </Zoom>
    </Grid>
  );
};

export default Vehicle;
