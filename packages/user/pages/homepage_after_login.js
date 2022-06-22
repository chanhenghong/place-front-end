import Footer from "../components/containers/Footer";
import CardInHomepage from "../components/presentations/ContentContainer/ContentContainer";
import PrimarySearchAppBar from "../components/containers/NavBarAfterLogin";
import ButtonBases from "../components/presentations/TrendyCard";
import { Typography } from "@mui/material";
export default function HomepageAfterLogin({user}) {
  console.log(user)
  return (
    <>
   
    <PrimarySearchAppBar/>
    <ButtonBases/>
    <div style={{ marginLeft: "8%", marginRight: "8%" }}>
      <CardInHomepage />
    </div>
    <Footer />
    
    </>
    
  );
}
