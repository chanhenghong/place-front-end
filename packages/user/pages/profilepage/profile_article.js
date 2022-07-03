import * as React from "react";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import FavoriteIcon from "@mui/icons-material/Favorite";
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
import {
  articlesPage,
  articlesVideo,
} from "../../web-admin/_mock_/articlesPage";
import { FAVORITE } from "../../web-admin/_mock_/Favorite";
import NavbarBeforeLogin from "../../components/containers/NavBarBeforeLogin";

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
const Profile_Article = () => {
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
                  style={{ textAlign: "center" , color: "#008058"}}
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
        <>
          <Typography variant="h6">
            <b>Places</b>
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent="space-evenly"
            direction="row"
          >
            {FAVORITE.map((items) => (
              <Grid item key={items.id} sx={{ marginBottom: 3 }}>
                <Card
                  sx={{
                    width: "250px",
                    borderRadius: "10px",
                    position: "relative",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      style={{
                        borderRadius: "10px",
                      }}
                      height="250"
                      component="img"
                      alt="place img"
                      image={items.img}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 1,
                        width: 250,
                        height: 250,
                        backgroundImage:
                          "linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,0.8))",
                      }}
                    ></div>
                    <span style={{ position: "absolute", right: 10, top: 10 }}>
                      <IconButton>
                        <FavoriteIcon color="error" />
                      </IconButton>
                    </span>
                    <div
                      style={{
                        position: "absolute",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: 600,
                        bottom: 32,
                        left: "7%",
                        width: 250,
                      }}
                    >
                      <div>{items.title}</div>
                      <div style={{ position: "absolute", left: 0 }}>
                        <Image
                          src="/pinWhite.png"
                          alt=""
                          height={20}
                          width={20}
                        />
                        <span style={{ fontWeight: 400 }}>
                          {items.province}
                        </span>
                      </div>
                    </div>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
            <div style={{ textAlign: "center", width: "100%" }}>
              <Button variant="contained" sx={{ backgroundColor: "#008058" }}>
                see more
              </Button>
            </div>
          </Grid>
        </>

        {/* article section */}
        <div>
          <Typography variant="h6">
            <b>Articles</b>
          </Typography>
          <Grid
            sx={{
              // flexGrow: 1,
              // position: "relative",
              top: "10px",
            }}
            container
            spacing={2}
            justifyContent="center"
            direction="row"
          >
            {articlesPage.map((items) => (
              <Grid
                key={items.name}
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                spacing={3}
              >
                <Card
                  className={classes.Card}
                  sx={{
                    width: "346px",

                    borderRadius: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <CardActionArea
                    onClick={() => router.push("/articlepage/" + `${items.id}`)}
                  >
                    <CardMedia
                      style={{
                        height: "215px",

                        borderRadius: "10px",
                      }}
                      component="img"
                      alt="green iguana"
                      image={items.url}
                    />
                    <CardContent sx={{ minWidth: 364, minHeight: 100 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        fontSize="20px"
                        textAlign="center"
                        component="div"
                      >
                        {items.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
          <div style={{ textAlign: "center" }}>
            <Button variant="contained" sx={{ backgroundColor: "#008058" }}>
              see more
            </Button>
          </div>
        </div>

        {/* Videos section */}
        <div>
          <Typography variant="h6">
            <b>Videos</b>
          </Typography>
          <Grid
            sx={{
              // flexGrow: 1,
              // position: "relative",
              top: "10px",
            }}
            container
            spacing={2}
            justifyContent="center"
          >
            {articlesVideo.map((items) => (
              <Grid
                key={items.name}
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                spacing={3}
              >
                <Card
                  className={classes.Card}
                  sx={{
                    width: "346px",
                    height: "290px",
                    borderRadius: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <ButtonBase
                    onClick={() => router.push("/articlepage/" + `${items.id}`)}
                  >
                    <CardActionArea>
                      <CardMedia
                        style={{
                          width: "346px",
                          height: "215px",

                          borderRadius: "10px",
                        }}
                        component="img"
                        alt="green iguana"
                        image={items.url}
                      />
                      <CardContent sx={{ minWidth: 364, minHeight: 100 }}>
                        <Typography
                          gutterBottom
                          variant="h5"
                          fontSize="20px"
                          textAlign="center"
                          component="div"
                        >
                          {items.title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </ButtonBase>
                </Card>
              </Grid>
            ))}
          </Grid>
          <div style={{ textAlign: "center" }}>
            <Button variant="contained" sx={{ backgroundColor: "#008058" }}>
              see more
            </Button>
          </div>
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

export default Profile_Article;
