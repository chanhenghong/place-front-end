import React from "react";
import Image from "next/image";
import Content from "../components/presentations/ContentContainer/Content";
import { contentData } from "../web-admin/_mock_/contentData";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";
import { fireStore } from "../services/firebase";

import FavoriteIcon from "@mui/icons-material/Favorite";
import PhotoLayout from "../components/presentations/PhotoLayout";
import LocationBox from "../components/presentations/LocationBox";
import Comment from "../components/presentations/CommentNew";
import {
  Container,
  ImageList,
  ImageListItem,
  Typography,
  Stack,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import { cadt } from "../web-admin/_mock_/cadt";
import NavbarBeforeLogin from "../components/containers/NavBarBeforeLogin";
// import Navbar from "../../components/containers/NavBar";
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
      {/* <Navbar></Navbar> */}
      <NavbarBeforeLogin></NavbarBeforeLogin>
      <Stack direction="row">
        <Container
          maxWidth="lg"
          sx={{ marginLeft: "80px", marginRight: "80px", flex: 2 }}
        >
          <Typography
            style={{
              margin: "20px 20px 20px 0",
              fontSize: "2.5em",
              textAlign: "left",
            }}
          >
            Cambodia Academy of Digital Technology
          </Typography>
          <Grid container sx={{ marginBottom: 5 }}>
            <Grid item xs={11}>
              <Image src="/pin.png" width={20} height={20} />
              <span style={{ paddingLeft: 5 }}>Phnom Penh</span>
            </Grid>
            <Grid item xs={1} sx={{ textAlign: "end" }}>
              <FavoriteIcon />
            </Grid>
          </Grid>
          <Box
            sx={{
              width: "100%",
              height: 450,
              overflowY: "scroll",
              border: "5px lightgrey solid",
              borderRadius: "12px",
            }}
          >
            <ImageList variant="masonry" cols={2} gap={8}>
              {cadt.map((item) => (
                <ImageListItem key={item.id}>
                  <img key={item} src={item.img} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>

          <div>
            <br></br>
            <br></br>
            <Typography
              variant="h5"
              sx={{ marginBottom: 1, marginTop: 2, fontWeight: "bold" }}
            >
              About Digital Innovation Center
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1, fontSize: 20 }}>
              Digital Innovation Center strives to be a premier government
              agency to support the digital technology and innovation ecosystem.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1, fontSize: 20 }}>
              {" "}
              DIC plays an important role to empower digital entrepreneurs and
              the digital startup ecosystem as well as connecting between
              academia, industry, and government institution and identify
              digital experts to help the public and private.
            </Typography>

            <Typography
              variant="h5"
              sx={{ marginBottom: 1, marginTop: 4, fontWeight: "bold" }}
            >
              Mission
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1, fontSize: 20 }}>
              To promote digital innovation To develop a digital startup
              ecosystem To connect between academia, industry, and government
              Functions Co-Innovation Space It’s a place to incubate and
              accelerate digital startups, and a hub of digital ecosystem
              players.
            </Typography>
            <Typography
              variant="h5"
              sx={{ marginBottom: 1, marginTop: 4, fontWeight: "bold" }}
            >
              Makerspace
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1, fontSize: 20 }}>
              This space is open to kids, adults, and entrepreneurs with maker
              equipment including 3D printers, laser cutters, CNC machines,
              soldering irons, electronic tools, power tools, etc.
            </Typography>
            <Typography
              variant="h5"
              sx={{ marginBottom: 1, marginTop: 4, fontWeight: "bold" }}
            >
              Event Space
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 1, fontSize: 20 }}>
              {" "}
              We offer event venues for tech conferences and exhibitions,
              ecosystem meetings, networking events, upskill workshops, and
              press conferences, etc.
            </Typography>
            <br></br>
          </div>
          <Grid container>
            <Grid
              item
              sx={{ flex: 1, width: "50%", borderRight: "1px solid #000" }}
            >
              <h4>Note</h4>
              <ul>
                <li>Wear mask & take alcohol</li>
              </ul>
            </Grid>
            <Grid item sx={{ flex: 1, width: "50%", paddingLeft: "10px" }}>
              <h4>Proximity</h4>
              <ul>
                <li>1 km from Borey Peng Huoth The Star Munirah</li>
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
      </Grid>
    </>
  );
};

export default ContentDetail;
