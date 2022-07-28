import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useRecoilState } from "recoil";
import { contentDataState } from "../../../states/contentState";

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

const kindArray = ["peaceful", "indoor", "modern", "history", "nature"];
const provincesArray = [
  "Phnom Penh",
  "Banteay Meanchey",
  "Battambang",
  "Kampong Cham",
  "Kampong Chnang",
  "Kampong Speu",
  "Kampong Thom",
  "kampot",
  "Kandal",
  "Koh Kong",
  "Kratié",
  "Mondulkiri",
  "Preah Vihear",
  "Prey Veng",
  "Pursat",
  "Ratanak Kiri",
  "Siem Reap",
  "Preah Sihanouk",
  "Stung Treng",
  "Svay Rieng",
  "Takéo",
  "Oddar Meanchey",
  "Kep",
  "Pailin",
  "Tboung Khmum",
];

function getStyles(name, provincesName, theme) {
  return {
    fontWeight:
    provincesName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Provinces() {
  const theme = useTheme();
  const [provincesName, setProvincesName] = React.useState([]);
  const [contentData, setContentData] = useRecoilState(contentDataState)
  const handleChange = (e) => {
    let kinds = { kindofplaces: e.target.value }
    setProvincesName(e.target.value)
    console.log("kind name", provincesName)
    setContentData({ ...contentData, ...kinds })
    console.log('contentData', contentData)
   
  };
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, height: 384 }}>
        <InputLabel id="demo-multiple-chip-label"> Where is this place?</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          defaultOpen={true}
          value={provincesName}
          onChange={handleChange}
          input={
            <OutlinedInput id="select-multiple-chip" label=" Where is this place?" />
          }
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value, index) => (
                <Chip key={index} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {provincesArray.map((name, index) => (
            <MenuItem
              key={index}
              value={name}
              style={getStyles(name, provincesName, theme)}
            >
              {name[0].toUpperCase() + name.substring(1)}
            </MenuItem>
          ))}
        </Select>
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

const provincesArray = [
  "Phnom Penh",
  "Banteay Meanchey",
  "Battambang",
  "Kampong Cham",
  "Kampong Chnang",
  "Kampong Speu",
  "Kampong Thom",
  "kampot",
  "Kandal",
  "Koh Kong",
  "Kratié",
  "Mondulkiri",
  "Preah Vihear",
  "Prey Veng",
  "Pursat",
  "Ratanak Kiri",
  "Siem Reap",
  "Preah Sihanouk",
  "Stung Treng",
  "Svay Rieng",
  "Takéo",
  "Oddar Meanchey",
  "Kep",
  "Pailin",
  "Tboung Khmum",
];

function getStyles(name, provincesName, theme) {
  return {
    fontWeight:
      provincesName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Provinces() {
  const theme = useTheme();
  const [provincesName, setProvincesName] = React.useState("");
  const [contentData,setContentData]= useRecoilState(contentDataState)
  const handleChange = (e) => {
   
    let province = { region: e.target.value };
    setPersonName(e.target.value);
    setContentData({...contentData,...province})
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
            multiple
            color="secondary"
            value={provincesName}
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
           
            {provincesArray.map((name) => (
              <MenuItem
                key={name}
                value={name}
                 style={getStyles(name, provincesName, theme)}
              >
                {name[0].toUpperCase() + name.substring(1)}
              </MenuItem>
            ))}
          </Select>
        </ThemeProvider>
      </FormControl>
    </div>
  );
}
*/