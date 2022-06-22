import {
    Typography,
    Card,
    ButtonBase,
    CardActionArea,
    CardMedia,
    CardContent,
    CardActions,
    Grid,
    Button,
  } from "@mui/material";
  import { placeBasedOnRegion } from "../web-admin/_mock_/placeBasedOnRegion";
  import Carousel from "react-multi-carousel";
  import "@splidejs/react-splide/css";
  import { Splide, SplideSlide } from "@splidejs/react-splide";
  import { useRecoilState, useRecoilValue } from "recoil";
  import { regionState } from "../states/recoilState";
  const PlaceBasedOnRegion = () => {
    const [region, setRegion]= useRecoilState(regionState)
    const regionValue= useRecoilValue(regionState)
    console.log(regionValue)
    return (
      <div>
        <span
          id="region"
          style={{
            position: "relative",
            top: "-90px",
            visibility: "hidden",
          }}
        ></span>
        <Typography
          variant="h5"
          sx={{
            opacity: "0.8",
            color: "#000",
            marginTop: { xs: "70px", sm: "98px" },
            marginBottom: "14px",
            fontFamily: "Work sans",
          }}
        >
          <b>Place based on Region</b>
        </Typography>
        <Splide
          options={{
            perPage: 5,
            breakpoints: {
              1430: {
                perPage: 4,
              },
              1090: {
                perPage: 3,
              },
              780: {
                perPage: 2,
              },
            },
            pagination: false,
            drag: "free",
          }}
        >
          {placeBasedOnRegion.map((image, index) => {
            return (
              <SplideSlide key={index}>
                <Card
                  sx={{
                    width: { xs: "160px", sm: "216px" },
                    height: { xs: "130px", sm: "190px" },
                    borderRadius: "16px",
                    marginBottom: "10px",
                    position: "relative",
                  }}
                >
                  <ButtonBase
                    onClick={() => setRegion(image.title)}
                  >
                    <CardActionArea>
                      <CardMedia
                        image={image.url}
                        sx={{
                          width: { xs: "160px", sm: "216px" },
                          height: { xs: "130px", sm: "190px" },
                        }}
                        component="img"
                        alt="green iguana"
                      />
                      <CardContent
                        sx={{
                          width: { xs: "160px", sm: "216px" },
                          height: { xs: "130px", sm: "190px" },
                          position: "absolute",
                          bottom: 1,
                          backgroundImage:
                            "linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,0.8))",
                        }}
                      >
                        <Typography
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            fontSize: { xs: "15px", sm: "19px" },
                          }}
                          gutterBottom
                          variant="h5"
                          textAlign="left"
                          component="div"
                          color="white"
                        >
                          {image.title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </ButtonBase>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    );
  };
  
  export default PlaceBasedOnRegion;
  