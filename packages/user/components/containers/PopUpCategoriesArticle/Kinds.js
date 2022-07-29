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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Kinds() {
  const theme = useTheme();
  const [kindName, setKindName] = React.useState([]);
  const [contentData, setContentData] = useRecoilState(contentDataState)
  const handleChange = (e) => {
    let kinds = { kindofplaces: e.target.value }
    setKindName(e.target.value)
    console.log("kind name", kindName)
    setContentData({ ...contentData, ...kinds })
    console.log('contentData', contentData)
   
  };

  return (
 
      <FormControl sx={{ m: 1, width: 300, height: 384 }}>
        <InputLabel id="demo-multiple-chip-label">What kind of place?</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          defaultOpen={true}
          value={kindName}
          onChange={handleChange}
          input={
            <OutlinedInput id="select-multiple-chip" label="What kind of place?" />
          }
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value,index) => (
                <Chip key={index} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {kindArray.map((name, index) => (
            <MenuItem
              key={index}
              value={name}
              style={getStyles(name, kindName, theme)}
            >
              {name[0].toUpperCase() + name.substring(1)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

  );
}
