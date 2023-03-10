import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Dialog,
  Stack,
  Box,
} from "@mui/material";

import React from "react";
import LoadingBar from "react-top-loading-bar";
import { fireStorage, fireStore } from "../services/firebase";
import { makeStyles } from "@material-ui/styles";
import Create from "@mui/icons-material/Create";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhotoLayout from "./../components/presentations/PhotoLayout";
import { useRecoilValue } from "recoil";
import { userState } from "../states/userState";
import PopUpCategoriesArticle from "../components/containers/PopUpCategoriesArticle/PopUpCategoriesArticle";

const useStyles = makeStyles({
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
  },
  submit: {
    marginTop: "24px",
  },
  dialog: {
    width: "100vw",
    height: "100vh",
  },
});
const Upload = () => {
  const [openCategory, setOpenCategory] = React.useState(false);
  const classes = useStyles();
  const user = useRecoilValue(userState);
  const [filePic, setFilePic] = React.useState([]);
  const [titlePreview, setTitlePreview] = React.useState("");
  const [contentPreview, setContentPreview] = React.useState("");
  const splitContentPreview = contentPreview.split(" ");
  const upperContentPreview = splitContentPreview.slice(0, 100).join(" ");
  const lowerContentPreview = splitContentPreview.slice(100).join(" ");
  const [progress, setProgress] = React.useState(0);
  const [allFiles, setAllFiles] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [rawFiles, setRawFiles] = React.useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    let allfiles = [];
    if (e.target.elements) {
      const { files, title, content } = e.target.elements;

      const splitContent = content.value.split(" ");
      const upperContent = splitContent.slice(0, 100).join(" ");
      const lowerContent = splitContent.slice(100).join(" ");
      const storageRef = fireStorage.ref("articlePage");

      if (files.files.length > 6) {
        console.log(files.files);
        for (let i = 0; i < files.files.length; i++) {
          console.log("Picture:", [i], files.files[i].name);
        }
        console.log(title.value);
        console.log(content.value);
      } else {
        alert("You must upload photo more than 7 pics");
      }
    } else {
      console.log(rawFiles);
      if (rawFiles.length > 6) {
      } else {
        alert("You must upload photo more than 7 pics");
      }
    }
  };
  const handleOpen = (e) => {
    setOpen(true);
  };
  const handleClose = (e) => {
    setOpen(false);
  };
  const handleClickDialogOpen = () => {
    setOpenCategory(true);
  };
  const handleDialogClose = () => {
    setOpenCategory(false);
  };

  const previewPic = (e) => {
    setRawFiles(e.target.files);
    console.log(e.target.files);
    const fileArray = Array.from(e.target.files).map((file) =>
      
      URL.createObjectURL(file)
    );
    console.log(fileArray);
    setFilePic(fileArray);
  };
  const handleTitlePreview = (e) => {
    setTitlePreview(e.target.value);
  };
  const handleContentPreview = (e) => {
    setContentPreview(e.target.value);
  };
  return (
    <Container style={{ width: "100%" }}>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        style={{ textAlign: "center", width: "100%" }}
      >
        <Stack>
          <Typography variant="h5" color="primary" style={{ margin: "50px" }}>
            Upload Article
          </Typography>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Box sx={{ flexGrow: 1 }}>
            <Stack>
              <label>
                <img
                  style={{ width: "10%", margin: "50px", cursor: "pointer" }}
                  src="/icon upload.png"
                />
                <input
                  style={{
                    display: "none",
                  }}
                  type="file"
                  name="files"
                  id="imageFile"
                  accept="image/*"
                  multiple
                  onChange={previewPic}
                />
              </label>
            </Stack>

            <Stack sx={{ paddingBottom: 10 }}>
              <Stack>
                <Stack>
                  <TextField
                    style={{ textAlign: "center", marginBottom: "24px" }}
                    type="text"
                    name="title"
                    fullWidth
                    placeholder="*Title"
                    required
                    onChange={handleTitlePreview}
                  />
                </Stack>
              </Stack>
              <Stack>
                <Stack>
                  <TextField
                    style={{ marginBottom: "24px" }}
                    type="text"
                    name="content"
                    multiline={true}
                    rows={10}
                    fullWidth
                    placeholder="*Description"
                    required
                    onChange={handleContentPreview}
                  />
                </Stack>
                <br />
                <Stack>
                  <Typography variant="h5">
                    Give reader some note of your article...
                  </Typography>
                </Stack>
              </Stack>
              <br />
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <Stack>
                  <img style={{ width: "60px" }} src="/logoUpload.png" />
                </Stack>
                <Stack>
                  <Typography
                    style={{
                      marginBottom: "24px",
                      height: "56px",
                      paddingTop: "15px",
                    }}
                  >
                    Place&apos;s name you are writing about
                  </Typography>
                </Stack>
                <Stack>
                  <TextField
                    style={{ marginBottom: "24px" }}
                    type="url"
                    name="link card"
                    fullWidth
                    placeholder="Add Link "
                    required
                  />
                </Stack>
              </Stack>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <Stack>
                  <img
                    style={{ width: "60%", paddingTop: "15px" }}
                    src="/facebook 2.png"
                  />
                </Stack>
                <Stack>
                  <Typography
                    style={{
                      marginBottom: "24px",
                      height: "56px",
                      paddingTop: "15px",
                    }}
                  >
                    Place Facebook Page Name
                  </Typography>
                </Stack>
                <Stack>
                  <TextField
                    style={{ marginBottom: "24px" }}
                    type="url"
                    name="link facebook"
                    fullWidth
                    placeholder="Add Link "
                    required
                  />
                </Stack>
              </Stack>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Stack>
                  <Button
                    variant="contained"
                    onClick={() => {
                      handleOpen();
                      // previewPic();
                    }}
                  >
                    Preview
                  </Button>
                </Stack>
                <Stack>
                  <Button
                    variant="contained"
                    onClick={() => setOpenCategory(true)}
                  >
                    Categories
                  </Button>
                  <PopUpCategoriesArticle
                    open={openCategory}
                    onClose={() => setOpenCategory(false)}
                  />
                </Stack>
                <Stack>
                  <Button variant="contained" type="submit">
                    Upload
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
      <Dialog open={open} onClose={() => handleClose()}>
        <Grid container justifyContent="center">
          <Grid item xs={4}>
            {filePic[0] && (
              <img
                id="blah"
                src={filePic[0]}
                alt="your image"
                style={{
                  width: "100%",
                  height: "200px",
                  margin: "auto",
                  objectFit: "cover",
                }}
              />
            )}
          </Grid>
          <Grid item xs={4} style={{ width: "30vw" }}>
            {filePic[1] && (
              <img
                id="blah"
                src={filePic[1]}
                alt="your image"
                style={{
                  width: "100%",
                  height: "200px",
                  display: "block",
                  margin: "auto",
                  objectFit: "cover",
                }}
              />
            )}
          </Grid>
          <Grid item xs={4}>
            {filePic[2] && (
              <img
                id="blah"
                src={filePic[2]}
                onError={{ display: "none" }}
                alt="your image"
                style={{
                  width: "100%",
                  height: "200px",
                  display: "block",
                  margin: "auto",
                  objectFit: "cover",
                }}
              />
            )}
          </Grid>
        </Grid>

        <Container>
          <Typography variant="h4" style={{ margin: "20px 20px 20px 0" }}>
            {titlePreview}
          </Typography>
          <Typography style={{ marginBottom: "20px" }}>
            <span style={{ verticalAlign: "middle" }}>
              <AccessTimeIcon />
            </span>
            <span> {new Date().toLocaleString()}</span>
            <span style={{ verticalAlign: "middle", margin: "0 5px 0 20px" }}>
              <Create />
            </span>
            <span> {user.username}</span>
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            style={{ fontSize: "20px" }}
          >
            {upperContentPreview}
          </Typography>
          {filePic[3] && <PhotoLayout arrayUrl={filePic} />}

          <Typography
            align="justify"
            variant="body1"
            style={{ fontSize: "20px" }}
          >
            {lowerContentPreview}
          </Typography>
          <Button
            onClick={handleSubmit}
            variant="contained"
            type="submit"
            style={{ marginBottom: "10px" }}
          >
            Upload
          </Button>
        </Container>
      </Dialog>
    </Container>
  );
};

export default Upload;
