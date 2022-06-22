import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Container, Grid, useMediaQuery } from "@mui/material";

const regions = [
  {
    value: "All regions",
    item: `All regions`,
  },
  {
    value: "Banteay Meanchey",
    item: `Banteay Meanchey`,
  },
  {
    value: "Battambang",
    item: `Battambang`,
  },
  {
    value: "Kampong Cham",
    item: `Kampong Cham`,
  },
  {
    value: "Kampong Chhnang",
    item: `Kampong Chhnang`,
  },
  {
    value: "Kampong Speu",
    item: `Kampong Speu`,
  },
  {
    value: "Kampong Thom",
    item: `Kampong Thom`,
  },
  {
    value: "Kampot",
    item: `Kampot`,
  },
  {
    value: "Kandal",
    item: `Kandal`,
  },
  {
    value: "Koh Kong",
    item: `Koh Kong`,
  },
  {
    value: "Kratie",
    item: `Kratie`,
  },
  {
    value: "Mondulkiri",
    item: `Mondulkiri`,
  },
  {
    value: "Phnom Penh",
    item: `Phnom Penh`,
  },
  {
    value: "Preah Vihear",
    item: `Preah Vihear`,
  },
  {
    value: "Prey Veng",
    item: `Prey Veng`,
  },
  {
    value: "Pursat",
    item: `Pursat`,
  },
  {
    value: "Ratanak Kiri",
    item: `Ratanak Kiri`,
  },
  {
    value: "Siem Reap",
    item: `Siem Reap`,
  },
  {
    value: "Preah Sihanouk",
    item: `Preah Sihanouk`,
  },
  {
    value: "Stung Treng",
    item: `Stung Treng`,
  },
  {
    value: "Svay Rieng",
    item: `Svay Rieng`,
  },
  {
    value: "Takeo",
    item: `Takeo`,
  },
  {
    value: "Oddar Meanchey",
    item: `Oddar Meanchey`,
  },
  {
    value: "Pailin",
    item: `Pailin`,
  },
  {
    value: "Tboung Khmum",
    item: `Tboung Khmum`,
  },
];
const places = [
  {
    value: "All kind of places",
    item: `All kind of places`,
  },
  {
    value: "Modern",
    item: `Modern`,
  },
  {
    value: "Peaceful",
    item: `Peaceful`,
  },
  {
    value: "Nature",
    item: `Nature`,
  },
  {
    value: "History",
    item: `History`,
  },
  {
    value: "Outdoor",
    item: `Outdoor`,
  },
  {
    value: "Indoor",
    item: `Indoor`,
  },
  {
    value: "Event",
    item: `Event`,
  },
];
const activities = [
  {
    value: "All activities",
    item: `All activities`,
  },
  {
    value: "Shopping",
    item: `Shopping`,
  },
  {
    value: "Sightseeing",
    item: `Sightseeing`,
  },
  {
    value: "Eating & Drinking",
    item: `Eating & Drinking`,
  },
  {
    value: "Learning",
    item: `Learning`,
  },
  {
    value: "Entertaining",
    item: `Entertaining`,
  },
];

export default function FilterBar() {
  const phoneSearch = useMediaQuery("(max-width:600px)");
  const [region, setRegion] = React.useState("All regions");
  const [place, setPlace] = React.useState("All kind of places");
  const [activity, setActivity] = React.useState("All activities");

  const handleChangeRegion = (event) => {
    setRegion(event.target.value);
  };
  const handleChangePlace = (event) => {
    setPlace(event.target.value);
  };
  const handleChangeActivity = (event) => {
    setActivity(event.target.value);
  };

  return (
    <Container style={{ maxWidth: 1000, padding: 0 }}>
      <Grid container justifyContent="center" style={{ margin: "10px 0" }}>
        <Grid item xs={12} sm={4} textAlign="center">
          <FormControl
            size="small"
            style={{ margin: "5px 0", width: "90%" }}
          >
            <InputLabel>Search regions</InputLabel>
            <Select
              value={region}
              label="Search regions"
              onChange={handleChangeRegion}
            >
              {regions.map((item) => (
                <MenuItem key={item.value} value={item.value}>{item.item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} textAlign="center">
          <FormControl size="small" style={{ margin: "5px 0", width: "90%" }}>
            <InputLabel>Search kind of places</InputLabel>
            <Select
              value={place}
              label="Search kind of places"
              onChange={handleChangePlace}
            >
              {places.map((item) => (
                <MenuItem key={item.value} value={item.value}>{item.item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} textAlign="center">
          <FormControl size="small" style={{ margin: "5px 0", width: "90%" }}>
            <InputLabel>Search activities</InputLabel>
            <Select
              value={activity}
              label="Search activities"
              onChange={handleChangeActivity}
            >
              {activities.map((item) => (
                <MenuItem key={item.value} value={item.value}>{item.item}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
}
