import React from "react";
import Link from "next/link";
import { styled } from '@mui/material/styles';
import { useRouter } from "next/router";
const Button = styled('div')(({theme})=>({
    border: "none",
    background: "transparent",
    padding: "7px 14px",
    fontSize: "100%",
    color: "white",
    background: "#008058",
    borderRadius: "8px",
    transition: "0.3s all ease-out",
    cursor: "pointer",
    boxShadow:"3px 4px 0px 0px #999",

    "&:hover": {
      color: "white",
      background: "#014731",
    boxShadow:"0px 0px 0px 0px #999" ,

    },

    [theme.breakpoints.down("sm")]: {
      boxShadow:"3px 4px 0px 0px #232323" ,
      padding: "6px 13px",

    },
}));
//import login from './../../../pages/login'
export default function ButtonNavbar() {
  const router= useRouter()
  return (
    <Link href="./../../../login" passHref
  
    >
      <Button >Log in</Button>
    </Link>
  );
}
