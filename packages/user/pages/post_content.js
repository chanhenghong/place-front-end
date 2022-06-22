import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import BaseMap from "./BaseMap";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import { fireStore } from "../services/firebase";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import UploadFilePage from "../components/presentations/photos";
import PopUpCategories from "../components/containers/PopUpCategories";
import CloseIcon from "@mui/icons-material/Close";
import {  useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import useState from "react";
import { useForm } from "react-hook-form";
import { contentDataState } from "../states/contentState";

import {
  kindofplaces,
  places,
  activities,
  prices,
  typeofplaces,
} from "../web-admin/_mock_/category";
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { onlineFiles } from "../states/imageFilesState";
import { latState, lngState } from "../states/latlongState";
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

export default function LogIn({user}) {
  console.log("USER_DATA:",user)
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //                                                Variables
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  const classes = useStyles();

  
  const setContentData = useSetRecoilState(contentDataState)
  const contentData = useRecoilValue(contentDataState)
 // const [contentData,setContentData]=useRecoilState(contentDataState)
  const [open, setOpen] = React.useState(false);
  const [openCategory, setOpenCategory] = React.useState(false);
  //latitute and longtitute
  const latitute = useRecoilValue(latState);
  const longtitute = useRecoilValue(lngState);
  // category
  const [kindofplace, setKindofplace] = React.useState("");
  const [typeofplace, setTypeofplace] = React.useState("");
  const [activity, setActivity] = React.useState("");
  const [region, setRegion] = React.useState("");
  const [price, setPrice] = React.useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm();
  const onSubmit = (content) => {
    console.log(content)
    setOpenCategory(true);
    // let data = JSON.parse(localStorage.getItem("dataStorage"));
    // data = { ...data, ...content };
    setContentData({...contentData,...content})
    // localStorage.setItem("dataStorage", JSON.stringify(data));
  };

  //files
  // const onlinefiles = useRecoilValue(onlineFiles);
  // const handleCreateForm = (e) => {
  //   e.preventDefault();
  //   const { title, phoneNumber, fb_page, address, desc } = e.target.elements;
  //console.log(title.value, phoneNumber.value, fb_page.value, address.value)
  //console.log(activity, region, price, typeofplace, kindofplace)
  // fireStore
  //   .collection("contents")
  //   .add({
  //     activity: activity,
  //     region: region,
  //     price: price,
  //     typeofplace: typeofplace,
  //     kindofplace: kindofplace,
  //     title: title.value,
  //     desc: desc.value,
  //     phoneNumber: phoneNumber.value,
  //     fb_page: fb_page.value,
  //     address: address.value,
  //     latitute: latitute,
  //     longtitute: longtitute,
  //     url: onlinefiles,
  //     color: "primary",
  //   })
  //   .then((res) => {
  //     console.log("Success");
  //     e.target.reset();
  //   })
  //   .catch((err) => {
  //     console.error(err.message);
  //   });
  // };

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //                                      Dialog Open and Dialog Close
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseCategories = () => {
    localStorage.removeItem("dataStorage");
    setOpenCategory(false);
  };

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //                                      Retrieve data
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // React.useEffect(() => {
  //   fireStore.collection("contents").onSnapshot((snapshot) => {
  //     const horizontalCard = snapshot.docs.map((doc) => {
  //       return {
  //         id: doc.id,
  //         ...doc.data(),
  //       };
  //     });
  //     console.log(horizontalCard);

  //     setHorizontalCards(horizontalCard);
  //   });
  // }, []);
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  return (
    <Container component="main" maxWidth="xs">
      {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                                          Header 
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
             */}
      <CssBaseline />
      <div className={classes.paper}>
        <div style={{ textAlign: "center" }}>
          <img
            alt="LogoProject"
            src="/LogoProject.svg"
            width={170}
            height={170}
          />
        </div>
        <Typography
          component="h1"
          variant="h5"
          style={{
            textAlign: "center",
            marginBottom: "24px",
            textShadow: "2px 2px 4px #000000",
          }}
        >
          Post Page
        </Typography>
        {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                                         Search Bar
                    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                 */}
        <br></br>
        {/* <Typography>
          {" "}
          <b> Select the categories of your place:</b>{" "}
        </Typography> */}
        <br></br>
        <form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <Grid container spacing={2}>
            {/* <Grid item xs={12}>
              <Autocomplete
                onChange={(event, value) => setRegion(value.region)}
                disablePortal
                id="combo-box-demo"
                options={places}
                //sx={{ width: 350 }}
                lg={{ width: 600 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Region"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
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
            <Grid item xs={12}>
              <Autocomplete
                onChange={(event, value) => setKindofplace(value.kindofplace)}
                disablePortal
                id="combo-box-demo"
                options={kindofplaces}
                //sx={{ width: 350 }}
                lg={{ width: 600 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Kind of place"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
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
            <Grid item xs={12}>
              <Autocomplete
                onChange={(event, value) => setActivity(value.activity)}
                disablePortal
                id="combo-box-demo"
                options={activities}
                //sx={{ width: 350 }}
                lg={{ width: 600 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Activity"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
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
            <Grid item xs={12}>
              <Autocomplete
                onChange={(event, value) => setTypeofplace(value.typeofplace)}
                disablePortal
                id="combo-box-demo"
                options={typeofplaces}
                //sx={{ width: 350 }}
                lg={{ width: 600 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Type of place"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
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
            <Grid item xs={12}>
              <Autocomplete
                onChange={(event, value) => setPrice(value.price)}
                disablePortal
                id="combo-box-demo"
                options={prices}
                //sx={{ width: 350 }}
                lg={{ width: 600 }}
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
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <Button onClick={setPrice(price)}>{option.price}</Button>
                  </Box>
                )}
              />
            </Grid> */}

            {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                                         Write Content of the Place
                            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                         */}
            <Grid item xs={12}>
              <Typography textAlign={"center"}>
                {" "}
                <b> Write your content </b>{" "}
              </Typography>
              <br></br>
              <TextField
                variant="outlined"
                fullWidth
                required
                id="title"
                label="Title"
                name="title"
                autoComplete="title"
                {...register("title", { required: true })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                multiline
                fullWidth
                required
                id="desc"
                label="Detail of your place"
                name="desc"
                autoComplete="desc"
                {...register("desc", { required: true })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                multiline
                fullWidth
                id="note"
                label="Note for the user before going to your place"
                name="note"
                autoComplete="note"
                {...register("note", { required: true })}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                {...register("email")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phoneNumber"
                label="Phone Number"
                type="number"
                id="phoneNumber"
                {...register("phoneNumber", { required: true })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="fb_page"
                label="Facebook Page"
                name="fb_page"
                autoComplete="fb_page"
                {...register("fb_page")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
                {...register("address", { required: true })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="proximity"
                label="Proximity"
                name="proximity"
                autoComplete="proximity"
                {...register("proximity")}
              />
            </Grid>

            <Grid item xs>
              <Typography sx={{ textAlign: "center" }}>
                {" "}
                <Button sx={{ color: "#008058" }} onClick={handleClickOpen}>
                  Map &amp; Images
                </Button>
              </Typography>

              {/* <Button onClick={handleClickOpenImages}><Avatar alt="images" src="images.png" /></Button>*/}
            </Grid>
            {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                                             Preview and Post 
                            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                         */}
            <Grid item container mt={1} justifyContent="space-around">
              <Grid item>
                <Button
                  sx={{
                    height: "40px",
                    width: "100px",
                    backgroundColor: "#008058",
                  }}
                  color="success"
                  variant="contained"
                >
                  Preview
                </Button>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    height: "40px",
                    width: "100px",
                    backgroundColor: "#008058",
                  }}
                  color="success"
                  // onClick={() => setOpenCategory(true)}
                  type="submit"
                  variant="contained"
                >
                  Post
                </Button>
              </Grid>
            </Grid>
            <PopUpCategories
              open={openCategory}
              onClose={handleCloseCategories}
            />
            {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                                         Location and Images Dialog
                            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                         */}
            <Dialog fullScreen open={open} onClose={handleClose}>
              <AppBar sx={{ position: "relative", backgroundColor: "#008058" }}>
                <Toolbar>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography
                    sx={{ ml: 2, flex: 1 }}
                    variant="h6"
                    component="div"
                  >
                    Location of your place
                  </Typography>
                  <Button
                    autoFocus
                    onClick={handleClose}
                    sx={{ color: "#008058", backgroundColor: "#FFF" }}
                  >
                    Done
                  </Button>
                </Toolbar>
              </AppBar>

              <Grid item xs={12} marginBottom={5} marginTop={5}>
                <BaseMap
                  control={control}
                  defaultCenter={[104.91666266871523, 11.541525694098969]}
                  zoom={12}
                  MapStyles={{ width: "100%", height: "80vh" }}
                  {...register("lat")}
                />
              </Grid>
              <AppBar
                color="primary"
                sx={{ position: "relative", backgroundColor: "#008058" }}
              >
                <Toolbar>
                  <Typography
                    marginLeft="20px"
                    sx={{ ml: 2, flex: 1 }}
                    variant="h6"
                    component="div"
                  >
                    Add your images
                  </Typography>
                </Toolbar>
              </AppBar>
              <Grid item xs={12}>
                <UploadFilePage></UploadFilePage>
              </Grid>
            </Dialog>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
