import {
	Dialog,
	DialogContent,
	DialogTitle,
	Typography,
	Button,
	Box,
	Stepper,
	Step,
	StepLabel,
	Stack,
  } from "@mui/material";
  import styled from "styled-components";
  import { makeStyles } from "@material-ui/core";
  import { useState } from "react";
  import Provinces from "./Provinces";
  import Kinds from "./Kinds";
  import Activities from "./Activities";
  import TypePlaces from "./TypePlaces";
  import Sucessful from "./Sucessful";
  const StepperLabel = ["", "", "", "", " "];
  export default function PopUpCategoriesArticle({ open, onClose }) {
	const [activeStep, setActiveStep] = useState(0);
	const nextStep = () => {
	  if (activeStep < 4) {
		setActiveStep((currentStep) => currentStep + 1);
	  }
	};
	const backStep = () => {
	  if (activeStep > 0) {
		setActiveStep((currentStep) => currentStep - 1);
	  }
	};
	return (
	  <div>
		<StyledDialog
		  open={open}
		  onClose={onClose}
		  fullWidth={"true"}
		  maxWidth={"sm"}
		>
		  <DialogTitle textAlign="center">
			<Typography
			  fontWeight="medium"
			  variant="subtitle2"
			  fontSize="18px"
			  color="#008058"
			  fontWeight="bold"
			>
			  Choose these Categories
			</Typography>
		  </DialogTitle>
		  <DialogContent align="center">
			<Box>
			  {activeStep === 0 && (
				<Box>
				  <Provinces />
				</Box>
			  )}
			  {activeStep === 1 && (
				<Box>
				  <Kinds />
				</Box>
			  )}
			  {activeStep === 2 && (
				<Box>
				  <Activities />
				</Box>
			  )}
			  {activeStep === 3 && (
				<Box>
				  <TypePlaces />
				</Box>
			  )}
			  {activeStep === 4 && (
				<Box>
				  <Sucessful />
				</Box>
			  )}
			</Box>
		  </DialogContent>
  
		  <DialogContent  sx={{ height: "100px" }}>
			<Stack
			  direction="row"
			  justifyContent="center"
			  alignItems="center"
			  spacing={0}
			>
			
			  <Button style={{backgroundColor: "#008058", borderRadius: "8px" }} variant="contained" onClick={() => backStep()}>
				Back
			  </Button>
			  <Stepper sx={{ width: 300 }} activeStep={activeStep}>
				{StepperLabel.map((item, index) => (
				  <Step>
					<StepLabel>{item}</StepLabel>
				  </Step>
				))}
			  </Stepper>
			  <Button style={{backgroundColor: "#008058", borderRadius: "8px" }} variant="contained"   onClick={() => nextStep()}>
				Next
			  </Button>
			  {/* <Typography>{activeStep}</Typography> */}
			</Stack>
		  </DialogContent>
		</StyledDialog>
	  </div>
	);
  }
  
  const StyledDialog = styled(Dialog)`
	&& {
	  border-radius: 30px;
	  height: 650px;
	}
	& .Mui-completed {
	  color: #e09c26;
	  font-size: small;
	}
	& .Mui-active {
	  color: #e09c26;
	  font-size: large;
	}
  `;
  