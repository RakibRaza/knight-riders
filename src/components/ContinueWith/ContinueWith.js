import { Box, Typography } from "@material-ui/core";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { GrGoogle } from "react-icons/gr";
import { useHistory } from "react-router";
import { useAuthContext } from "../../context/AuthContext";
import { useStyles } from "./ContinueWithStyle";

const ContinueWith = () => {
  const { googleSignIn, path } = useAuthContext();
  const classes = useStyles();
  const history = useHistory();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      history.replace(path);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h6 className={classes.divider}>
        <span>or</span>
      </h6>
      <Box className={classes.continue}>
        <ImFacebook />
        <Typography>Continue with Facebook</Typography>
      </Box>
      <Box
        style={{ background: "#e91e63" }}
        onClick={handleGoogleSignIn}
        className={classes.continue}
      >
        <GrGoogle />
        <Typography>Continue with Google</Typography>
      </Box>
      <Box style={{ background: "black" }} className={classes.continue}>
        <FaGithub />
        <Typography>Continue with Github</Typography>
      </Box>
    </>
  );
};

export default ContinueWith;
