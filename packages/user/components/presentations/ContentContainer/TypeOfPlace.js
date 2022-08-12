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

import { typeOfPlace } from "../../../web-admin/_mock_/TypeOfPlace";
import Router from 'next/router'
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const TypeOfPlace = () => {
  return (
    <div>
      <span
        id="type"
        style={{
          position: "relative",
          top: "-90px",
          visibility: "hidden",
        }}
      ></span>
      <Typography
        variant="h5"
        style={{
          opacity: "0.8",
          color: "#000",
          marginTop: 50,
          marginBottom: "14px",
          fontFamily: "Work sans",
        }}
      >
        <b>Type Of Places</b>
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
        {typeOfPlace.map((image, index) => {
          return (
            <SplideSlide key={index}>
              <Card
                sx={{
                  width: { xs: "160px", sm: "216px" },
                  height: { xs: "130px", sm: "190px" },
                  borderRadius: "16px",
                  marginBottom: "10px",
                  position: "relative",
                  "&:hover": {
                    boxShadow:"0px 0px 0px 0px" ,
                    transition: ' transform .2s', /* Animation */
                    transform: 'scale(0.96)',  
                    },

                }}
              >
                <ButtonBase
                  onClick={() => Router.push("./filterPage")}
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

export default TypeOfPlace;
