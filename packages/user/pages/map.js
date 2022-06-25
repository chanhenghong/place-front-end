import React from "react";
import BaseMap from "../components/containers/BaseMap";

import { Container, Grid } from "@mui/material";
import NavBarAfterLogin from '../components/containers/NavBarAfterLogin'
import NavbarBeforeLogin from "../components/containers/NavBarBeforeLogin";
export default function LogIn() {
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //                                                Variables
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  return(
    <div>
     
     <NavbarBeforeLogin></NavbarBeforeLogin>
     <div >
     
     </div>
        <BaseMap 
          defaultCenter={[104.91666266871523, 11.541525694098969]}
          zoom={12}
          
          
          MapStyles={{ width: "100%", height: "90vh"}}
        ></BaseMap>

    </div>
  )
}
