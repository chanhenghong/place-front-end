import TestComponent from "./TestComponent";
import { regionState } from "../states/filterStates";
import { useRecoilValue } from "recoil";
import Input from "./recoil1";
const Test = () => {
	const regionValue= useRecoilValue(regionState)
	return ( 
		<div>
			<h1>Test Page</h1>
			<Input/>
			{regionValue}
		</div>
	 );
}
 
export default Test;