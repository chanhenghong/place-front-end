import Autocomplete from "@mui/material/Autocomplete";

import React, { useEffect, useState } from "react";
import Notes from "../components/presentations/FilterCard";

import {
  places, activities, kindofplaces, prices, typeofplaces
} from "./../web-admin/_mock_/category";
import {
  Button,

  TextField,

  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { makeStyles } from "@mui/styles";


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
    region:"",
    kindofplaces:"",
    typeofplaces:"",
    activities:"",
    prices:""  
  });
  //array for filter 
  const arr=[]

  //set the new value from autocomplete to the object
  const handleSearch = (title) => {
    setFilters({...filters, title });
    
  };
  const filterRegion=(region)=>
  {
    setFilters({...filters, region})
  }
  const filterTypeofplaces=(typeofplaces)=>
  {
    setFilters({...filters,typeofplaces})
  }
  const filterKindofplaces=(kindofplaces)=>
  {
    setFilters({...filters,kindofplaces})
  }
  const filterActivities=(activities)=>
  {
    setFilters({...filters,activities})
  }
  const filterPrices=(prices)=>
  {
    setFilters({...filters, prices})
  }
  //get data from api
  useEffect(() => {
    if(filters.title!="")
    {
       arr.push(`title=${filters.title}`)
    }
    if(filters.region!="")
    {
      arr.push(`region=${filters.region}`)
    }
    if(filters.activities!="")
    {
      arr.push(`activities=${filters.activities}`)
    }
    if(filters.kindofplaces!="")
    {
      arr.push(`kindofplaces=${filters.kindofplaces}`)
    }
    if(filters.typeofplaces!="")
    {
      arr.push(`typeofplaces=${filters.typeofplaces}`)
    }
    if(filters.prices!="")
    {
      arr.push(`prices=${filters.prices}`)
    }

console.log(arr.join("&"))

    fetch(`http://localhost:3000/place/product?${arr.join('&')}`)
      .then((response) => response.json())

      .then((data) => setData(data.response));
  }, [filters]);
  return (
    <div>
     
    <Container component="main" maxWidth="lg">
      

      {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                                          Header 
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/}
    
      <div className={classes.paper}>
     
        

        {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                                         Search Bar
                    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                 */}
        <br></br>

        <TextField
          autoComplete="off"
          label="search place"
          onChange={(e)=>handleSearch(e.target.value)}
          variant="outlined"
        ></TextField>
        <Typography>
          {" "}
          <b> Select the categories of your place:</b>{" "}
        </Typography>
        <br></br>
        <form className={classes.form} noValidate>
          <Grid container spacing={2} xs={12}>
            <Grid item xs={12} lg={2.4} sm={2}>
              <Autocomplete
                onChange={
                  (event, value) => filterRegion(value.region.toLowerCase().replaceAll(" ",''))
  
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
            <Grid item xs={12} lg={2.4} sm={2}>
              <Autocomplete
                onChange={
                  (event, value) => filterKindofplaces(value.kindofplace.toLowerCase().replaceAll(" ",''))
  
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
            <Grid item xs={12} lg={2.4} sm={2}>
              <Autocomplete
                onChange={
                  (event, value) => filterActivities(value.activity.toLowerCase().replaceAll(" ",''))
  
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
            <Grid item xs={12} lg={2.4} sm={2}>
              <Autocomplete
                onChange={(event, value) =>
                  filterTypeofplaces(value.typeofplace.toLowerCase().replaceAll(" ",''))
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
            <Grid item xs={12} lg={2.4} sm={2}>
              <Autocomplete
                onChange={(event, value) =>
                  filterPrices(value.price.toLowerCase().replaceAll(" ",''))
                }
                disablePortal
                id="combo-box-demo"
                options={prices}
                //sx={{ width: 350 }}
                lg={{ width: 600, overflow: "auto" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Price"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                  />
                )}
                getOptionLabel={(option) => option.price}
              />
            </Grid>
          </Grid>
        </form>
      </div>
      <Container style={{ paddingTop: "13px" }}>
        <Grid container spacing={3}>
          {data.map((item, index) => {
            return (
              <Grid item key={index} xs={12} md={6} lg={3}>
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
