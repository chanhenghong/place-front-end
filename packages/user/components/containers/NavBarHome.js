import React, { useState } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import ButtonNavbar from "../presentations/NavbarBeforeLogin/button";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";

const useStyle = makeStyles({
  navbar: {
    height: "10vh",
    background: "white",
    borderBottom: "1px solid rgb(235, 234, 233)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 2,
  },

  navbarLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "10%",
    height: "10vh",
  },

  navButton: {
    display: "flex",
    width: "100px",
    height: "8vh",
    alignItems: "center",
    justifyContent: "center",
    margin: "10%",
    "&:hover": {
      background: "rgb(0, 212, 212)",
    },
  },
  a: {
    textDecoration: "underlined",
    textDecorationColor: "rgb(0, 212, 212)",
    textDecorationThickness: 4,
  },
  item: {
    display: "flex",
    // width: "25%",
    // height: "8vh",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: "5%",
    color: "black",
    "&:hover": {
      color: "#D69F42",
      textDecoration: "underline",
      textDecorationThickness: "3px",
    },
  },
});
export default function NavbarBeforeLogin() {
  const classes = useStyle();
  return (
    <>
      <AppBar className={classes.navbar}>
        <Link href="/" className={classes.navbarLogo} passHref>
          <Image
            src="/LogoProject.svg"
            alt="LOGO"
            width="120"
            height="120"
          ></Image>
        </Link>
        <Box
          className={classes.navItems}
          sx={{
            display: "flex",
            listStyle: "none",
            flexDirection: "row",
            width: {xs:"55vw", sm:"70vw"},
            justifyContent: "flex-end",
            padding: "1",
          }}
        >
          <li className={classes.item}>
            <Link href="./../../filter_before_login" passHref>
              Filter
            </Link>
          </li>
          <li className={classes.item}>
            <Link
             href="./../../articlepage/ArticleContent" 
             passHref>
              Article & Video
            </Link>
          </li>
        </Box>
        <ButtonNavbar />
      </AppBar>
    </>
  );
}


