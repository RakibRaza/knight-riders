import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useParams } from "react-router-dom";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import NavBar from "../components/NavBar/NavBar";
import { useAuthContext } from "../context/AuthContext";
const useStyles = makeStyles((theme) => ({
  divider: {
    margin: theme.spacing(1.5, 0, 5),
  },

  container: {
    marginBottom: theme.spacing(7),
  },
  form: {
    background: "#EFEFEF",
    padding: theme.spacing(5, 2),
    borderRadius: theme.spacing(1.5),
  },
  input: {
    background: "#fff",
  },
}));
const Destination = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const { pickFrom, pickTo, setPickFrom, setPickTo } = useAuthContext();
  const onClick = (data) => {
    setPickFrom(data.from);
    setPickTo(data.to);
  };
  return (
    <Container>
      <NavBar />
      <Divider className={classes.divider} variant="middle" />
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} md={5}>
          <Box className={classes.form}>
            <form onClick={handleSubmit(onClick)}>
              <Box mb={2}>
                <Typography>Pick From</Typography>
                <TextField
                  name="from"
                  className={classes.input}
                  defaultValue={pickFrom}
                  variant="outlined"
                  fullWidth
                  inputRef={register}
                />
              </Box>
              <Box mb={2}>
                <Typography>Pick To</Typography>
                <TextField
                  name="to"
                  defaultValue={pickTo}
                  className={classes.input}
                  variant="outlined"
                  fullWidth
                  inputRef={register}
                />
              </Box>
              <Box mt={4}>
                <Button
                  component={NavLink}
                  to={`/ride/${id}`}
                  type="submit"
                  color="primary"
                  variant="contained"
                  fullWidth
                >
                  Start Booking
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <GoogleMap />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Destination;
