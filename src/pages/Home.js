import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import banner from "../images/banner.jpg";
import NavBar from "../components/NavBar/NavBar";
import vehicles from "../data/vehicles";
import Vehicle from "../components/Vehicle/Vehicle";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('${banner}') no-repeat center/cover`,
  },
  container: {
    minHeight: "calc(100vh - 64px)",
    padding: theme.spacing(5, 0),
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <NavBar />
        <Grid
          className={classes.container}
          alignItems="center"
          container
          spacing={3}
        >
          {vehicles.map((vehicle) => (
            <Vehicle key={vehicle.id} {...vehicle} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
