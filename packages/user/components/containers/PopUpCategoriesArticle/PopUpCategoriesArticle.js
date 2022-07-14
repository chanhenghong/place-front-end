import {
    Dialog,
    DialogContent,
    DialogTitle,
    Typography,
    Box,
    Stepper,
    Step,
    StepLabel,
    Stack,
    Button
  } from "@mui/material";
  import styled from "styled-components";
  import {useRecoilValue} from 'recoil';
  import {contentDataState} from './../../../states/contentState'
  import { makeStyles } from "@material-ui/core";
  import { useState } from "react";
  import Provinces from "./Provinces";
  import Kinds from "./Kinds";
  import Activities from "./Activities";
  import TypePlaces from "./TypePlaces";
  import Sucessful from "./Sucessful";

import postData from "../../../utils/api/post";
  const StepperLabel = ["", "", "", "", " "];
  export default function PopUpCategories({ open, onClose }) {
    const [activeStep, setActiveStep] = useState(0);
    const dataContent = useRecoilValue(contentDataState)
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
  
    const handlePostContent= async ()=>{
      
      try {
        console.log(dataContent);
         const data =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/place/product`)
         console.log(data)
        // upload images  return  urls 
       
       //const res =  await postData(`${process.env.NEXT_PUBLIC_API_URL}/place/product`, {
       //  ...dataContent,
       //  files:
       //});
       const res= await postData(`${process.env.NEXT_PUBLIC_API_URL}/place/product`,
       {
         title:"Angkor Hospital",
         desc:"hello",
         note:"hello",
         email:"umsomavutey1010@gmail.com",
         phoneNumber:"016",
         address:"Sangkrous Cheat",
         proximity:"135",
         latlong:["134","135"],
         region:"phnompenh",
         kindofplaces:"advanturous",
         typeofplaces:"restaurant",
         activities:"eactanddrink",
         prices:"$$$",
         liked:"blue",
         comments:[]

       })

       if(res?.statusCode==200){
        setActiveStep((currentStep) => currentStep + 1);
       }
      } catch (error) {
        console.log(error)
      }
      
    }
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
  
          <DialogContent sx={{ height: "100px" }}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={0}
            >
              <Button
                style={{ backgroundColor: "#008058", borderRadius: "8px" }}
                variant="contained"
                onClick={() => backStep()}
              >
                Back
              </Button>
              <Stepper sx={{ width: 300 }} activeStep={activeStep}>
                {StepperLabel.map((item, index) => (
                  <Step key={index}>
                    <StepLabel>{item}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              {activeStep == 4 ? (
                <Button
                  style={{ backgroundColor: "#008058", borderRadius: "8px" }}
                  variant="contained"
                  onClick={() => handlePostContent()}
                >
                  Submit
                </Button>
              ) : activeStep == 5 ? (
                <Button
                  style={{ backgroundColor: "#008058", borderRadius: "8px" }}
                  variant="contained"
                  onClick={onClose}
                >
                  Close
                </Button>
              ) : (
                <Button
                  style={{ backgroundColor: "#008058", borderRadius: "8px" }}
                  variant="contained"
                  onClick={() => nextStep()}
                >
                  Next
                </Button>
              )}
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
  