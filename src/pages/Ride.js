import {
  Box,
  Container,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useParams } from "react-router";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import NavBar from "../components/NavBar/NavBar";
import vehicles from "../data/VehicleDetails";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import { useAuthContext } from "../context/AuthContext";
const useStyles = makeStyles((theme) => ({
  divider: {
    margin: theme.spacing(1.5, 0, 5),
  },
  container: {
    marginBottom: theme.spacing(7),
  },
  vehicle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  seats: {
    display: "flex",
    alignItems: "center",
  },
  form: {
    background: "#EFEFEF",
    padding: theme.spacing(5, 0),
    borderRadius: theme.spacing(1.5),
  },
  stepper: {
    background: theme.palette.secondary.main,
    borderRadius: theme.spacing(2),
  },
  lable: {
    "& .MuiStepLabel-label": {
      color: "#fff",
      fontSize: "2rem",
      fontWeight: "bold",
    },
  },
}));
const Ride = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { pickFrom, pickTo } = useAuthContext();
  const rideVehicle = vehicles.filter(
    (vehicle) => vehicle.vehicleId === parseInt(id)
  );
  return (
    <Container>
      <NavBar />
      <Divider className={classes.divider} variant="middle" />
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} md={5}>
          <Box className={classes.form}>
            <Box mx={2}>
              <Stepper className={classes.stepper} orientation="vertical">
                <Step>
                  <StepLabel className={classes.lable}>{pickFrom}</StepLabel>
                </Step>
                <Step>
                  <StepLabel className={classes.lable}>{pickTo}</StepLabel>
                </Step>
              </Stepper>
            </Box>
            {rideVehicle.map((vehicle) => {
              const { id, image, type, seats, price } = vehicle;
              return (
                <Paper
                  key={id}
                  className={classes.vehicle}
                  component={Box}
                  m={2}
                  p={2}
                >
                  <img
                    style={{ width: "64px", display: "block" }}
                    src={image}
                    alt={type}
                  />
                  <Typography>{type}</Typography>
                  <Box className={classes.seats}>
                    <EventSeatIcon />
                    <Typography>{seats}</Typography>
                  </Box>
                  <Typography>${price}</Typography>
                </Paper>
              );
            })}
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <GoogleMap />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Ride;
