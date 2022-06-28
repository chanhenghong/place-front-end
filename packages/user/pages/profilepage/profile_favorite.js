import * as React from "react";

import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Link from "next/link";

import NavbarBeforeLogin from "../../components/containers/NavBarBeforeLogin";
import {
  Grid,
  Paper,
  Typography,
  Container,
  Card,
  CardActionArea,
  ButtonBase,
  CardMedia,
  CardContent,
  Button,
  IconButton,
} from "@mui/material";
import CakeIcon from "@mui/icons-material/Cake";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import CreateIcon from "@mui/icons-material/Create";
import Footer from "../../components/containers/Footer";
import { articlesPage } from "../../web-admin/_mock_/articlesPage";

const style = makeStyles({
  Card: {
    "&:hover": {
      color: "#008058",
    },
  },
});

const Img = styled("img")({
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  padding: 0,
  height: 200,
  borderRadius: 100,
});
const Profile_Favorite = () => {
  const classes = style();
  return (
    <>
      <NavbarBeforeLogin />
      <Container maxWidth="lg">
        <Typography variant="h6" marginTop="50px">
          <b>Your Profile</b>
        </Typography>
        <Paper
          // variant="outlined"
          elevation={5}
          sx={{
            p: 2,
            margin: "auto",
            // maxWidth: 1100,
            flexGrow: 1,
          }}
        >
          <Grid container direction="row">
            <Grid item container xs={11} sm={11} md={11.5}>
              <Grid
                item
                lg={5.5}
                md={5.5}
                sm={5.5}
                xs={11.5}
                sx={{ width: 400, height: 200 }}
              >
                <Img alt="complex" src="../working.jpeg" />
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                xs={11.5}
                container
                direction="column"
              >
                <Grid item sx={{ marginLeft: "27%" }}>
                  <b>Jayavarman VII</b>
                </Grid>

                <Grid
                  item
                  container
                  direction="row"
                  alignItems="center"
                  paddingTop="20px"
                  sx={{ marginLeft: "27%" }}
                >
                  <Grid item>
                    <CakeIcon />
                  </Grid>
                  <Grid item marginLeft="10px">
                    07-01-2004
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  paddingTop="20px"
                  sx={{ marginLeft: "27%" }}
                >
                  <Grid item>
                    <EmailIcon />
                  </Grid>
                  <Grid item marginLeft="10px">
                    aaa123@gmail.com
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  paddingTop="20px"
                  sx={{ marginLeft: "27%" }}
                >
                  <Grid>
                    <CallIcon />
                  </Grid>
                  <Grid item marginLeft="10px">
                    016-807-208
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <CreateIcon />
            </Grid>
          </Grid>
        </Paper>

        {/* selection button */}
        <Grid container direction="row" justifyContent="center" mb={2}>
          <Grid item xs={6}>
            <Link href="/profilepage/profile_article">
              <a>
                <StyledTypography
                  marginTop="50px"
                  style={{ textAlign: "center", color: "#008058" }}
                >
                  <b>Your Creation</b>
                </StyledTypography>
              </a>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link href="/profilepage/profile_favorite">
              <a>
                <StyledTypography
                  marginTop="50px"
                  style={{ textAlign: "center" }}
                >
                  <b>Favorite Lists</b>
                </StyledTypography>
              </a>
            </Link>
          </Grid>
        </Grid>
        {/* place section */}
        <div>
          <Grid
            sx={{
              flexGrow: 1,
              zIndex: 1050,
              position: "relative",
              top: "10px",
            }}
            container
            spacing={2}
            justifyContent="center"
          >
            <Grid item marginLeft="100px" marginRight="100px">
              <Grid container justifyContent="center" spacing={2}>
                {articlesPage.map((item) => (
                  <Grid
                    key={item.name}
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={4}
                    spacing={3}
                  >
                    <Grid container justifyContent="center">
                      <Card
                        className={classes.Card}
                        sx={{
                          width: "315px",
                          height: "334px",
                          borderRadius: "20px",
                          marginBottom: "20px",
                        }}
                      >
                        <ButtonBase
                          onClick={() =>
                            router.push("/articlepage/" + `${item.id}`)
                          }
                        >
                          <CardActionArea>
                            <CardMedia
                              style={{
                                width: "315px",
                                height: "235px",
                                borderRadius: "10px 10px 0 0",
                              }}
                              component="img"
                              alt="green iguana"
                              image={item.url}
                            />
                            <CardContent sx={{ minHeight: 100 }}>
                              <Typography
                                gutterBottom
                                variant="h5"
                                fontSize="19px"
                                textAlign="left"
                                component="div"
                              >
                                {item.title}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </ButtonBase>
                      </Card>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Footer />
    </>
  );
};

const StyledTypography = styled(Typography)`
  &:hover {
    text-decoration: underline;
  }
`;

export default Profile_Favorite;
