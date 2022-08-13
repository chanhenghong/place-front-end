import { makeStyles } from "@mui/styles";
import Footer from "../components/containers/Footer";
import CardInHomepage from "../components/presentations/ContentContainer/ContentContainer";
import Image from "next/image";
import { Typography, Button, Link } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
// import { motion } from "framer-motion";
import { Box } from "@mui/system";
import NavBarLandingPage from "../components/containers/NavBarLandingPage";

const useStyle = makeStyles({
  slogan: {
    display: "flex",
    lineHeight: "1",
  },
  subslogan: {
    lineHeight: "1",
  },
});

//this one is for Image if ot dak it won't load image from fire storage
const myLoader = ({ src, width, quality }) => {
  return `https://firebasestorage.googleapis.com/v0/b/places-99af3.appspot.com/o/places%2Fbdcab249b539707f25328a1b27670b54.webp?alt=media&token=ba1aeea8-dfba-48ca-8a64-81233f805edf${src}?w=${width}&q=${
    quality || 75
  }`;
};

export default function New() {
  const classes = useStyle();
  return (
    <div>
      {/* <motion.div
        className="nav"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
      ></motion.div> */}
      <NavBarLandingPage />

      {/*---------------Cover Photo--------------- */}
      <Box
        container
        sx={{
          marginLeft: { xs: "0", sm: "-13%", md: "-5%", lg: "0%" },
        }}
      >
        <Box
          sx={{
            width: { xs: 0, sm: "180px" },
            height: { xs: 0, sm: "280px" },
            position: "absolute",
            zIndex: -1,
            borderRadius: 90,
            overflow: "hidden",
            marginLeft: "68%",
            top: 200,
            border: "5.69142px solid #F8F8F8",
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
            display: { xs: "none", sm: "inline" },
          }}
        >
          <Image
            src="/homepageCoffee.jpeg"
            alt="coffee"
            layout="fill"
            sx={{
              boxSizing: "border-box",
              position: "absolute",
              background: "url(8Untitled-1-1280x720.png), #FFFFFF",
              border: "5.69142px solid #F8F8F8",
              borderRadius: 124.793,
              transform: "matrix(-1, 0, 0, 1, 0, 0)",
            }}
          />
        </Box>

        <Box
          sx={{
            float: "right",
            width: { xs: "100%", sm: "230px" },
            height: { xs: "390px", sm: "330px" },
            position: "absolute",
            zIndex: { xs: "0", sm: "-2" },
            borderRadius: { xs: "0px", sm: "120px" },
            overflow: "hidden",
            marginLeft: { xs: "0px", sm: "75.5%" },
            top: { xs: "50px", sm: "150px" },
            border: "5.69142px solid #F8F8F8",
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
            opacity: { xs: "0.3", sm: "100%" },
            display: "block",
          }}
        >
          <Image layout="fill" src="/homepageKhmer.jpg" alt="flag" />
        </Box>
      </Box>

      {/* ---------------------Homepage body--------------------- */}
      <div style={{ marginLeft: "8%", marginRight: "8%" }}>
        <div className={classes.slogan}>
          <div>
            <div className={classes.subslogan}>
              <Typography
                sx={{
                  fontFamily: "Courgette",
                  color: "#008058",
                  fontSize: { xs: 45, sm: 55, lg: "75px" },
                  lineHeight: { xs: 0.3, sm: 0.75 },
                  marginTop: "140px",
                  letterSpacing: -1,
                }}
              >
                Place,
              </Typography>
              <br />
              <Typography
                sx={{
                  fontSize: { xs: 18, sm: 30, lg: 35 },
                  fontFamily: "Work Sans",
                  lineHeight: "1",
                  letterSpacing: -1,
                  color: "rgba(0, 0, 0, 0.62)",
                }}
              >
                {" "}
                where you can easily find where to go
              </Typography>
            </div>
            <Typography
              sx={{
                fontSize: { xs: 18, sm: 25, lg: 30 },
                fontFamily: "Work Sans",
                color: "rgba(0, 0, 0, 0.62)",
                letterSpacing: -1,
                lineHeight: "1.3",
                marginTop: { xs: "10px", sm: "10%" },
              }}
            >
              Both City & Province, find your satisfied destination. <br /> No
              more stressing over where to go.
            </Typography>
          </div>

          <br />
        </div>
        {/* </div> */}

        <div container className={classes.search}>
          <Link
            href="/filterPage"
            sx={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <Button
              sx={{
                zIndex: "none",
                position: "none",
                width: { xs: "70vw", md: "35vw" },
                height: { xs: "35px", md: "45px" },
                marginTop: "10px",
                borderRadius: "16px",
                backgroundColor: "#008058",
                boxShadow: {
                  xs: "3px 3px 0px 0px #1B6D54",
                  sm: "3px 3px 0px 0px  #1B6D54",
                },
                textTransform: { xs: "none", sm: "uppercase" },
                // textSize: { xs: 18, md: "60px" },
                textSizeAdjust: "80%",
                "&:hover": {
                  backgroundColor: "#014731",
                },
              }}
              variant="contained"
              endIcon={
                <FilterListIcon
                  sx={{
                    marginLeft: { xs: "20px", md: "100px" },
                  }}
                />
              }
            >
              {" "}
              Filter your kind of place here{" "}
            </Button>
          </Link>
        </div>
        <CardInHomepage />
      </div>
      <Footer></Footer>
    </div>
  );
}
