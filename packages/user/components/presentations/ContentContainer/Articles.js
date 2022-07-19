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
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { articles } from "../../../web-admin/_mock_/articles";

const Articles = () => {
  return (
    <div>
      <span
        id="article"
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
          marginBottom: 14,
          fontFamily: "Work sans",
        }}
      >
        <b>Articles</b>
      </Typography>
      <Splide
        options={{
          perPage: 3,
          breakpoints: {
            1280: {
              perPage: 2,
            },
            900: {
              perPage: 1,
            },
          },

          pagination: false,
          drag: "free",
          padding: { right: 100 },
        }}
      >
        {articles.map((image, index) => {
          return (
            <SplideSlide key={index}>
              <Card
                sx={{
                  width: { xs: "115px", sm: "315px" },
                  height: { xs: "155px", sm: "315px" },
                  borderRadius: "20px",
                  marginBottom: "20px",
                }}
              >
                <ButtonBase
                  onClick={() => router.push("/articlepage/" + `${image.id}`)}
                >
                  <CardActionArea>
                    <CardMedia
                      sx={{
                        width: { xs: "115px", sm: "315px" },
                        height: { xs: "100px", sm: "240px" },
                        borderRadius: "10px 10px 0 0",
                      }}
                      component="img"
                      alt="green iguana"
                      image={image.url}
                    />
                    <CardContent
                      sx={{
                        width: { xs: "115px", sm: "315px" },
                      }}
                    >
                      <Typography
                        gutterBottom
                        fontWeight="bold"
                        textAlign="center"
                        component="div"
                        sx={{ fontSize: { xs: "9px", sm: "15px" } }}
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

export default Articles;
