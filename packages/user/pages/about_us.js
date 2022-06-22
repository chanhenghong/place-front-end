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

export default function AboutUsPage() {
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
          <Typography variant="h4">We're here so</Typography>
          <Typography variant="h4" sx={{ color: "#008058" }}>
            You can find your satisfied place
          </Typography>
          <Divider variant="middle" sx={{ width: "400px" }} />
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Paper
            sx={{
              width: "1050px",
              height: "399px",
              backgroundColor: "#587D72",
              borderRadius: "30px",
              opacity: "70%",
            }}
            textAlign="center"
          >
            <Typography
              variant="h5"
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
            <Container align="center" sx={{ marginTop: "50px" }}>
              <img
                src="/PicCoverOfAboutUs.png"
                alt="Picture place team"
                width={800}
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
        marginTop="200px"
      >
        <Stack spacing={6}>
          <Stack justifyContent="center" alignItems="center">
            <Typography variant="h4" textAlign="center">
              Our Mission
            </Typography>
            <Divider variant="middle" sx={{ width: "400px" }} />
          </Stack>
          <Stack direction="row" spacing={18}>
            <Stack spacing={2}>
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
            </Stack>
            <Stack spacing={2}>
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
            </Stack>
          </Stack>
        </Stack>
        <Stack spacing={6}>
          <Stack justifyContent="center" alignItems="center">
            <Typography variant="h4" textAlign="center">
              Your Contributions
            </Typography>
            <Divider variant="middle" sx={{ width: "400px" }} />
          </Stack>
          <Stack direction="row" spacing={18}>
            <Typography variant="h6" sx={{ margin: "0px 300px 20px 300px" }}>
              We want to share all the wonderful places in Cambodia to everyone,
              so that when tourists or our people ourseleves find places to go,
              they can easily find one that they are satisfied with price, vibes
              of that place, safety, and so on. However, our work alone is not
              enough to cover every wonderful places, so please help us share
              any places you visit or write about your experiences visiting
              there here.
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Stack justifyContent="center" alignItems="center">
            <Typography variant="h4" textAlign="center">
              Our Success Team
            </Typography>
            <Divider variant="middle" sx={{ width: "400px" }} />
          </Stack>
          <Stack
            style={{
              textAlign: "center",
              width: "90%",
              paddingLeft: "10%",
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
          <Stack direction="row" spacing={18}>
            <Typography
              textAlign="center"
              variant="h4"
              sx={{ margin: "0px 300px 20px 300px", color: "#008058" }}
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
