import {
  Paper,
  Typography,
  ButtonBase,
  Stack,
  styled,
  Grid,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const useStyles = makeStyles((theme) => ({
  Card: {
    [theme.breakpoints.down("sm")]: {
      width: "320px",
      height: "303px",
      marginTop: "47px",
    },
  },
  backgroundCard: {
    height: "100vh",

    borderRadius: "0px",
    [theme.breakpoints.down("sm")]: {
      height: "50vh",
      borderRadius: "0px",
    },
  },
  iconCard: {
    [theme.breakpoints.down("sm")]: {
      width: "166px",
      height: "149",
    },
  },
  Text: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "40px",
      marginBottom: "5px",
    },
  },
}));

export default function ChoosePostArticleOr() {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div>
      <Grid md={12} item container>
        <Grid lg={6} md={6} sm={12} xs={12} item>
          <Paper
            className={classes.backgroundCard}
            sx={{ backgroundColor: "rgba(00, 128, 88,0.32)" }}
          >
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Item
                className={classes.Card}
                sx={{
                  backgroundColor: "whtie",
                  width: "400px",
                  height: "450px",
                  borderRadius: "16px",
                  marginTop: "160px",
                }}
              >
                <Typography
                  className={classes.Text}
                  sx={{
                    fontSize: "27px",
                    fontWeight: "bold",
                    marginTop: "40px",
                    marginBottom: "60px",
                  }}
                >
                  Write an Article
                </Typography>
                <ButtonBase onClick={() => router.push("/post_content")}>
                  <img
                    className={classes.iconCard}
                    src="/PopUpCategories/Write an article.svg"
                    alt="Write an article.svg"
                    width={199}
                    height={211}
                  />
                </ButtonBase>
              </Item>
            </Stack>
          </Paper>
        </Grid>
        <Grid lg={6} md={6} sm={12} xs={12} item>
          <Paper
            className={classes.backgroundCard}
            sx={{
              height: "100vh",
              backgroundColor: "white",
              borderRadius: "0px",
            }}
          >
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Item
                className={classes.Card}
                sx={{
                  backgroundColor: "rgba(00, 128, 88,0.32)",
                  width: "400px",
                  height: "450px",
                  borderRadius: "16px",
                  marginTop: "160px",
                }}
              >
                <Typography
                  className={classes.Text}
                  sx={{
                    fontSize: "27px",
                    fontWeight: "bold",
                    marginTop: "40px",
                    marginBottom: "60px",
                  }}
                >
                  Post a Place
                </Typography>
                <ButtonBase onClick={() => router.push("/post_content")}>
                  <img
                    className={classes.iconCard}
                    src="/PopUpCategories/Post a place.svg"
                    alt="Write an article.svg"
                    width={199}
                    height={211}
                  />
                </ButtonBase>
              </Item>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
