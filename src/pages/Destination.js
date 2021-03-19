import DateFnsUtils from "@date-io/date-fns";
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
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
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
    "& .MuiInputBase-input": {
      background: "#fff",
      fontWeight: "bold",
    },
  },
}));
const Destination = () => {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const { pickFrom, pickTo, setPickFrom, setPickTo } = useAuthContext();
  const onClick = (data) => {
    setPickFrom(data.from);
    setPickTo(data.to);
    history.push(`/ride/${id}`);
  };
  return (
    <Container>
      <NavBar />
      <Divider className={classes.divider} variant="middle" />
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} md={5}>
          <Box className={classes.form}>
            <form onSubmit={handleSubmit(onClick)}>
              <Box mb={2}>
                <Typography>Pick From</Typography>
                <TextField
                  className={classes.input}
                  name="from"
                  defaultValue={pickFrom}
                  variant="outlined"
                  fullWidth
                  inputRef={register({
                    required: "Pick From is required.",
                  })}
                  helperText={errors.from?.message}
                  error={Boolean(errors.from)}
                />
              </Box>
              <Box mb={2}>
                <Typography>Pick To</Typography>
                <TextField
                  className={classes.input}
                  name="to"
                  defaultValue={pickTo}
                  variant="outlined"
                  fullWidth
                  inputRef={register({
                    required: "Pick To is required.",
                  })}
                  helperText={errors.to?.message}
                  error={Boolean(errors.to)}
                />
              </Box>
              <Typography>From</Typography>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <KeyboardDatePicker variant="inline" format="dd/MM" />
                  </Grid>
                  <Grid item xs={6}>
                    <KeyboardTimePicker variant="inline" />
                  </Grid>
                </Grid>
              </MuiPickersUtilsProvider>
              <Box mt={3}>
                <Typography>To</Typography>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container spacing={4}>
                    <Grid item xs={6}>
                      <KeyboardDatePicker variant="inline" format="dd/MM" />
                    </Grid>
                    <Grid item xs={6}>
                      <KeyboardTimePicker variant="inline" />
                    </Grid>
                  </Grid>
                </MuiPickersUtilsProvider>
              </Box>
              <Box mt={4}>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  fullWidth
                  size="large"
                >
                  Search
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
