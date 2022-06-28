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
  const [provincesName, setprovincesName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setprovincesName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
            value={provincesName}
            onChange={handleChange}
            input={
              <OutlinedInput
                id="select-multiple-chip"
                label="Where is this place?"
              />
            }
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {console.log("Provinces:", provincesName)}
            {provincesArray.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, provincesName, theme)}
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
