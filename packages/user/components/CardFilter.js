import React from "react";
import Image from "next/image";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  IconButton,
  Button,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FAVORITE } from "../web-admin/_mock_/Favorite";

function CardFilter({ items }) {
  return (
    <Grid item key={items.id} sx={{ marginBottom: 8 }}>
      <Card
        sx={{
          width: "250px",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <CardActionArea>
          <CardMedia
            style={{
              borderRadius: "10px",
            }}
            height="250"
            component="img"
            alt="place img"
          
            image="https://images.unsplash.com/photo-1648737966769-98fa88fe66bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1400&q=60"
          />
          <div
            style={{
              position: "absolute",
              top: 1,
              width: 250,
              height: 250,
              backgroundImage:
                "linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,0.8))",
            }}
          ></div>
          <span style={{ position: "absolute", right: 10, top: 10 }}>
            <IconButton>
              <FavoriteIcon color="error" />
            </IconButton>
          </span>
          <div
            style={{
              position: "absolute",
              color: "white",
              fontSize: "16px",
              fontWeight: 600,
              bottom: 32,
              left: "7%",
            }}
          >
            <div>{items.title}</div>
            <div style={{ position: "absolute", left: 0 }}>
                {/*
              <Image src="/pinWhite.png" alt="" height={20} width={20} />
              <span style={{ fontWeight: 400 }}>{items.region}</span>
                */}
            </div>
          </div>
        </CardActionArea>
      </Card>
    </Grid>

  );
}

export default CardFilter;
