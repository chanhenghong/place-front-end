import React from "react";
import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FAVORITE } from "../../../web-admin/_mock_/Favorite";
import { CardContent, Card, CardMedia, Typography, Grid } from "@mui/material";
import { CardActionArea } from "@mui/material";

const Content = () => {
  return (
    <>
      <Grid container spacing={2} justifyContent="space-around">
        <Grid item xs={12}>
          <Typography variant="h6">
            <b>Places</b>
          </Typography>
        </Grid>

        {FAVORITE.map((item) => (
          <Grid item key={item.id}>
            <Card
              sx={{
                width: "346px",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="215"
                  width="346"
                  image={item.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Content;
