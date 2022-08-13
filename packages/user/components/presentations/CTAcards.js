import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {
  Box,
  Grid,
  CardHeader,
  CardContent,
  Typography,
  ButtonBase,
} from "@mui/material";
import { useRouter } from "next/router";
const CTAcard = () => {
  const router = useRouter();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <ButtonBase onClick={() => router.push("/map")}>
              <Card
                sx={{
                  height: { xs: 300, md: 374 },
                  position: "relative",
                  textAlign: "center",
                  borderRadius: 3,
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="374px"
                  image="/CTA1.jpg"
                />
                <CardContent
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: "70%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,0.8))",
                  }}
                >
                  <Typography
                    sx={{
                      marginTop: "30%",
                      fontFamily: "Work Sans",
                      fontStyle: "normal",
                      fontWeight: "1000",
                      letterSpacing: "-0.02em",
                      color: "white",
                    }}
                    variant="h5"
                  >
                    Find Ideal Places Near You through{" "}
                    <span style={{ color: "#D69F42", fontSize: "30px" }}>
                      Map
                    </span>
                  </Typography>
                </CardContent>
              </Card>
            </ButtonBase>
          </Grid>

          <Grid item xs={12} sm={6}>
            <ButtonBase onClick={() => router.push("/login")}>
              <Card
                sx={{
                  height: { xs: 300, md: 374 },
                  position: "relative",
                  textAlign: "center",
                  borderRadius: 3,
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="374px"
                  image="/CTA2.jpg"
                  sx={{ zIndex: -1 }}
                />
                <CardContent
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: "70%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundImage:
                      "linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,0.8))",
                  }}
                >
                  <Typography
                    sx={{
                      marginTop: "30%",
                      fontFamily: "Work Sans",
                      fontStyle: "normal",
                      fontWeight: "1000",
                      letterSpacing: "-0.02em",
                      color: "white",
                    }}
                    variant="h5"
                  >
                    <span style={{ color: "#D69F42", fontSize: "30px" }}>
                      Save
                    </span>{" "}
                    favorite places,{" "}
                    <span style={{ color: "#D69F42", fontSize: "30px" }}>
                      post
                    </span>{" "}
                    new place,{" "}
                    <span style={{ color: "#D69F42", fontSize: "30px" }}>
                      write
                    </span>{" "}
                    your own experience
                  </Typography>
                </CardContent>
              </Card>
            </ButtonBase>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CTAcard;
