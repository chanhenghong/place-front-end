import { Container } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button, Stack, Divider } from "@mui/material";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import { provinces } from "../web-admin/_mock_/place";
const provinces = [
  {
      title:"Knorng Psar",
      contentText:"Knorng Psar Mountain is a large forested area located in Tang Bompong Village, Ta Sal Commune, Oral District, Kampong Spue Province. Knorng Psar is a three-way intersection that connects three provinces: Koh Kong, Kampong Spue, and Pursat. Knorng Psar is an area rich in dense forest, high valleys, lush pine forests, and rich with a variety of rare wildlife.",
      isFavorite:false,
      image:"https://avytravel.com/wp-content/uploads/2020/06/P1040924-1024x769.jpg"
  },
  {
    title: "Angkor Wat",
    contentText:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur impedit accusantium repellendus distinctio. Libero sint assumenda excepturi! Nesciunt atque ipsa quaerat id voluptas soluta molestiae, quasi odio, facilis earum culpa!",
    isFavorite: false,
    image:
      "https://cdn.britannica.com/49/94449-050-ECB0E7C2/Angkor-Wat-temple-complex-Camb.jpg",
  },
  {
    title: "Bayon",
    contentText:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur impedit accusantium repellendus distinctio. Libero sint assumenda excepturi! Nesciunt atque ipsa quaerat id voluptas soluta molestiae, quasi odio, facilis earum culpa!",
    isFavorite: false,
    image: "https://www.tour-cambodia.com/cdn/kh-public/bayon_temple_5d2d4832249f2b000dfc6974.jpg",
  },
];

const approvePost = () => {
  return (
    <div>
      <Container align="center">
        <Image
          src="/approve_image.jpeg"
          alt="Approve Image"
          width={700}
          height={150}
        />
      </Container>
      {provinces.map((province, index) => {
        return (
          <Paper
            variant="outlined"
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 1000,
              flexGrow: 1,
              borderColor: "silver",
              marginTop: 5,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm container justifyContent="center">
                <Grid item sx={{ width: 400, height: 200 }}>
                  <img src={province.image} alt={province.title} height={200} style={{borderRadius: "6px"}}/>
                </Grid>

                <Grid item xs container direction="column" spacing={2}>
                  <Grid item >
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {province.title}
                    </Typography>
                    <Typography variant="body2" gutterBottom paddingTop="50px">
                      {province.contentText}
                    </Typography>
                  </Grid>
                  <Grid item spacing={2}>
                    <Stack
                      direction="row"
                      divider={<Divider orientation="vertical" flexItem />}
                      spacing={2}
                    >
                      <Button
                        sx={{
                          cursor: "pointer",
                        }}
                        variant="outlined"
                        color="error"
                      >
                        DECLINE
                      </Button>
                      <Button
                        sx={{
                          cursor: "pointer",
                        }}
                        variant="contained"
                        color="success"
                      >
                        Accept
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </div>
  );
};
export default approvePost;
