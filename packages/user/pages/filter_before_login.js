import { Container,Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FormRow from "./Filter";
import FilterBar from "../components/presentations/FilterBar";
import HorizontalCards from "./HorizontalCards";
// import PreviewCard from "./Firebase/Preview"
import ContentList from "./Details/index";
import NavbarBeforeLogin from "../components/containers/NavbarBeforeLogin";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/containers/Footer";
import { Stack,Button } from "@mui/material";
import FilterPage from './filterPage'

const useStyles = makeStyles({});
const FilterPagesBeforeLOgin = () => {
  const classes = useStyles();
  return (
    <div>
      <NavbarBeforeLogin />

      <Box
        sx={{
          width: "100%",
          height: { xs: "60vh", sm: "80vh" },
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

     
      <FilterPage></FilterPage>
 
    </div>
  );
};

export default FilterPagesBeforeLOgin;
