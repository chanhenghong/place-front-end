import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  CardMedia,
  CardActionArea,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import d from './../../pages/cadt'

import FavoriteIcon from "@mui/icons-material/Favorite";
import { Router } from "next/router";
const Notes = ({ notes }) => {
  const theme = useTheme();
  return (
    <div>
      <Link href={"./../../cadt"}>
      <Card elevation={1} sx={{ maxWidth: 271 }} >
        <CardActionArea>
          <div style={{ position: "relative" }}>
            <IconButton
              style={{ position: "absolute", paddingLeft: "220px" }}
              aria-label="add to favorites"
            >
              <FavoriteIcon color="secondary" />
            </IconButton>
          
            <CardMedia
              posititon="absolute"
              component="img"
              width="100%"
              height="300px"
              image={notes.url[0]}


             
            />
 
            <CardContent
              style={{
                width: "100%",
                height: 237,
                position: "absolute",
                bottom: 1,
                backgroundImage:
                  "linear-gradient(359.59deg, #000000 0.31%, rgba(0, 0, 0, 0) 57.79%)",
              }}
            >
             
              <Typography
                style={{ position: "absolute", bottom: 16 }}
                sx={{ position: "absolute", bottom: 16 }}
                gutterBottom
                fontSize="18px"
                fontWeight={700}
                lineHeight="29px"
                textAlign="left"
                color="white"
                fontFamily="Work Sans"
               
              >
                {notes.title}
                
              </Typography>
            

            </CardContent>
          
           
          </div>
        </CardActionArea>
      </Card>
      </Link>
    </div>
  );
};

export default Notes;
