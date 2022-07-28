import { atom } from "recoil";

const articleDataState = atom({
  key: "ARTICLE_DATA",
  default: {},
});



export { articleDataState};
