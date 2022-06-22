import { atom } from "recoil";

const regionState = atom({
  key: "REGIONSTATE",
  default: "",
});
const kindofplaceState=atom({
    key:"KINDOFPLACE",
    default:""
})
const activityState=atom({
    key:"ACTIVITIES",
    default:""
})
const typeofplaceState=atom({
    key:"TYPEOFPLACE",
    default:""
})
const priceState=atom({
    key:"PRICE", 
    default:""
})


export { regionState, kindofplaceState, activityState,typeofplaceState, priceState};
