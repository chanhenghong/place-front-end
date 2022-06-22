import { Paper, Typography, ButtonBase, Stack, styled } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ChoosePostArticleOr() {
  const router = useRouter();
  return (
    <div>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Paper
          sx={{
            width: "50%",
            height: "100vh",
            backgroundColor: "#15A2B8",
            borderRadius: "0px",
          }}
        >
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Item
              sx={{
                backgroundColor: "whtie",
                width: "444px",
                height: "500px",
                borderRadius: "32px",
                marginTop: "160px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  marginTop: "40px",
                  marginBottom: "60px",
                }}
              >
                Write an Article
              </Typography>
              <ButtonBase onClick={() => router.push("/post_content")}>
                <Image
                  src="/PopUpCategories/Write an article.svg"
                  alt="Write an article.svg"
                  width={199}
                  height={211}
                />
              </ButtonBase>
            </Item>
          </Stack>
        </Paper>
        <Paper
          sx={{
            width: "50%",
            height: "100vh",
            backgroundColor: "white",
            borderRadius: "0px",
          }}
        >
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Item
              sx={{
                backgroundColor: "#15A2B8",
                width: "444px",
                height: "500px",
                borderRadius: "32px",
                marginTop: "160px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  marginTop: "40px",
                  marginBottom: "60px",
                }}
              >
                Post a Place
              </Typography>
              <ButtonBase onClick={() => router.push("/post_content")}>
                <Image
                  src="/PopUpCategories/Post a place.svg"
                  alt="Write an article.svg"
                  width={199}
                  height={211}
                />
              </ButtonBase>
            </Item>
          </Stack>
        </Paper>
      </Stack>
    </div>
  );
}
