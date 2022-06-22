import { Button } from '@mui/material';

import { fireStore } from '../../services/firebase'
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Router, useRouter } from "next/router";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from 'react'
import SearchFilter from '../../components/presentations/SearchFilter'
const Img = styled("img")({
    margin: 0,
    padding: 0,
    maxWidth: "100%",
    maxHeight: "100%",
});
const ContentList = () => {
    const router = useRouter();

    const [horizontalCards, setHorizontalCards] = React.useState([])
    const [isFilter, setIsFilter] = React.useState(false)
    const [allProducts, setProducts] = React.useState([])
    React.useEffect(() => {
        fireStore.collection("contents").onSnapshot((snapshot) => {
            const horizontalCard = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            })
            console.log(horizontalCard);
            setHorizontalCards(horizontalCard)
        })
    }, [])

    const viewMore = (item) => {
        localStorage.setItem('viewMore', item)
        router.push(`/Details/${item.id}`)

    }
    const updateHeart = async (id, updates) => {
        fireStore.collection("contents").doc(id).update(updates);

    }
    const handleCreateForm = (e) => {
        e.preventDefault();
        let productFilters;
        //filter condition 
        if (Boolean(horizontalCards.region)) {
            productFilters = horizontalCards.filter((item) => {
                return item.region.includes(region)
            })
        }

        setIsFilter(true)
        setProducts(productFilters)

    }

    return (
        <div>

            <SearchFilter></SearchFilter>
            {

                horizontalCards.map((item, index) => {
                    if (index % 2 == 0) {
                        return (
                            <>
                                <Paper paddingLeft={10}
                                    variant="outlined"
                                    sx={{
                                        p: 2,
                                        margin: "auto",
                                        maxWidth: 1123,
                                        flexGrow: 1,
                                        borderColor: "black",
                                        marginTop: 5,



                                    }}
                                    p={2}
                                >
                                    <Grid container >
                                        <Grid item xs={12} sm container justifyContent="center">
                                            <Grid item >
                                                <Img
                                                    sx={{ width: 350, height: 300, marginRight: 4 }}
                                                    alt="complex"
                                                    src={item.url[0]}
                                                />
                                            </Grid>

                                            <Grid item md xs container direction="column" spacing={2}>
                                                <Grid item >
                                                    <Typography
                                                        gutterBottom
                                                        variant="subtitle1"
                                                        component="div"
                                                    >
                                                        {item.title}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        gutterBottom
                                                        paddingTop="50px"
                                                    >
                                                        {item.desc}
                                                    </Typography>
                                                </Grid>
                                                <Grid item spacing={4}>
                                                    <Button
                                                        sx={{
                                                            cursor: "pointer",
                                                        }}
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={() => viewMore(item)}>See More

                                                    </Button>
                                                    <IconButton>
                                                        {
                                                            item.color == "primary" ? <FavoriteIcon

                                                                color={item.color}

                                                                onClick={() => updateHeart(item.id, { color: "secondary" })}

                                                            /> : <FavoriteIcon

                                                                color={item.color}

                                                                onClick={() => updateHeart(item.id, { color: "primary" })}

                                                            />}




                                                    </IconButton>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </>
                        )
                    }
                    else {
                        return (
                            <Paper paddingLeft={10}
                                variant="outlined"
                                sx={{
                                    p: 2,
                                    margin: "auto",
                                    maxWidth: 1123,
                                    flexGrow: 1,
                                    borderColor: "black",
                                    marginTop: 5,



                                }}
                                p={2}
                            >
                                <Grid container >
                                    <Grid item xs={12} sm container justifyContent="center">


                                        <Grid item md xs container direction="column" spacing={2}>
                                            <Grid item >
                                                <Typography
                                                    gutterBottom
                                                    variant="subtitle1"
                                                    component="div"
                                                >
                                                    {item.title}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    gutterBottom
                                                    paddingTop="50px"
                                                >
                                                    {item.desc}
                                                </Typography>
                                            </Grid>
                                            <Grid item spacing={4}>
                                                <Button
                                                    sx={{
                                                        cursor: "pointer",
                                                    }}
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={() => viewMore(item)}>See More

                                                </Button>
                                                <IconButton>
                                                    {
                                                        item.color == "primary" ? <FavoriteIcon

                                                            color={item.color}

                                                            onClick={() => updateHeart(item.id, { color: "secondary" })}

                                                        /> : <FavoriteIcon

                                                            color={item.color}

                                                            onClick={() => updateHeart(item.id, { color: "primary" })}

                                                        />}




                                                </IconButton>
                                            </Grid>

                                        </Grid>
                                        <Grid item >
                                            <Img
                                                sx={{ width: 350, height: 300, marginRight: 4 }}
                                                alt="complex"
                                                src={item.url[0]}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        );
                    }

                })
            }

        </div >
    )

}

export default ContentList;