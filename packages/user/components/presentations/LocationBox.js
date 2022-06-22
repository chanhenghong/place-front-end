import * as React from "react";
import { Box, Stack, Paper } from "@mui/material";

export default function BoxLocation() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: "auto",
        },
        paddingTop: 4,
      }}
    >
      <Paper
        elevation={5}
        style={{ padding: 15, position: "relative", borderRadius: 20 }}
      >
        <Stack
          direction={{ md: "row", xs: "column" }}
          justifyContent="space-between"
        >
          <div>
            <div>
              <h3>Location</h3>
              <p>
                <b>Address: </b>Bridge 2, National Road 6A, Sangkat Prek Leap,
                Khan Chroy Changva, Phnom Penh
              </p>
            </div>

            <h3>Contact</h3>
            <p>
              <b>Telegram: </b> https://t.me/cadt_official
            </p>
            <p>
              <b>FaceBook Page: </b>Cambodia Academy of Digital Technology -
              CADT
            </p>
            <p>
              <b>Youtube: </b>CADT Research and Development
            </p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1453.7346185915628!2d104.91142413341484!3d11.653407755199483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310953bad45e4ee1%3A0x6c33cb023d508017!2sCADT%20-%20Innovation%20Center!5e1!3m2!1sen!2skh!4v1655475732021!5m2!1sen!2skh"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </div>
        </Stack>
      </Paper>
    </Box>
  );
}
