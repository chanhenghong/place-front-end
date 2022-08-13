import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Box, Grid, CardHeader, CardContent, Typography } from "@mui/material";

const WeekendCard = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                height: { xs: 300, md: 374 },
                position: "relative",
                textAlign: "center",
                borderRadius:3,
                "&:hover": {
                  boxShadow:"0px 0px 0px 0px" ,
                  transition: ' transform .2s', /* Animation */
                  transform: 'scale(0.96)',  
                  },
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="374px"
                image="/kirirom.jpg"
              />
              <CardContent
                sx={{
                  width: "100%",
                  height:"100%",
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
                  marginTop:"40%",
                  marginLeft:"0%",
                  fontFamily: "Work Sans",
                  fontStyle: "normal",
                  fontWeight: "1000",
                  letterSpacing: "-0.02em",
                  color:"white"
                }}
                variant="h5"
                >
                  Kirirom Park, Kampong Spue
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                height: { xs: 300, md: 374 },
                position: "relative",
                textAlign: "center",
                borderRadius:3,
                "&:hover": {
                  boxShadow:"0px 0px 0px 0px" ,
                  transition: ' transform .2s', /* Animation */
                  transform: 'scale(0.96)',  
                  },
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="374px"
                image="/samathiLake.jpg"
                sx={{ zIndex: -1 }}
              />
              <CardContent
                sx={{
                  width: "100%",
                  height:"100%",
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
                      marginTop:"40%",
                      fontFamily: "Work Sans",
                      fontStyle: "normal",
                      fontWeight: "1000",
                      letterSpacing: "-0.02em",
                      color:"white"
                    }}
                    variant="h5"
                  >
                     Samathi Lake, Phnom Penh
                  </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WeekendCard;
