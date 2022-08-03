import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const images = [
  {
    url: " AngkorWat.jpg",
    title: "AngkorWat",
    width: "24%",
  },
  {
    url: "knongpar.jpeg",
    title: "Bokor Mountain",
    width: "24%",
  },
  {
    url: "pr_vattanac_tower_revised_c_trp_farrells_699x612.ashx_.jpg",
    title: "Vattanac Tower",
    width: "24%",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/places-99af3.appspot.com/o/places%2F%20Knong%20Psa.png?alt=media&token=99753e48-f3c2-4a98-922b-ff7eb872dff3",
    title: "Knorng Phsar",
    width: "24%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 500,
  marginTop: 10,
  [theme.breakpoints.down("sm")]: {
    // width: "100% !important", // Overrides inline-style
    height: 280,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      //border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "left",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function ButtonBases() {
  return (
    <Stack direction="row">
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
          minWidth: 300,
          width: "100%",
        }}
      >
        {images.map((image) => (
          <ImageButton
            focusRipple
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                color="inherit"
                sx={{
                  position: "relative",
                  p: 2,
                  pt: 2,
                  fontSize: {xs:9, sm: 15},
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
              <ArrowRightAltIcon
                sx={{ marginLeft: "0px", fontSize: {xs: 10,sm: 40}, marginBottom:{xs: "15px", sm:  "5px"} }}
              ></ArrowRightAltIcon>
            </Image>
          </ImageButton>
        ))}
      </Box>
    </Stack>
  );
}
