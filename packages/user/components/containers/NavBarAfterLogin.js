import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import filter from './../../pages/place'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Divider, Drawer, List, ListItemButton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import { logoutUser } from "../../utils/auth/authUser";
// import PlaceDropdown from "../presentations/NavbarBeforeLogin/PlaceDropdown";
// import ActivityDropdown from "../presentations/NavbarBeforeLogin/ActivityDropdown";
import { fireAuth } from "../../services/firebase";

const useStyle = makeStyles({
  Appbar: {
    backgroundColor: "white",
    padding: "0px",
    height: "10vh",
    position:"fixed",
    zIndex:"2"
  },
  
  special: {
    display: "flex",
    padding: "3vw",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    "&:hover": {
      color: "#D69F42",
      textDecoration: "underline",
      textDecorationThickness: "3px",
    },
  },


  drawer: {
    width: "220px",
    "&:hover": {
      color: "#D69F42",
      textDecoration: "underline",
      textDecorationThickness: "3px",
    },
  },
  drawerItems: {
    "& li": {
      padding: "15px",
      color: "red",
      "&:hover": {
        color: "green",
      },
    },
  },
});


const PrimarySearchAppBar = () => {
  const [open, setOpen] = React.useState(false); //My code
  const classes = useStyle();
  // const [dropdown, setDropdown] = useState(false);
  // const [place, setPlace] = useState(false);
  const itemlist = [
    {
      text: "Filter",
      path: "./../../filterPage",
    },
    {
      text: "Article & Video",
      path: "./../../articlepage/ArticleContent",
    },
    {
      text: "Map",
      path: "./../../map",
    },
    {
      text: "Favorite",
      path: "./../../profilepage/profile_favorite",
    },
  ];

  const userlist = [
    {
      text: "Profile",
      path: "./../../profilepage/profile_article",
    },
    {
      text: "Post Content",
      path: "./../../choose_article_or_place",
    },
    {
      text: "Help",
      path: "",
    },
  ];
  // end of my code

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link href="./../../profilepage/profile_article">Profile</Link>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <Link href="./../../profilepage/profile_favorite">Favorite</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link href="./../../choose_article_or_place">Post Content</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link href="/">Help</Link>
      </MenuItem>
      <MenuItem onClick={logoutUser}>
        Log Out
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    ></Menu>
  );

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={(open) => setOpen(false)}>
        <List>
          {itemlist.map((item, index) => {
            const { text, path } = item;
            return (
              <List key={index}>
                <ListItemButton className={classes.drawer} key={text}>
                  <Link href={path}>{text}</Link>
                </ListItemButton>
              </List>
            );
          })}
        </List>
        <Divider></Divider>
        <List>
          {userlist.map((item, index) => {
            const { text, path } = item;
            return (
              <List key={index}>
                <ListItemButton className={classes.drawer} key={text}>
                  <Link href={path}>{text}</Link>
                </ListItemButton>
              </List>
            );
          })}
          <ListItemButton
            className={classes.drawer}
            onClick={ logoutUser}
          >
            Log Out
          </ListItemButton>
        </List>
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={classes.Appbar}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "block", sm: "block" } }}
            >
              <Link href="./../../homepage_after_login" passHref>
                <Image
                  src="/LogoProject.svg"
                  alt="LOGO"
                  width="120"
                  height="120"
                ></Image>
              </Link>
            </Typography>
            

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              
              <li
                className={classes.special}
                size="small"
                color="inherit"
                // onMouseEnter={() => setDropdown(true)}
                // onMouseLeave={() => setDropdown(false)}
              >
                
                <Link href="./../../filterPage">Filter</Link>
                {/* {dropdown && <ActivityDropdown />} */}
              </li>

              <li className={classes.special} size="small" color="inherit">
                <Link href="./../../articlepage/ArticleContent">Article & Video</Link>
              </li>
              <Box sx={{ display: { xs: "flex" } }}>
                <li className={classes.special} size="small" color="inherit">
                  <Link href="./../../map">Map</Link>
                </li>
              </Box>
              <IconButton
                sx={{ color: "black" }}
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", sm: "none" } }}>
              <IconButton
                sx={{ color: "#008058" }}
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                //   onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon onClick={() => setOpen(true)} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </div>
  );
};
export default PrimarySearchAppBar;
