import { Button } from "@mui/material";
import postData from "../utils/api/post";
const UploadFilePage = () => {
  const handlePost= async ()=>{
      
    try {
      //console.log(dataContent);
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
       comments:[
         {
           userId:"62aac906b3870ec88fa860ed"
         }
       ]
     

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
     <h1>Test Post</h1>
    <Button onClick={handlePost}>Hello</Button>
  </div>
   )
};

export default UploadFilePage;
