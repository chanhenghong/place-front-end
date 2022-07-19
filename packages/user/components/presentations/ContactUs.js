{
  /* - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - -
                                                    Import
     - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - */
}
import * as React from "react";
import { useRef } from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { contactUs } from "../../web-admin/_mock_/form";
import SendIcon from "@mui/icons-material/Send";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import GoldTextField from "./TextField/GoldTextField";
import { TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core";
{
  /* - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - -
                                                    Style
     - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - */
}
const themes = createTheme({
  palette: {
    secondary: {
      main: "#E09C26",
    },
    input: {
      color: "white",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  Picture: {
    width: "45ch",
    height: "auto",
    borderRadius: "15px",
    [theme.breakpoints.down("xs")]: {
      width: "30ch",
      height: "auto",
      borderRadius: "15px",
    },
  },
  TextField: {
    [theme.breakpoints.down("xs")]: {
      width: "20ch",
      marginTop: "15px",
    },
  },
  Message: {
    width: "58ch",
    marginTop: "40px",
    [theme.breakpoints.down("xs")]: {
      width: "33ch",
      marginTop: "15px",
    },
  },
  ButtonSubmit: {
    width: "60ch",
    backgroundColor: "#E09C26",
    marginTop: "40px",
    [theme.breakpoints.down("xs")]: {
      width: "33ch",
      backgroundColor: "#E09C26",
      marginTop: "40px",
    },
  },
}));

export default function ContactUs() {
  const form = useRef();
  const className = useStyles();
  {
    /* This function use to intergrate our form with emailjs */
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_milkdlj", //YOUR_SERVICE_ID
        "template_3m9pqwp", //YOUR_TEMPLATE_ID
        form.current,
        "user_f2AKKyqH0X45li6ojO6sV" //YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const { classes } = themes;
  const [value, setValue] = React.useState("");
  {
    /* This function use to set the new value into our hook after the user change something in our form*/
  }
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      ref={form}
      onSubmit={sendEmail}
    >
      <Grid
        container
        justifyContent="center"
        spacing={1}
        style={{ textAlign: "center" }}
      >
        <Grid item lg={12} xs={12}>
          <h3 style={{ color: "#0C9000" }}>Welcome!</h3>
        </Grid>
        {/* Preview the business card to our user */}
        <Grid item lg={12} xs={12}>
          <img className={className.Picture} src="/BusinessCard.png"></img>
        </Grid>
        <Grid item lg={12} sm={12}>
          <ThemeProvider theme={themes} color="white">
            {contactUs.map((item, index) => {
              return (
                <Grid item lg={12} xs={12} key={index}>
                  <GoldTextField
                    className={className.TextField}
                    label={item.label}
                    name={item.name}
                    type={item.type}
                    variant={item.variant}
                    color={"secondary"}
                    autoComplete={item.autoComplete}
                    onChange={handleChange}
                  ></GoldTextField>
                </Grid>
              );
            })}
          </ThemeProvider>
        </Grid>
        <Grid item lg={12} xs={12}>
          <ThemeProvider theme={themes} color="white">
            <TextField
              className={className.Message}
              id="message"
              label="Message"
              name="message"
              inputProps={{ style: { fontFamily: "Arial" } }}
              InputLabelProps={{ style: { color: "#E09C26" } }}
              multiline
              type="text"
              minRows={6}
              color="secondary"
              variant="filled"
              autoComplete="text"
            />
          </ThemeProvider>
        </Grid>
        {/* For this part is the buttons part with some messages to user*/}
        <Button
          className={className.ButtonSubmit}
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
        <Grid item lg={12} xs={12}>
          <h4 style={{ color: "#E09C26" }}>Thank You!</h4>
          <p style={{ color: "#E09C26" }}>For Contact Us!</p>
        </Grid>
      </Grid>
    </Box>
  );
}
