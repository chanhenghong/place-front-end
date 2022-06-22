import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import React from "react";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AboutUsPage from "../../pages/about_us";
const useStyles = makeStyles({
  footer: {
    background: "#008058",
    marginTop: 50,
    width: "100%",
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
  footerTitle: {
    fontSize: 18,

    marginTop: "20px",
    fontWeight: "bold",
  },
  footerSub: {
    display: "block",
    fontSize: "15px",
    lineHeight: "2em",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  contact: {
    color: "#000",
    fontSize: 15,
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.footer}>
        <Grid container spacing={2}>
          <Grid item sm={4} xs={12}>
            <Typography variant="h3" className={classes.footerTitle}>
              More activities
            </Typography>
            <Link href="#">
              <a className={classes.footerSub}>Shopping</a>
            </Link>
            <Link href="#">
              <a className={classes.footerSub}>Sightseeing</a>
            </Link>
            <Link href="#">
              <a className={classes.footerSub}>Eating & Drinking</a>
            </Link>
            <Link href="#">
              <a className={classes.footerSub}>Learning</a>
            </Link>
            <Link href="#">
              <a className={classes.footerSub}>Entertaining</a>
            </Link>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Typography variant="h3" className={classes.footerTitle}>
              More kind of place
            </Typography>
            <Link href="#">
              <a className={classes.footerSub}>Modern</a>
            </Link>
            <Link href="#">
              <a className={classes.footerSub}>History</a>
            </Link>
            <Link href="#">
              <a className={classes.footerSub}>Outdoor</a>
            </Link>
            <Link href="#">
              <a className={classes.footerSub}>Indoor</a>
            </Link>
            <Link href="#">
              <a className={classes.footerSub}>Nature</a>
            </Link>
            <Link href="#">
              <a className={classes.footerSub}>Event</a>
            </Link>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Typography variant="h3" className={classes.footerTitle}>
              More Region
            </Typography>
            <Link href="#">
              <a className={classes.footerSub}>Kampot</a>
            </Link>
            <Link href="#">
              <a className={classes.footerSub}>Sihanouk Ville</a>
            </Link>
            <Link href="#">
              <a className={classes.footerSub}>Koh Kong</a>
            </Link>
            <Link href="#">
              <a className={classes.footerSub}>Kep</a>
            </Link>
            <Link href="#">
              <a className={classes.footerSub}>Kratie</a>
            </Link>
            <Link href="#">
              <a className={classes.footerSub}>Kampong Cham</a>
            </Link>
          </Grid>
          <Grid item lg={12} sm={12} xs={12}>
            <hr
              style={{ border: "none", height: 3, backgroundColor: "black" }}
            />
          </Grid>

          {/* <Grid item textAlign="center" lg={6} sm={6} xs={6}>
            <Typography
              
            >
              CONTACT US!
            </Typography>
          </Grid> */}
          <Grid item textAlign="center" lg={6} sm={6} xs={6}>
            <Link href="/contact_us">
              <a
                variant="h5"
                color="#000"
                style={{
                  fontWeight: "bold",
                  fontSize: "clamp(1rem,1.5vw,2rem)",
                }}
                className={classes.footerSub}
              >
                <ContactSupportOutlinedIcon />
                CONTACT US!
              </a>
            </Link>
          </Grid>
          <Grid item textAlign="center" lg={6} sm={6} xs={6}>
            <Link href="/about_us">
              <a
                style={{
                  display: "block",
                  color: "white",
                  fontSize: "clamp(1rem,1.5vw,2rem)",
                  fontWeight: "bold",
                  // textDecoration: "underline",
                  lineHeight: 1.235,
                }}
                className={classes.footerSub}
              >
                <GroupOutlinedIcon fontSize="medium" />
                <span> ABOUT US!</span>
              </a>
            </Link>
          </Grid>

          <Grid container style={{ margin: "50px 100px" }}>
            <Grid item md={4} sm={4} xs={12}>
              <Typography className={classes.contact}>
                <LocationOnOutlinedIcon />
                2007st Kakab, Khan Puthisen Chey, Phnom Penh
              </Typography>
            </Grid>
            <Grid item md={2} sm={4} xs={12}>
              <Typography
                className={classes.contact}
                style={{ color: "black", fontSize: "16px" }}
              >
                <SupportAgentIcon />
                <span> +855 97 8046 588</span>
              </Typography>
            </Grid>
            <Grid item md={3} sm={4} xs={12}>
              <a
                href="mailto:placejakrava@gmail.com, chanheng2002@gmail.com, chanheng.it@gmail.com, searcheuchheang@gmail.com, umsomavutey1010@gmail.com, vannakhema@gmail.com"
                className={(classes.contact, classes.footerSub)}
                style={{ color: "white", fontSize: "17px" }}
              >
                <EmailOutlinedIcon fontSize="small" />
                <span> placejakrava@gmail.com</span>
              </a>
            </Grid>
            <Grid item md={2} sm={4} xs={12}>
              <Link href="/contact_us">
                <a
                  variant="p"
                  color="#000"
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                  className={classes.footerSub}
                >
                  <ContactSupportOutlinedIcon fontSize="small" />
                  CONTACT US!
                </a>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;

// import { Grid, Typography } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import { activities, region, kindofplace } from "../../web-admin/_mock_/footer";
// import Link from "next/link";
// import FooterListComponent from "../presentations/FooterComponent";
// import React from "react";
// const useStyles = makeStyles({
//   footer: {
//     background: "#15A2B8",
//     marginTop: 50,
//     width: "100%",
//     textAlign: "center",
//     color: "white",
//     fontSize: 18,
//   },
//   footerTitle: {
//     fontSize: 18,
//     marginTop: "20px",
//     fontWeight: "bold",
//   },
//   footerSub: {
//     display: "block",
//     fontSize: "15px",
//     lineHeight: "2em",
//     "&:hover": {
//       textDecoration: "underline",
//     },
//   },
//   contact: {
//     color: "#000",
//     fontSize: 15,
//   },
// });

// const Footer = () => {
//   const classes = useStyles();
//   return (
//     <div>
//       <div className={classes.footer}>
//         <Grid container spacing={2}>
//           {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//                                                          List all Acitivities

//               - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/}
//           <Grid item sm={4} xs={12}>
//             <Typography variant="h3" className={classes.footerTitle}>
//               More activities
//             </Typography>

//             {activities.map((items, index) => {
//               return (
//                 <FooterListComponent key={index}>
//                   {items.item}
//                 </FooterListComponent>
//               );
//             })}
//           </Grid>
//           <Grid item sm={4} xs={12}>
//             <Typography variant="h3" className={classes.footerTitle}>
//               More activities
//             </Typography>
//             {kindofplace.map((items, index) => {
//               return (
//                 <FooterListComponent key={index}>
//                   {items.item}
//                 </FooterListComponent>
//               );
//             })}
//           </Grid>
//           <Grid item sm={4} xs={12}>
//             <Typography variant="h3" className={classes.footerTitle}>
//               More activities
//             </Typography>
//             {region.map((items, index) => {
//               return (
//                 <FooterListComponent key={index}>
//                   {items.item}
//                 </FooterListComponent>
//               );
//             })}
//           </Grid>
//           {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//                                                          Draw Horizontal Line
//               - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/}
//           <Grid item lg={12} sm={12} xs={12}>
//             <hr
//               style={{ border: "none", height: 3, backgroundColor: "black" }}
//             />
//           </Grid>
//           {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//                                                          Contact Us and About Us
//               - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/}
//           <Grid item textAlign="center" lg={6} sm={6} xs={6}>
//             <Typography
//               variant="h5"
//               color="#000"
//               style={{ fontWeight: "bold", fontSize: "clamp(1rem,1.5vw,2rem)" }}
//             >
//               CONTACT US!
//             </Typography>
//           </Grid>
//           <Grid item textAlign="center" lg={6} sm={6} xs={6}>
//             <Link href="#">
//               <a
//                 style={{
//                   display: "block",
//                   color: "#000",
//                   fontSize: "clamp(1rem,1.5vw,2rem)",
//                   fontWeight: "bold",
//                   textDecoration: "underline",
//                   lineHeight: 1.235,
//                 }}
//               >
//                 ABOUT US!
//               </a>
//             </Link>
//           </Grid>

//           <Grid container style={{ margin: "50px 100px" }}>
//             <Grid item md={4} sm={4} xs={12}>
//               <Typography className={classes.contact}>
//                 2007st Kakab, Khan Puthisen Chey, Phnom Penh
//               </Typography>
//             </Grid>
//             <Grid item md={2} sm={4} xs={12}>
//               <Typography className={classes.contact}>
//                 +855 10 46 61 47
//               </Typography>
//             </Grid>
//             <Grid item md={2} sm={4} xs={12}>
//               <Typography className={classes.contact}>@Place</Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//       </div>
//     </div>
//   );
// };

// export default Footer;
