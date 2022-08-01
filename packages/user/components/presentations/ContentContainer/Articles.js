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
        {articles.map((image, index) => {
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
                  onClick={() => router.push("/articlepage/" + `${image.id}`)}
                >
                  <CardActionArea>
                    <CardMedia
                      sx={{
                        width: { xs: "160px", sm: "216px" },
                        height: { xs: "100px", sm: "140px" },
                        borderRadius: "10px 10px 0 0",
                      }}
                      component="img"
                      alt="green iguana"
                      image={image.url}
                    />
                    <CardContent
                      sx={{
                        width: { xs: "160px", sm: "216px" },
                      }}
                    >
                      <Typography
                        gutterBottom
                        textAlign="center"
                        component="div"
                        sx={{ fontSize: { xs: "8px", sm: "12px" } }}
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
