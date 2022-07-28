import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { contentDataState } from "../../../states/contentState";
import { useRecoilState } from "recoil";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((themes) => ({
  SelectField: {
    m: 1,
    width: 300,
    height: 384,
    [themes.breakpoints.down('xs')]:{
      m: 1,
      width: 260,
      height: 384,
    }
  },
}));
const themes = createTheme({
  palette: {
    secondary: {
      main: "#008058",
    },
    input: {
      color: "white",
    },
  },
});

const ITEM_HEIGHT = 74;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const priceArray = ["Free", "$", "$$", "$$$"];


export default function Provinces() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState("");
  const [contentData,setContentData]= useRecoilState(contentDataState)

  const handleChange = (e) => {
    console.log("Kind",e.target.value)
    let province = { province: e.target.value };
    setPersonName(e.target.value);
    //let data = JSON.parse(localStorage.getItem("dataStorage"));
    //data = { ...data, ...province };
    //localStorage.setItem("dataStorage", JSON.stringify(data));
    setContentData({...contentData,region:e.target.value.toLowerCase().replaceAll(' ','')})
    console.log('contentData',contentData)
   // alert(e.target.value.toLowerCase().replaceAll(' ',''))
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, height: 384 }}>
        <ThemeProvider theme={themes} color="white">
          <InputLabel id="demo-multiple-chip-label">
            Where is this place?{" "}
          </InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            defaultOpen={true}
            color="secondary"
            // value={provincesName}
            onChange={handleChange}
            input={
              <OutlinedInput
                id="select-multiple-chip"
                label="Where is this place?"
              />
            }
            renderValue={(value) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                <Chip key={value} label={value} />
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {/* {console.log("Provinces:", provincesName)} */}
            {priceArray.map((name) => (
              <MenuItem
                key={name}
                value={name}
                // style={getStyles(name, provincesName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </ThemeProvider>
      </FormControl>
    </div>
  );
}

/*
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { contentDataState } from "../../../states/contentState";
import { useRecoilState } from "recoil";
const themes = createTheme({
  palette: {
    secondary: {
      main: "#008058",
    },
    input: {
      color: "white",
    },
  },
});

const ITEM_HEIGHT = 74;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const priceArray = ["Free", "$", "$$", "$$$"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Price() {
  const classes= useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState("");
  const [contentData, setContentData]= useRecoilState(contentDataState)

  const handleChange = (e) => {
   
    console.log(personName)
    setContentData({...contentData,region:personName})
    console.log('contentData',contentData)
   // alert(e.target.value.toLowerCase().replaceAll(' ',''))
  };

  return (
    <div>
      <FormControl className={classes.SelectField}>
        <ThemeProvider theme={themes} color="white">
          <InputLabel id="demo-multiple-chip-label">
            How is the price?{" "}
          </InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            defaultOpen={true}
            color="secondary"
            value={personName}
            onChange={handleChange}
            input={
              <OutlinedInput
                id="select-multiple-chip"
                label="Where is this place?"
              />
            }
            renderValue={(value) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                <Chip key={value} label={value} />
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {priceArray.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </ThemeProvider>
      </FormControl>
    </div>
  );
}
*/