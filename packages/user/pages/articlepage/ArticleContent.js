import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  ButtonBase,
  Grid,
  Stack,
  ToggleButtonGroup,
} from "@mui/material";
import Footer from "../../components/containers/Footer";
import { fireStore } from "../../services/firebase";
import { useRouter } from "next/router";
import Multivideo from "../../components/MultipleItem";
import { makeStyles } from "@mui/styles";
import MuiToggleButton from "@mui/material/ToggleButton";
import { styled } from "@mui/material/styles";
import { userDropdown } from "../../components/presentations/NavbarAfterLogin/DropdownItem";
import NavbarAfterLogin from '../../components/containers/NavBarAfterLogin'
const ToggleButton = styled(MuiToggleButton)({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "#000",
    backgroundColor: "#15A2B8",
  },
});

const style = makeStyles({
  Card: {
    "&:hover": {
      color: "#15A2B8",
    },
  },
});
const ArticleContentPage = () => {
  const classes = style();
  const [articlePages, SetArticlePages] = React.useState([]);
  const router = useRouter();
  React.useEffect(() => {
    fireStore.collection("articleContent").onSnapshot((snapshot) => {
      const articlePage = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      console.log(articlePage);
      SetArticlePages(articlePage);
    });
  }, []);

  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <>
       <NavbarAfterLogin />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack
          spacing={4}
          style={{
            backgroundColor: "rgba(88, 125, 114,0.32)",
            height: "700px",
            width: "100vw",
            borderRadius: "10px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Multivideo />

          <Stack direction="row" justifyContent="center">
            <ToggleButtonGroup exclusive>
              <ToggleButton
                value="left"
                sx={{
                  height: "50px",
                  width: "10vw",
                  borderRadius: "10px 0 0 0",
                  border: "none",
                  textDecoration: "underline",
                  fontWeight: "bold",
                  color: "#000",
                }}
                onClick={() => router.push("/articlepage/ArticleContent")}
              >
                Article
              </ToggleButton>
              <ToggleButton
                value="right"
                sx={{
                  height: "50px",
                  width: "10vw",
                  borderRadius: "0 10px 0 0",
                  border: "none",
                }}
                onClick={() => router.push("/articlepage/ArticleContentVideo")}
              >
                Video
              </ToggleButton>
            </ToggleButtonGroup>
          </Stack>
        </Stack>
        <Grid
          sx={{
            flexGrow: 1,
            zIndex: 1050,
            position: "relative",
            top: "-130px",
          }}
          container
          spacing={2}
          justifyContent="center"
        >
          <Grid item marginLeft="100px" marginRight="100px">
            <Grid container justifyContent="center" spacing={spacing}>
              {articlePages
                .sort(function (a, b) {
                  return b.time - a.time;
                })
                .map((item) => (
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
                          width: "422px",
                          height: "334px",
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
                                width: "422px",
                                height: "235px",
                              }}
                              component="img"
                              alt="green iguana"
                              image={item.url[0]}
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

        
        <div style={{ marginTop: "-130px" }}>
        
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ArticleContentPage;
