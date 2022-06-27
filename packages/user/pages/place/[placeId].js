import axios from 'axios'
import { useRouter } from 'next/router'
import Image from "next/image";
import postData from '../../utils/api/post';
import React from 'react'
import useSWR from 'swr'
import CommentNew from './../../components/presentations/CommentNew'
import { Avatar } from '@mui/material';
import { Stack,TextField,Button, Container, Typography, Grid, Box, ImageList, ImageListItem, useMediaQuery } from '@mui/material'
import { Popover, List, Card, CardContent, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { EditIcon, DeleteIcon, FlagIcon } from '@mui/icons-material'
const fetcher = (...args) => fetch(...args).then(res => res.json())
import NavbarBeforeLogin from '../../components/containers/NavBarBeforeLogin'
import LocationBox from "../../components/presentations/LocationBox";
import Content from "../../components/presentations/ContentContainer/Content";
import Footer from "../../components/containers/Footer";
import { useState } from 'react';
export default function ContactUsPage() {
  const router = useRouter()
  const laptop = useMediaQuery("(min-width:1200px)");
  const { placeId } = router.query
  const [comment, setComment]= useState("")
  console.log(placeId)

  const { data, error } = useSWR(`http://localhost:3000/place/product/${placeId}`, fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  console.log(data.response)
 
  const AddNewComment =(e)=>
  {
   e.preventDefault()
    console.log("post comment")
    postData(`http://localhost:3000/place/product/comments/${placeId}`,{
      text:comment,
    })
  }
  const getCommentText=(value)=>
  {
    console.log(value)
    setComment(value)
  }
  return (
    <div>
      <NavbarBeforeLogin></NavbarBeforeLogin>

      {
        data.response.map((item, index) => {
          return (
            <div>
              <Stack direction="row" key={index}>
                <Container
                  maxWidth="lg"
                  sx={{ marginLeft: "80px", marginTop: "80px", marginRight: "80px", flex: 2 }}
                >
                  <Typography
                    style={{
                      margin: "20px 20px 20px 0",
                      fontSize: "42px",
                      textAlign: "left",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Grid container sx={{ marginBottom: 5 }}>
                    <Grid item xs={11}>
                      <Image src="/pin.png" width={20} height={20} />
                      <span style={{ paddingLeft: 5 }}>{item.region}</span>
                    </Grid>
                    <Grid item xs={1} sx={{ textAlign: "end" }}>
                      <FavoriteIcon />
                    </Grid>
                  </Grid>
                  <Box sx={{ width: "100%", height: 450, overflowY: "scroll" }}>
                    <ImageList variant="masonry" cols={2} gap={8}>
                      {item.url.map((item) => (
                        <ImageListItem key={item}>
                          <img key={item} src={`${item}`} loading="lazy" />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </Box>

                  <div>
                    <br></br>
                    <br></br>
                    <p>
                      sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                      quae ab illo inventore veritatis et quasi architecto beatae vitae
                      dicta sunt explicabo. nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt. making this the first
                      true generator on the internet. it uses a dictionary of over 200
                      latin words, combined with a handful of model sentence structures,
                      to generate lorem ipsum which looks reasonable. the generated
                      lorem ipsum is therefore always free from repetition, injected
                      humour
                    </p>
                  </div>
                  <Grid container>
                    <Grid
                      item
                      sx={{ flex: 1, width: "50%", borderRight: "1px solid #000" }}
                    >
                      <h4>Note</h4>
                      <ul>
                        <li>hello</li>
                        <li>hi</li>
                        <li>bonjour</li>
                      </ul>
                    </Grid>
                    <Grid item sx={{ flex: 1, width: "50%", paddingLeft: "10px" }}>
                      <h4>Proximity</h4>
                      <ul>
                        <li>hello</li>
                        <li>hi</li>
                        <li>bonjour</li>
                      </ul>
                    </Grid>
                  </Grid>
                  <div>
                    <div>
                      <LocationBox />
                    </div>
                  </div>
                  <div>
                    {/* 
                            {horizontalCards.filter((item)=>item.id==placeId)
                                            .map((item) =>(
                                                <Comment idRout={placeId} />
                                            ))}*/}
                    <br />
                    {/* <Comment idRout={placeId} /> */}
                  </div>
                </Container>
                {laptop && (
                  <Container sx={{ flex: 1, marginTop: "150px" }}>
                    {" "}
                    <div
                      style={{
                        position: "sticky",
                        top: 70,
                        width: 400,
                        height: 200,
                      }}
                    >
                      <Typography variant="body1">Follow us on Facebook</Typography>

                      <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FPlaces-%E1%9E%91%E1%9E%B8%E1%9E%80%E1%9E%93%E1%9F%92%E1%9E%9B%E1%9F%82%E1%9E%84-100266045831863%2F&tabs=timeline&width=400&height=100&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=335841394721295"
                        width="400"
                        height="130"
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  </Container>
                )}
              </Stack>
              <Grid sx={{ marginLeft: "80px", marginRight: "80px" }}>
                <Content />
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
                  onChange={(e)=>getCommentText(e.target.value)}
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
                 onClick={AddNewComment}
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
                {
                //console.log("152",data.response[0].comments.length)
                data.response[0].comments.length != 0 ? data.response[0].comments.map((item, index) => {
                  return (
                    <div>
   
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
                            
                            <Grid item lg={3.5} md={3} sm={11} xs={11}>
                           
                            </Grid>
                            <Popover
                            
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
                            {item.text}
                          </pre>
                          <Grid
                            item
                            lg={0.2}
                            sx={{ position: "absolute", top: "10px", right: "10px" }}
                          >


                          </Grid>
                        </CardContent>
                      </Card>

                    </div>
                  )
                }) : console.log("no comment in this content")
              }
              </Grid>
              <Footer></Footer>
              

            </div>
          )
        })

      }


    </div>
  )


}

