import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import banner from "../images/error-bg.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${banner}') no-repeat center/cover`,
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(100vh - 64px)",
  },
}));
const Error = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <NavBar />
        <div className={classes.box}>
          <Box textAlign="center" color="#fff">
            <Typography variant="h1">404</Typography>
            <Typography variant="h1" gutterBottom>
              No Page Found !
            </Typography>
            <Button
              component={Link}
              size="large"
              to="/"
              variant="contained"
              color="secondary"
            >
              Back Home
            </Button>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default Error;
