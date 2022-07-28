import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { TextField, Typography } from "@mui/material";
import { contentData } from "../../../web-admin/_mock_/contentData";
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

const activityArray = [
  "Shopping",
  "Swimming",
  "Hiking",
  "Camping",
  "Sightseeing",
];

function getStyles(name, activitiesName, theme) {
  return {
    fontWeight:
    activitiesName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Activities() {
  const theme = useTheme();
  const [activitiesName, setActivitiesName] = React.useState([]);
  const [contentData,setContentData]= useRecoilState(contentDataState)
  const handleChange = (e) => {
   let activities ={activities:e.target.value}
   setActivitiesName(e.target.value)
    setContentData({...contentData,...activities})
    console.log('contentData',contentData)
   
  };
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, height: 384 }}>
        <InputLabel id="demo-customized-select-label">
          What activity suit this place ?
        </InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          defaultOpen={true}
          multiple
          value={activitiesName}
          onChange={handleChange}
          input={
            <OutlinedInput
              id="select-multiple-chip"
              label="What activity suit this place ?"
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
         
          {console.log("Ativities:",activitiesName)}
          {activityArray.map((activities) => (
            <MenuItem
              key={activities}
              value={activities}
              style={getStyles(activities, activitiesName, theme)}
            >
              {activities}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}