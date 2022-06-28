import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

const Sucessful = () => {
  return (
    <div>
      <Box sx={{height: "400px"}}>
        <Image
          src="/PopUpCategories/Sucessful.svg"
          alt="Picture of the author"
          width={313.071}
          height={280.423}
        />
        <Typography sx={{fontSize: "22px", color: "#008058"}}>Sucessful !</Typography>
        <Typography sx={{fontSize: "18px", color: "#008058"}}>Please wait for us to review your materpiece. </Typography>
      </Box>
    </div>
  );
};

export default Sucessful;
