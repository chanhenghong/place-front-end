import React from "react";
import Image from "next/image";
import Content from "../../components/presentations/ContentContainer/Content";
import { contentData } from "./../../web-admin/_mock_/contentData";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";
import { fireStore } from "../../services/firebase";
import FilterPagesBeforeLOgin from "../filter_before_login";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import PhotoLayout from "../../components/presentations/PhotoLayout"
import LocationBox from "../../components/presentations/LocationBox";
import Comment from "../../components/presentations/CommentNew";
import Footer from "../../components/containers/Footer";
import {
  Container,
  ImageList,
  ImageListItem,
  Typography,
  Stack,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "../../components/containers/NavBarAfterLogin";
const ContentDetail = () => {
  const laptop = useMediaQuery("(min-width:1200px)");
  const [data, setData] = React.useState({});
  const router = useRouter();
  const placeId = router.query.contentId;
  console.log(placeId);
  const [horizontalCards, setHorizontalCards] = React.useState([]);
  React.useEffect(() => {
    fireStore.collection("contents").onSnapshot((snapshot) => {
      const horizontalCard = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      setHorizontalCards(horizontalCard);
    });
  }, []);
  
  

  return (
    <>
      <Navbar></Navbar>

      <Stack direction="row" >
        <Container
          maxWidth="lg"
          sx={{ marginLeft: "80px", marginTop:"80px", marginRight: "80px", flex: 2 }}
        >
          <Typography
            style={{
              margin: "20px 20px 20px 0",
              fontSize: "42px",
              textAlign: "left",
            }}
          >
            {contentData[2].title}
          </Typography>
          <Grid container sx={{ marginBottom: 5 }}>
            <Grid item xs={11}>
              <Image src="/pin.png" width={20} height={20} />
              <span style={{ paddingLeft: 5 }}>{contentData[2].province}</span>
            </Grid>
            <Grid item xs={1} sx={{ textAlign: "end" }}>
              <FavoriteIcon />
            </Grid>
          </Grid>
          <Box sx={{ width: "100%", height: 450, overflowY: "scroll" }}>
            <ImageList variant="masonry" cols={2} gap={8}>
              {contentData[2].src.map((item) => (
                <ImageListItem key={item}>
                  <img key={item} src={`${item}`} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>

          <div>
            <br></br>
            <br></br>
            <p>
              sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. making this the first
              true generator on the internet. it uses a dictionary of over 200
              latin words, combined with a handful of model sentence structures,
              to generate lorem ipsum which looks reasonable. the generated
              lorem ipsum is therefore always free from repetition, injected
              humour
            </p>
          </div>
          <Grid container>
            <Grid
              item
              sx={{ flex: 1, width: "50%", borderRight: "1px solid #000" }}
            >
              <h4>Note</h4>
              <ul>
                <li>hello</li>
                <li>hi</li>
                <li>bonjour</li>
              </ul>
            </Grid>
            <Grid item sx={{ flex: 1, width: "50%", paddingLeft: "10px" }}>
              <h4>Proximity</h4>
              <ul>
                <li>hello</li>
                <li>hi</li>
                <li>bonjour</li>
              </ul>
            </Grid>
          </Grid>
          <div>
            <div>
              <LocationBox />
            </div>
          </div>
          <div>
            {/* 
            {horizontalCards.filter((item)=>item.id==placeId)
                            .map((item) =>(
                                <Comment idRout={placeId} />
                            ))}*/}
            <br />
            {/* <Comment idRout={placeId} /> */}
          </div>
        </Container>
        {laptop && (
          <Container sx={{ flex: 1, marginTop: "150px" }}>
            {" "}
            <div
              style={{
                position: "sticky",
                top: 70,
                width: 400,
                height: 200,
              }}
            >
              <Typography variant="body1">Follow us on Facebook</Typography>

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
        <Content />
        {/* <Comment></Comment>*/}
      </Grid>
      <Footer></Footer>
    </>
  );
};

export default ContentDetail;
