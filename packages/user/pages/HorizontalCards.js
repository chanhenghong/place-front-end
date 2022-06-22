import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button, Container } from "@mui/material";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { provinces } from "./../web-admin/_mock_/place";
import CardFilter from "../components/CardFilter";
import { FAVORITE } from "../web-admin/_mock_/Favorite";

const Img = styled("img")({
  margin: 0,
  padding: 0,
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function HorizontalCards() {
  const [colorHeart, setColorHeart] = React.useState("action");
  const addToFavorite = () => {
    localStorage.setItem("provinces", JSON.stringify(provinces[0]));
  };
  return (
    <div style={{ marginLeft: "8%", marginRight: "8%" }}>
      <Grid container mt={3} justifyContent="space-evenly" direction="row">
        {FAVORITE.map((items) => (
          <div key={items.id}>
            <CardFilter items={items} />
          </div>
        ))}
      </Grid>
    </div>
  );
}
