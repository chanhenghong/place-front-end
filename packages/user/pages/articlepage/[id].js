import { Container, Grid, Typography, Stack } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { fireStore } from "../../services/firebase";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Create from "@mui/icons-material/Create";
import { useRecoilValue } from "recoil";
import { idRout } from "../../states/userState";
import PhotoLayout from "../../components/presentations/PhotoLayout";
import Comment from "../../components/presentations/CommentNew";
import LinearWithValueLabel from "../../components/containers/LinearProgressReview";
import Articles from "../../components/presentations/ContentContainer/Articles";
const ArticlePage = () => {
  const laptop = useMediaQuery("(min-width:1200px)");
  const router = useRouter();
  const articleId = router.query.id;
  const [articlePages, SetArticlePages] = React.useState([]);

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

  return (
    <>
      {articlePages
        .filter((item) => item.id === articleId)
        .map((item) => (
          <div key={item.title}>
            <Grid container justifyContent="center">
              <Grid item xs={4}>
                <img
                  style={{
                    width: "100%",
                    height: "300px",

                    objectFit: "cover",
                  }}
                  src={item.url[0]}
                />
              </Grid>
              <Grid item xs={4} style={{ width: "30vw" }}>
                <img
                  style={{
                    width: "100%",
                    height: "300px",
                    margin: "auto",
                    objectFit: "cover",
                  }}
                  src={item.url[1]}
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  style={{
                    width: "100%",
                    height: "300px",
                    margin: "auto",
                    objectFit: "cover",
                  }}
                  src={item.url[2]}
                />
              </Grid>
            </Grid>
            <Stack direction="row">
              <Container
                maxWidth="lg"
                sx={{ marginLeft: { md: "80px" }, flex: 2 }}
              >
                <Typography
                  sx={{
                    margin: "20px 20px 20px 0",
                    fontSize: { xs: "1.2em", sm: "2.5em" },
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Typography>
                <Grid container sx={{ marginBottom: "20px" }}>
                  {/* <Typography style={{ marginBottom: "20px" }}> */}
                  <Grid item lg={3} md={3} sm={4.5} xs={6}>
                    <span style={{ verticalAlign: "middle" }}>
                      <AccessTimeIcon />
                    </span>
                    <span> {new Date(item.datetime).toLocaleString()}</span>
                  </Grid>
                  <Grid item lg={3} md={5} sm={5} xs={6}>
                    <span
                      style={{
                        verticalAlign: "middle",
                        // margin: "0 5px 0 20px",
                      }}
                    >
                      <Create />
                    </span>
                    <span> {item.name}</span>
                  </Grid>
                  {/* </Typography> */}
                </Grid>
                <Typography
                  align="justify"
                  variant="body1"
                  sx={{ fontSize: { xs: "15px", sm: "20px" } }}
                >
                  {item.upperContent}
                </Typography>

                <PhotoLayout arrayUrl={item.url} />

                <Typography
                  align="justify"
                  variant="body1"
                  sx={{ fontSize: { xs: "15px", sm: "20px" } }}
                >
                  {item.lowerContent}
                </Typography>
                <Typography
                  sx={{
                    margin: "40px 0",
                    fontSize: { xs: "20px", sm: "25px" },
                  }}
                >
                  Detail
                </Typography>
                <div>
                  <Link href="#">
                    <a
                      style={{
                        fontSize: "20px",
                        color: "blue",
                        textDecoration: "underline",
                      }}
                    >
                      Korn Café
                    </a>
                  </Link>
                </div>
                <br />
                <LinearWithValueLabel />
                <br />
                <Comment idRout={articleId} />
              </Container>
              {laptop && (
                <Container sx={{ flex: 1, marginTop: "0px" }}>
                  {" "}
                  <div
                    style={{
                      position: "sticky",
                      top: 70,
                      width: 400,
                      height: 200,
                    }}
                  >
                    <Typography variant="body1">
                      Follow us on Facebook
                    </Typography>

                    <iframe
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FPlaces-%E1%9E%91%E1%9E%B8%E1%9E%80%E1%9E%93%E1%9F%92%E1%9E%9B%E1%9F%82%E1%9E%84-100266045831863%2F&tabs=timeline&width=400&height=100&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=335841394721295"
                      width="400"
                      height="130"
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen="true"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                </Container>
              )}
            </Stack>
            <Grid sx={{ marginLeft: "80px", marginRight: "80px" }}>
              <Articles />
            </Grid>
          </div>
        ))}
    </>
  );
};

export default ArticlePage;
