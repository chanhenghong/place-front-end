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

const typePlaceArray = ["Restuarant", "Beach", "Cafe", "Bakery", "Mall"];

function getStyles(name, typeName, theme) {
  return {
    fontWeight:
    typeName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function TypePlaces() {
  const theme = useTheme();
  const [typeName, setTypeName] = React.useState([]);
  const [contentData, setContentData]= useRecoilState(contentDataState)
  const handleChange = (e) => {
   let typeofplaces={typeofplaces:e.target.value}
   setTypeName(e.target.value)
  
    
    setContentData({...contentData,...typeofplaces})
    console.log('contentData',contentData)
   // alert(e.target.value.toLowerCase().replaceAll(' ',''))
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, height: 384 }}>
        <InputLabel id="demo-multiple-chip-label">What type of place is this? </InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
		      defaultOpen={true}
          value={typeName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="What type of place is this?" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        > 
          {typePlaceArray.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, typeName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
