import React from "react";
import MembersCard from "../components/presentations/MembersCard";
import GroupSocialMediaIcon from "../components/containers/GroupSocialMediaIcons";
import {
  Stack,
  Typography,
  Divider,
  Paper,
  Container,
  Box,
  Grid,
} from "@mui/material";
import NavBarLandingPage from "../components/containers/NavBarLandingPage";
import Image from "next/image";
import Footer from "../components/containers/Footer";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Title1: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    },
  },
  PaperText: {
    [theme.breakpoints.down("xs")]: {
      width: 350,
      height: 180,
      backgroundColor: "rgba(88, 125, 114, 0.32)",
      borderRadius: 30,
    },
    [theme.breakpoints.up("sm")]: {
      width: 600,
      height: 250,
      backgroundColor: "rgba(88, 125, 114, 0.32)",
      borderRadius: 30,
    },
    [theme.breakpoints.up("md")]: {
      width: 900,
      height: 399,
      backgroundColor: "rgba(88, 125, 114, 0.32)",
      borderRadius: 30,
    },
    [theme.breakpoints.up("lg")]: {
      width: 1050,
      height: 399,
      backgroundColor: "rgba(88, 125, 114, 0.32)",
      borderRadius: 30,
    },
  },
  TextOnPaper: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      marginTop: 25,
      marginLeft: 10,
      marginRight: 10,
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 18,
      marginTop: 30,
      marginLeft: 20,
      marginRight: 20,
    },
  },
  ContainerPic: {
    [theme.breakpoints.down("xs")]: {
      marginTop: 17,
    },
    [theme.breakpoints.between("sm", "md")]: {
      marginTop: 28,
    },
  },
  Picture: {
    [theme.breakpoints.down("xs")]: {
      width: 270,
      borderRadius: 30,
    },
    [theme.breakpoints.up("sm")]: {
      width: 400,
      borderRadius: 30,
    },
    [theme.breakpoints.up("md")]: {
      width: 700,
      borderRadius: 30,
    },
    [theme.breakpoints.up("lg")]: {
      width: 800,
      borderRadius: 30,
    },
  },
}));

export default function AboutUsPage() {
  const classes = useStyles();
  return (
    <div>
      <NavBarLandingPage />
      <Stack spacing={8}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          marginTop="50px"
        >
          <Typography className={classes.Title1} variant="h5">
            We're here so
          </Typography>
          <Typography
            className={classes.Title1}
            variant="h5"
            sx={{ color: "#008058" }}
          >
            You can find your satisfied place
          </Typography>
          <Divider variant="middle" sx={{ width: "400px" }} />
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Paper
            className={classes.PaperText}
            
            textAlign="center"
          >
            <Typography
              className={classes.TextOnPaper}
              variant="h6"
              textAlign="center"
              sx={{
                marginTop: "50px",
                marginLeft: "60px",
                marginRight: "60px",
              }}
            >
              Place provides a search engine within our best effort to allow
              user to search for places in Cambodia that is based on 5 main
              categories. User can filter place by prices range, places based on
              activities, places based on region, kind of place, and type of
              place.
            </Typography>
            <Container
              className={classes.ContainerPic}
              align="center"
              sx={{ marginTop: "50px" }}
            >
              <img
                className={classes.Picture}
                src="/PicCoverOfAboutUs.png"
                alt="Picture place team"
              />
            </Container>
          </Paper>
        </Stack>
      </Stack>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ marginTop: { xs: "100px", md: "100px", lg: "200px" } }}
      >
        <Stack spacing={6}>
          <Stack justifyContent="center" alignItems="center">
            <Typography
              className={classes.Title1}
              variant="h5"
              textAlign="center"
            >
              Our Mission
            </Typography>
            <Divider variant="middle" sx={{ width: "400px" }} />
          </Stack>
          <Grid
            container
            spacing={5}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid xs={12} md={6} item>
              <Typography>
                <li>Make people life more convenient</li>
              </Typography>
              <Typography>
                <li>Save time and worries</li>
              </Typography>
              <Typography>
                {" "}
                <li>Decrease risks when traveling solo</li>
              </Typography>
              <Typography>
                <li>Increase the number of tourists in Cambodia</li>
              </Typography>
            </Grid>
            <Grid xs={12} md={6} item>
              <Typography>
                {" "}
                <li>Advertise our wonderful places to the world</li>
              </Typography>
              <Typography>
                {" "}
                <li>Decrease unemployment</li>
              </Typography>
              <Typography>
                {" "}
                <li>Help promote businessess</li>
              </Typography>
            </Grid>
          </Grid>
        </Stack>
        <Stack spacing={6}>
          <Stack justifyContent="center" alignItems="center">
            <Typography
              className={classes.Title1}
              variant="h5"
              textAlign="center"
              marginTop="20px"
            >
              Your Contributions
            </Typography>
            <Divider variant="middle" sx={{ width: "400px" }} />
          </Stack>
          <Stack direction="row" spacing={18}>
            <Container
              align="center"
              sx={{ width: { xs: "400px", sm: "700px", md: "1000px" } }}
            >
              <Typography variant="h6">
                We want to share all the wonderful places in Cambodia to
                everyone, so that when tourists or our people ourseleves find
                places to go, they can easily find one that they are satisfied
                with price, vibes of that place, safety, and so on. However, our
                work alone is not enough to cover every wonderful places, so
                please help us share any places you visit or write about your
                experiences visiting there here.
              </Typography>
            </Container>
          </Stack>
        </Stack>
        <Stack>
          <Stack justifyContent="center" alignItems="center">
            <Typography
              className={classes.Title1}
              variant="h5"
              textAlign="center"
              marginTop="20px"
            >
              Our Success Team
            </Typography>
            <Divider variant="middle" sx={{ width: "400px" }} />
          </Stack>
          <Stack
            justifyContent="center"
            alignItems="center"
            style={{
              paddingTop: "30px",
            }}
          >
            <MembersCard />
          </Stack>
        </Stack>
        <Stack spacing={6}>
          <Stack justifyContent="center" alignItems="center">
            <Typography
              sx={{ marginTop: "20px" }}
              variant="h4"
              textAlign="center"
            >
              Vision Statement
            </Typography>
            <Divider variant="middle" sx={{ width: "400px" }} />
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={18}
          >
            <Typography
              textAlign="center"
              variant="h5"
              sx={{
                width: { xs: "350px", sm: "700px", md: "1000px" },
                color: "#008058",
              }}
            >
              To be the first thing that comes to people's mind when they seek
              place to go or visit
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </div>
  );
}
