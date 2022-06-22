import React, { useState } from "react";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import ButtonNavbar from "../presentations/NavbarBeforeLogin/button";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import kk from "./../presentations/ContentContainer/ContentContainer";
const useStyle = makeStyles({
  navbar: {
    height: "70px",
    // padding:"70px",test
    background: "white",
    borderBottom: "1px solid rgb(235, 234, 233)",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 1,
    //------test-----
    // zIndex: 0,
    // overflow:"hidden",
    // width:"100%",
    // opacity: "1.0",
    // position: "fixed",
  },

  navbarLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "10%",
    // height: "10vh", test
  },

  navItems: {
    display: "flex",
    listStyle: "none",
    flexDirection: "row",
    width: "70vw",
    justifyContent: "flex-end",
    padding: "1",
  },

  navButton: {
    display: "flex",
    width: "100px",
    // height: "8vh",
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
export default function Navbar() {
  const classes = useStyle();
  return (
    <>
      <nav className={classes.navbar}>
        <Link href="/" className={classes.navbarLogo} passHref>
          <Image
            src="/LogoProject.svg"
            alt="LOGO"
            width="120"
            height="120"
          ></Image>
        </Link>
        <ul className={classes.navItems}>
          <li className={classes.item}>
            {/* all link href can see id in presentations/ContentContainer/ContentContainer */}

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
            <Link href="articlepage/ArticleContent/#test" passHref>
              Article
            </Link>
          </li>
          <li className={classes.item}>
            <Link href="/#test1" passHref>
              Activities
            </Link>
          </li>
          <li className={classes.item}>
            <Link href="/KindOfPlaces/#kind" passHref>
              Kind of Place
            </Link>
          </li>
        </ul>
        <ButtonNavbar />
      </nav>
    </>
  );
}
