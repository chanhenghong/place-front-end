import * as React from "react";
import Image from "next/image";
import "firebase/firestore";
import firebase from "firebase/app";
import LinearProgress from "@mui/material/LinearProgress";
import DeleteIcon from "@mui/icons-material/Delete";

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

import EditIcon from "@mui/icons-material/Edit";

import { Avatar, Stack, TextField, Button, Typography } from "@mui/material";

import FlagIcon from "@mui/icons-material/Flag";

export default function Comment({ idRout }) {



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
          <form  style={{ width: "100%" }}>
            <Grid container>
              <Grid item lg={0.5} md={0.5} sm={1} xs={1}>
                <Avatar
                  style={{ margin: "auto" }}
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1544371788-fa871246410f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
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
                <h5>Somavutey</h5>
              </Grid>
              <Grid item lg={6.3} md={5} sm={5} xs={5}>
                <span>
                
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
    
       
      
            <Card
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
                    <Avatar alt="Profile Pic" src="https://images.unsplash.com/photo-1544371788-fa871246410f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" />{" "}
                  </Grid>
                  <Grid
                    item
                    lg={1.5}
                    md={2}
                    sm={4}
                    xs={5}
                    style={{ marginTop: "-10px", marginLeft: "15px" }}
                  >
                    <h5 style={{ marginBottom: 0 }}>Somavutey</h5>
                  </Grid>
                  <Grid item lg={6.3} md={5} sm={5} xs={5}>
                    <div>
                      {[...Array(5)].map((itemStar, index) => {
                        return (
                          <span key={index}>
                              {/*
                            <FavoriteIcon
                              style={{
                                color:
                                  item.star > index ? "#FFBA5A" : "#a9a9a9",
                              }}
                            />
                            */}
                          </span>
                        );
                      })}
                    </div>
                  </Grid>
                  <Grid item lg={3.5} md={3} sm={11} xs={11}>
                    {/*
                    <h5 style={{ margin: " 0 30px" }}>
                      {new Date(item.time).toLocaleString()}
                    </h5>
                    */}
                  </Grid>
                  <Popover
                    //open={open}
                    //onClose={handleClosePopover}
                    //anchorEl={anchorEl}
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
                  hi
                </pre>
                <Grid
                  item
                  lg={0.2}
                  sx={{ position: "absolute", top: "10px", right: "10px" }}
                >
                  
                
                </Grid>
              </CardContent>
            </Card>
          );
     
    </Grid>
  );
}