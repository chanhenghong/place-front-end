

import React, { useState } from "react";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import ButtonNavbar from "../presentations/NavbarBeforeLogin/button";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import { AppBar, Box } from "@mui/material";

const useStyle = makeStyles({
  navbar: {
    position: "sticky",
    top: 0,
    zIndex: 2,
height: "90px",
    background: "white",
    borderBottom: "1px solid rgb(235, 234, 233)",
    display: "flex",
    flexDirection: "row", //add
    justifyContent: "center",
    alignItems: "center",
  },

  navbarLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "10%",
    height: "10vh",
  },

  navItems: {
    display: "flex",
    listStyle: "none",
    flexDirection: "row",
    width: "70vw",
    justifyContent: "flex-end",
    padding: "1",
    color: "black",
  },

  a: {
    textDecoration: "underlined",
    textDecorationColor: "rgb(0, 212, 212)",
    textDecorationThickness: 4,
  },
  item: {
    display: "flex",
    width: "12%",
    // height: "8vh",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: "2%",
    "&:hover": {
      color: "#D69F42",
      textDecoration: "underline",
      textDecorationThickness: "3px",
    },
  },
});

export default function NavBarLandingPage() {
  const classes = useStyle();
  return (
    <>
      <nav className={classes.navbar}>
        <Link href="/" passHref>
          <Image
            src="/LogoProject.svg"
            alt="LOGO"
            width="120"
            height="120"
          ></Image>
        </Link>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <ul className={classes.navItems}>
            <li className={classes.item}>
              <Link href="/#region" passHref>
                Region
              </Link>
            </li>
            <li className={classes.item}>
              <Link href="/#type" passHref>
                Place Types
              </Link>
            </li>
            <li className={classes.item}>
              <Link href="/#explore" passHref>
                Explore
              </Link>
            </li>
            <li className={classes.item}>
              <Link href="/#article" passHref>
                Article
              </Link>
            </li>
            <li className={classes.item}>
              <Link href="/#activities" passHref>
                Activities
              </Link>
            </li>
            <li className={classes.item}>
              <Link href="/#kind" passHref>
                Kind of Place
              </Link>
            </li>
          </ul>
        </Box>
        <Box sx={{ marginLeft: { xs: "48vw", sm: "0px" } }}>
          <ButtonNavbar />
        </Box>
      </nav>
    </>
  );
}
