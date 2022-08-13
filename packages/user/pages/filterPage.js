import Autocomplete from "@mui/material/Autocomplete";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Notes from "../components/presentations/FilterCard";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import {
  places,
  activities,
  kindofplaces,
  prices,
  typeofplaces,
} from "./../web-admin/_mock_/category";
import {
  Button,
  IconButton,
  TextField,
  Grid,
  Box,
  Stack,
  Typography,
  Container,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import PrimarySearchAppBar from "../components/containers/NavBarAfterLogin";

const useStyles = makeStyles({
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  form: {
    width: "100%",
  },
});

export default function FilterPage({ contents }) {
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //                                                Variables
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    title: "",
    region: "",
    kindofplaces: "",
    typeofplaces: "",
    activities: "",
    prices: "",
  });
  //array for filter
  const arr = [];

  //set the new value from autocomplete to the object
  const handleSearch = (title) => {
    setFilters({ ...filters, title });
  };
  const filterRegion = (region) => {
    setFilters({ ...filters, region });
  };
  const filterTypeofplaces = (typeofplaces) => {
    setFilters({ ...filters, typeofplaces });
  };
  const filterKindofplaces = (kindofplaces) => {
    setFilters({ ...filters, kindofplaces });
  };
  const filterActivities = (activities) => {
    setFilters({ ...filters, activities });
  };
  const filterPrices = (prices) => {
    setFilters({ ...filters, prices });
  };
  //get data from api
  useEffect(() => {
    if (filters.title != "") {
      arr.push(`title=${filters.title}`);
    }
    if (filters.region != "") {
      arr.push(`region=${filters.region}`);
    }
    if (filters.activities != "") {
      arr.push(`activities=${filters.activities}`);
    }
    if (filters.kindofplaces != "") {
      arr.push(`kindofplaces=${filters.kindofplaces}`);
    }
    if (filters.typeofplaces != "") {
      arr.push(`typeofplaces=${filters.typeofplaces}`);
    }
    if (filters.prices != "") {
      arr.push(`prices=${filters.prices}`);
    }

    console.log(arr.join("&"));

    fetch(`http://localhost:3000/place/product?${arr.join("&")}`)
      .then((response) => response.json())

      .then((data) => setData(data.response));
  }, [filters]);
  return (
    <div>
<PrimarySearchAppBar/>

<Box
        sx={{
          width: "100%",
          height: { xs: "50vh", sm: "90vh" },
          position: "relative",
          display: "block",
        }}
      >
        <Image src="/map1.jpg" alt="LOGO" layout="fill"></Image>

        <Stack justifyContent="center" display="flex" alignItems="center">
          <Link href="./../map" passHref>
            <Button
              sx={{
                zIndex: "1",
                borderRadius: { xs: "8px", sm: "16px" },
                backgroundColor: "white",
                color: "Black",
                boxShadow: "5px 7px #888888",
                width: { xs: "40%", sm: "30%", md: "20%" },
                position: "absolute",
                marginRight: "auto",
                marginTop: { xs: "80vh", sm: "110vh" },
                "&:hover": {
                  boxShadow: "0px 0px ",
                },
              }}
            >
              Explore on Map
            </Button>
          </Link>
        </Stack>
      </Box>
      <Container component="main" maxWidth="lg">
        {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                                          Header 
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/}
        
        <div className={classes.paper}>
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                                         Search Bar
                    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                 */}
          <form className={classes.form} noValidate>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              sx={{
                paddingLeft: { xs: 1.5, sm: 3.7 },
                paddingRight: { xs: 1.5, sm: 3.7 },
                paddingTop: 3.7,
                paddingBottom: 2,
              }}
            >
              <Stack item sx={{ width: "100%" }}>
                <TextField
                  autoComplete="off"
                  label="search place"
                  onChange={(e) => handleSearch(e.target.value)}
                  variant="outlined"
                  sx={{
                    width: "100%",
                    [`& fieldset`]: {
                      borderRadius: 4,
                      borderColor: "rgb(170, 172, 171, 0.6)",
                      boxShadow:
                        "0px 0.5526161193847656px 2.2104644775390625px 0px rgba(0, 0, 0, 0.25)",
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              </Stack>
              <Stack item xs={2.5} lg={1} sm={1.5}>
                <Autocomplete
                  onChange={(event, value) =>
                    filterPrices(value.price.toLowerCase().replaceAll(" ", ""))
                  }
                  disablePortal
                  id="combo-box-demo"
                  options={prices}
                  //sx={{ width: 350 }}
                  lg={{ width: 600, overflow: "auto" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="$"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                      }}
                      sx={{
                        width: 70,
                        [`& fieldset`]: {
                          borderRadius: 4,
                          borderColor: "rgb(170, 172, 171, 0.6)",
                          boxShadow:
                            "0px 0.5526161193847656px 2.2104644775390625px 0px rgba(0, 0, 0, 0.25)",
                        },
                      }}
                    />
                  )}
                  getOptionLabel={(option) => option.price}
                />
              </Stack>
            </Stack>
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                paddingLeft: { xs: "10px", sm: "30px", lg: "30px" },
                paddingRight: { xs: "10px", sm: "30px", lg: "30px" },
              }}
            >
              <Grid item xs={6} lg={3} sm={6}>
                <Autocomplete
                  onChange={(event, value) =>
                    filterRegion(value.region.toLowerCase().replaceAll(" ", ""))
                  }
                  disablePortal
                  id="combo-box-demo"
                  options={places}
                  lg={{ width: 600 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Region"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password",
                      }}
                      sx={{
                        width: "100%",
                        [`& fieldset`]: {
                          borderRadius: 4,
                          borderColor: "rgb(170, 172, 171, 0.6)",
                          boxShadow:
                            "0px 0.5526161193847656px 2.2104644775390625px 0px rgba(0, 0, 0, 0.25)",
                        },
                      }}
                    />
                  )}
                  getOptionLabel={(option) => option.region}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      <Button>{option.region}</Button>
                    </Box>
                  )}
                />
              </Grid>
              <Grid item xs={6} lg={3} sm={6}>
                <Autocomplete
                  onChange={(event, value) =>
                    filterKindofplaces(
                      value.kindofplace.toLowerCase().replaceAll(" ", "")
                    )
                  }
                  disablePortal
                  id="combo-box-demo"
                  options={kindofplaces}
                  lg={{ width: 600 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Kindofplace"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password",
                      }}
                      sx={{
                        width: "100%",
                        [`& fieldset`]: {
                          borderRadius: 4,
                          borderColor: "rgb(170, 172, 171, 0.6)",
                          boxShadow:
                            "0px 0.5526161193847656px 2.2104644775390625px 0px rgba(0, 0, 0, 0.25)",
                        },
                      }}
                    />
                  )}
                  getOptionLabel={(option) => option.kindofplace}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      <Button>{option.kindofplace}</Button>
                    </Box>
                  )}
                />
              </Grid>
              <Grid item xs={6} lg={3} sm={6}>
                <Autocomplete
                  onChange={(event, value) =>
                    filterTypeofplaces(
                      value.typeofplace.toLowerCase().replaceAll(" ", "")
                    )
                  }
                  disablePortal
                  id="combo-box-demo"
                  options={typeofplaces}
                  lg={{ width: 600 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Type of place"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password",
                      }}
                      sx={{
                        width: "100%",
                        [`& fieldset`]: {
                          borderRadius: 4,
                          borderColor: "rgb(170, 172, 171, 0.6)",
                          boxShadow:
                            "0px 0.5526161193847656px 2.2104644775390625px 0px rgba(0, 0, 0, 0.25)",
                        },
                      }}
                    />
                  )}
                  getOptionLabel={(option) => option.typeofplace}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      <Button>{option.typeofplace}</Button>
                    </Box>
                  )}
                />
              </Grid>

              <Grid item xs={6} lg={3} sm={6}>
                <Autocomplete
                  onChange={(event, value) =>
                    filterActivities(
                      value.activity.toLowerCase().replaceAll(" ", "")
                    )
                  }
                  disablePortal
                  id="combo-box-demo"
                  options={activities}
                  lg={{ width: 600 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Activity"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password",
                      }}
                      sx={{
                        width: "100%",
                        [`& fieldset`]: {
                          borderRadius: 4,
                          borderColor: "rgb(170, 172, 171, 0.6)",
                          boxShadow:
                            "0px 0.5526161193847656px 2.2104644775390625px 0px rgba(0, 0, 0, 0.25)",
                        },
                      }}
                    />
                  )}
                  getOptionLabel={(option) => option.activity}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      <Button>{option.activity}</Button>
                    </Box>
                  )}
                />
              </Grid>
            </Grid>
          </form>
        </div>
        <Container sx={{ paddingTop: 4 }}>
          <Grid
            container
            spacing={3.5}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {data.map((item, index) => {
              return (
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  item
                  key={index}
                  xs={6}
                  sm={6}
                  md={4}
                  lg={3}
                >
                  <Notes on notes={item}></Notes>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Container>
    </div>
  );
}
