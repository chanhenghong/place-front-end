import { handleBreakpoints } from "@mui/system";
import { useSetRecoilState } from "recoil";
import { regionState } from "../states/filterStates";
const Input = () => {
    const setRegion = useSetRecoilState(regionState)
    const handleOnChange=(e)=>
    {
    setRegion(e.target.value)
    }
    return ( 
        <input placeholder="search" onChange={handleOnChange}></input>
     );
}
 
export default Input;