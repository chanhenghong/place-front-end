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
  ButtonBase,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
//import d from './../../pages/cadt'

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Router } from "next/router";
const Notes = ({ notes }) => {
  const theme = useTheme();
  return (
    <div>
      {/* <Link href={"./../../cadt"} >*/}
      <Card
        elevation={1}
        sx={{
          width: { xs: 170, sm: 251 },
          height: { xs: 150, sm: 251 },
          borderRadius: 4,
          marginLeft: 1,
          marginRight: 1,
        }}
      >
        <CardActionArea>
          <div style={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                paddingLeft: { xs: "125px", sm: "210px" },
              }}
            >
              <IconButton aria-label="add to favorites">
                <FavoriteBorderIcon sx={{ color: "white" }} />
              </IconButton>
            </Box>

            <CardMedia
              posititon="absolute"
              component="img"
              width="100%"
              image={notes.url[0]}
              sx={{ height: { xs: 150, sm: 251 } }}
            />

            <CardContent
              style={{
                width: "100%",
                height: { xs: 150, sm: 251 },
                position: "absolute",
                bottom: 1,
                backgroundImage:
                  "linear-gradient(359.59deg, #000000 0.31%, rgba(0, 0, 0, 0) 57.79%)",
              }}
            >
              <Typography
                style={{ position: "absolute", bottom: 16 }}
                sx={{
                  position: "absolute",
                  bottom: 16,
                  fontSize: { xs: 12, sm: 18 },
                }}
                gutterBottom
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
    </div>
  );
};

export default Notes;
