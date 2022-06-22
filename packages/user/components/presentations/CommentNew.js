import * as React from "react";
import Image from "next/image";
import "firebase/firestore";
import firebase from "firebase/app";
import LinearProgress from "@mui/material/LinearProgress";
import DeleteIcon from "@mui/icons-material/Delete";
import { fireStore, fireAuth } from "../../services/firebase";
import {
  Grid,
  Paper,
  Box,
  Card,
  CardContent,
  CardActionArea,
  ButtonBase,
  Popover,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import { yellow } from "@mui/material/colors";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import { Avatar, Stack, TextField, Button, Typography } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import FlagIcon from "@mui/icons-material/Flag";
import SendIcon from "@mui/icons-material/Send";
import StarIcon from "@mui/icons-material/Star";
import {
  starState,
  userState,
  commentState,
  starOneState,
  starTwoState,
  starThreeState,
  starFourState,
  starFiveState,
} from "../../states/userState";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Star from "./star";
import { Router, useRouter } from "next/router";
export default function Comment({ idRout }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [openPopover, setOpenPopover] = React.useState(false);
  const user = useRecoilValue(userState);
  const starValue = useRecoilValue(starState);
  const setStarValue = useSetRecoilState(starState);
  const [ucomment, setuComment] = React.useState([]);
  const [totalView, setCommentState] = useRecoilState(commentState);
  const setStarOneValue = useSetRecoilState(starOneState);
  const setStarTwoValue = useSetRecoilState(starTwoState);
  const setStarThreeValue = useSetRecoilState(starThreeState);
  const setStarFourValue = useSetRecoilState(starFourState);
  const setStarFiveValue = useSetRecoilState(starFiveState);

  React.useEffect(() => {
    fireStore
      .collection("comments")
      .where("idRout", "==", idRout)
      .onSnapshot((snapshot) => {
        let commentGroup = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        console.log(commentGroup);

        setuComment(commentGroup);
        setCommentState(commentGroup.length);

        let group = commentGroup
          .filter((item) => item.idRout === idRout)
          .reduce((r, a) => {
            r[a.star] = [...(r[a.star] || []), a];
            return r;
          }, {});
        setStarOneValue(group[1] ? group[1].length : null);
        setStarTwoValue(group[2] ? group[2].length : null);
        setStarThreeValue(group[3] ? group[3].length : null);
        setStarFourValue(group[4] ? group[4].length : null);
        setStarFiveValue(group[5] ? group[5].length : null);
      });
  }, []);

  const handleComment = (e) => {
    e.preventDefault();
    const comment = e.target.ucomment;
    if (starValue != 0) {
      fireStore
        .collection("comments")
        .add({
          comment: comment.value,
          star: starValue,
          profileName: user.username,
          profilePic: user.profile,
          time: Date.now(),
          idRout: idRout,
        })
        .then((res) => {})
        .catch((err) => {
          console.error(err.message);
        });
      setStarValue(0);
      e.target.reset();
    } else {
      alert("please give us rating star!!!");
    }
  };

  const handleDelete = (id) => {
    fireStore
      .collection("comments")
      .doc(id)
      .delete()
      .then((res) => {
        console.log("deleted");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  const open = Boolean(anchorEl);
  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container justifyContent="center">
      <Card
        elevation={10}
        style={{
          borderRadius: 18,
          width: "90%",
          marginBottom: "1rem",
        }}
      >
        <CardContent>
          <form onSubmit={handleComment} style={{ width: "100%" }}>
            <Grid container>
              <Grid item lg={0.5} md={0.5} sm={1} xs={1}>
                <Avatar
                  style={{ margin: "auto" }}
                  alt="Remy Sharp"
                  src={user.profile}
                />
              </Grid>
              <Grid
                item
                lg={1.5}
                md={2}
                sm={4}
                xs={5}
                style={{ marginTop: "-10px", marginLeft: "15px" }}
              >
                <h5>{user.username}</h5>
              </Grid>
              <Grid item lg={6.3} md={5} sm={5} xs={5}>
                <span>
                  <Star />
                </span>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item lg={10} sm={9} xs={8}>
                <TextField
                  style={{
                    width: "90%",
                    marginLeft: "5%",
                    whiteSpace: "pre-wrap",
                  }}
                  multiline
                  id="standard-basic"
                  label="Write review..."
                  variant="standard"
                  name="ucomment"
                  required
                />
              </Grid>
              <Grid item lg={2} sm={2} xs={4}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    height: 30,
                    width: "auto",
                    backgroundColor: "##1976d2",
                    textTransform: "none",
                  }}
                >
                  Comment
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      {ucomment
        .sort(function (a, b) {
          return b.time - a.time;
        })
        .map((item) => {
          return (
            <Card
              key={item.id}
              elevation={10}
              style={{
                borderRadius: 18,
                width: "90%",
                marginBottom: "1rem",
              }}
            >
              <CardContent sx={{ position: "relative" }}>
                <Grid container>
                  <Grid item lg={0.5} md={0.5} sm={1} xs={1}>
                    <Avatar alt="Profile Pic" src={item.profilePic} />{" "}
                  </Grid>
                  <Grid
                    item
                    lg={1.5}
                    md={2}
                    sm={4}
                    xs={5}
                    style={{ marginTop: "-10px", marginLeft: "15px" }}
                  >
                    <h5 style={{ marginBottom: 0 }}>{item.profileName}</h5>
                  </Grid>
                  <Grid item lg={6.3} md={5} sm={5} xs={5}>
                    <div>
                      {[...Array(5)].map((itemStar, index) => {
                        return (
                          <span key={index}>
                            <FavoriteIcon
                              style={{
                                color:
                                  item.star > index ? "#FFBA5A" : "#a9a9a9",
                              }}
                            />
                          </span>
                        );
                      })}
                    </div>
                  </Grid>
                  <Grid item lg={3.5} md={3} sm={11} xs={11}>
                    <h5 style={{ margin: " 0 30px" }}>
                      {new Date(item.time).toLocaleString()}
                    </h5>
                  </Grid>
                  <Popover
                    open={open}
                    onClose={handleClosePopover}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                  >
                    <List>
                      <ListItemButton sx={{ height: "30px" }}>
                        <ListItemIcon>
                          <EditIcon />
                        </ListItemIcon>
                        <ListItemText primary="Edit" />
                      </ListItemButton>

                      <ListItemButton
                        sx={{ height: "30px" }}
                        onClick={() => handleDelete(item.id)}
                      >
                        <ListItemIcon>
                          <DeleteIcon />
                        </ListItemIcon>
                        <ListItemText primary="Delete" />
                      </ListItemButton>
                      <ListItemButton sx={{ height: "30px" }}>
                        <ListItemIcon>
                          <FlagIcon />
                        </ListItemIcon>
                        <ListItemText primary="Report" />
                      </ListItemButton>
                    </List>
                  </Popover>
                </Grid>
                <pre
                  style={{
                    width: "80%",
                    marginLeft: "5%",
                    marginTop: " 10px",
                    marginBottom: " 10px",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  {item.comment}
                </pre>
                <Grid
                  item
                  lg={0.2}
                  sx={{ position: "absolute", top: "10px", right: "10px" }}
                >
                  <ButtonBase onClick={handleOpenPopover}>
                    <Image src="/Kebab.svg" width={16} height={16} alt="" />
                  </ButtonBase>
                </Grid>
              </CardContent>
            </Card>
          );
        })}
    </Grid>
  );
}