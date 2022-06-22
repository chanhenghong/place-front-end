import {
	Typography,
	Card,
	ButtonBase,
	CardActionArea,
	CardMedia,
	CardContent,
	CardActions,
	Grid,
	Button,
  } from "@mui/material";
  import Router from 'next/router'
  import { kindOfPlaces } from "../../../web-admin/_mock_/kindOfPlaces";
  import Carousel from "react-multi-carousel";
  import "@splidejs/react-splide/css";
  import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useRecoilState, useRecoilValue } from "recoil";
import { kindofplaceState } from "../../../states/filterStates";
  
 
  const KindOfPlaces = () => {
	  const [kindofplaceS, setkindofplaceS]=useRecoilState(kindofplaceState)
	  //const kindofplaceValue= useRecoilValue(kindofplaceState)
	  //console.log(kindofplaceValue)
	return (
	  <div>
		<span
		  id="kind"
		  style={{
			position: "relative",
			top: "-90px",
			visibility: "hidden",
		  }}
		></span>
		<Typography
		  variant="h5"
		  style={{
			color: "#000",
			marginTop: 50,
			marginBottom: 14,
			fontFamily: "Work sans",
			opacity: "0.8",
		  }}
		>
		  <b>Kind of place</b>
		</Typography>
		<Splide
		  options={{
			perPage: 5,
			breakpoints: {
			  1430: {
				perPage: 4,
			  },
			  1090: {
				perPage: 3,
			  },
			  780: {
				perPage: 2,
			  },
			},
			pagination: false,
			drag: "free",
		  }}
		>
		  {kindOfPlaces.map((image, index) => {
			return (
			  <SplideSlide key={index}>
				<Card
				  sx={{
					width: { xs: "160px", sm: "216px" },
					height: { xs: "130px", sm: "190px" },
					borderRadius: "16px",
					marginBottom: "10px",
					position: "relative",
				  }}
				>
				  <ButtonBase
				  onClick={() => (image.title)}//Router.push("./filterPage")}
				  >
					<CardActionArea>
					  <CardMedia
						image={image.url}
						sx={{
						  width: { xs: "160px", sm: "216px" },
						  height: { xs: "130px", sm: "190px" },
						}}
						component="img"
						alt="green iguana"
					  />
					  <CardContent
						sx={{
						  width: { xs: "160px", sm: "216px" },
						  height: { xs: "130px", sm: "190px" },
						  position: "absolute",
						  bottom: 1,
						  backgroundImage:
							"linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,0.8))",
						}}
					  >
						<Typography
						  sx={{
							fontSize: { xs: "15px", sm: "19px" },
							position: "absolute",
							bottom: 0,
						  }}
						  gutterBottom
						  variant="h5"
						  textAlign="left"
						  component="div"
						  color="white"
						>
						  {image.title}
						</Typography>
					  </CardContent>
					</CardActionArea>
				  </ButtonBase>
				</Card>
			  </SplideSlide>
			);
		  })}
		</Splide>
	  </div>
	);
  };
  
  export default KindOfPlaces;
  