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
        perPage: 4,
        breakpoints: {
          1430: {
            perPage: 3,
          },
          1090: {
            perPage: 2,
          },
          780: {
            perPage: 1,
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
                  width:{xs:"285px",sm:"335px"} ,
                  height:{xs:"255px",sm:"300px"} ,
                  borderRadius: "20px",
                  marginBottom: "20px",
                  boxShadow:"0px 0.7px 8px 0.7px #999",
                  "&:hover": {
                    boxShadow:"0px 0px 0px 0px" ,
                    transition: ' transform .2s', /* Animation */
                    transform: 'scale(0.96)',  
                    },
                
                }}
              >
                <ButtonBase
                  onClick={() =>
                    router.push("/articlepage/" + `${image.title}`)
                  }
                >
                  <CardActionArea>
                    <CardMedia
                      sx={{
                        // width:{xs:"235px",md:"335px"} ,
                        // height: "205px",
                        width:{xs:"285px",sm:"335px"} ,
                  height:{xs:"175px",sm:"205px"} ,
                        borderRadius: "10px 10px 0 0",
                      }}
                      component="img"
                      alt="green iguana"
                      image={image.url}
                    />
                    <CardContent sx={{ height: "205px" }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        fontSize="20px"
                        fontWeight="bold"
                        textAlign="center"
                        component="div"
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
