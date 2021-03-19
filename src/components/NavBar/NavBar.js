import {
  AppBar,
  Box,
  Button,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  navBar: {
    background: "none",
    boxShadow: "none",
    color: "#000",
  },
  title: {
    fontWeight: "bold",
    flexGrow: "1",
  },
  drawer: {
    width: "250px",
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { currentUserInfo, logOut } = useAuthContext();
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <AppBar className={classes.navBar} position="static" color="secondary">
        <Toolbar>
          <Typography className={classes.title} variant="h5">
            Knight Riders
          </Typography>
          <Hidden smDown>
            <Button component={Link} to="/">
              Home
            </Button>
            <Button component={Link} to="destination/1">
              Destination
            </Button>
            <Button>Blog</Button>
            <Button>Contact</Button>
            <Box ml={6}>
              {currentUserInfo ? (
                <Button
                  onClick={handleLogOut}
                  color="primary"
                  variant="contained"
                >
                  Logout
                </Button>
              ) : (
                <Button
                  component={NavLink}
                  to="/login"
                  color="primary"
                  variant="contained"
                >
                  Login
                </Button>
              )}
            </Box>
            <Box>
              <Button>{currentUserInfo?.displayName}</Button>
            </Box>
          </Hidden>
          <Hidden mdUp>
            <Box>
              <IconButton onClick={() => setOpen(true)} color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
            <Drawer open={open} onClose={() => setOpen(false)}>
              <List disablePadding className={classes.drawer}>
                <ListItem button>
                  <ListItemText primary="News" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Destination" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Blog" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Contact" />
                </ListItem>
              </List>
              {currentUserInfo ? (
                <Button
                  onClick={handleLogOut}
                  color="primary"
                  variant="contained"
                >
                  Logout
                </Button>
              ) : (
                <Button
                  component={NavLink}
                  to="/login"
                  color="primary"
                  variant="contained"
                >
                  Login
                </Button>
              )}
              <Button>{currentUserInfo?.displayName}</Button>
            </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
