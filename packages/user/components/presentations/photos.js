import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { fireStorage } from "../../services/firebase";
import { useRecoilState } from "recoil";
import { onlineFiles } from "../../states/imageFilesState";

import { contentDataState } from "./../../states/contentState";
const UploadFilePage = () => {
  //file preview before upload to firestore
  const [filesStatic, setFilesStatic] = React.useState([]);
  const allFileStatic = [];
  const [contentData,setContentData]= useRecoilState(contentDataState)
  const photos = [];
  // - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - -
  //upload to firestore
  const [allFiles, setAllFiles] = useRecoilState(onlineFiles);
  // - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - -
  //                             For files preview before upload to firestore
  // - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - -
  //                                                Preview
  const handleUploadFile = (e) => {
    e.preventDefault();
    for (let i = 0; i < e.target.files.length; i++) {
      allFileStatic.push(e.target.files[i]);
      setFilesStatic(allFileStatic);
      photos.push(e.target.files[i])
    }
    // const storageRef = fireStorage.ref("places/");
    // let allfiles = [];
    // for (let i = 0; i < e.target.files.length; i++) {
    //   const fileRef = storageRef.child(e.target.files[i].name);

    //   fileRef.put(e.target.files[i]).then((res) => {
    //     fileRef.getDownloadURL().then((res) => {
    //       allfiles.push(res);
    //       console.log(allfiles);
    //       if (allfiles.length === e.target.files.length) {
    //         setAllFiles(allfiles);
    //       }
    //     });
    //   });
    // }
    setContentData({...contentData,files:photos})
    console.log(contentData)
    // let data = JSON.parse(localStorage.getItem("dataStorage"));
    // data = { ...data, photos:allfiles };
    // localStorage.setItem("dataStorage", JSON.stringify(data));
  };

  // - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - -
  return (
    <div>
      <input
        onChange={handleUploadFile}
        multiple
        type="file"
        name="files"
        accept=".jpg,.png"
      />
      <ImageList
        sx={{ width: "100%", height: "100vh" }}
        cols={3}
        rowHeight={164}
      >
        {filesStatic.map((file, index) => (
          <ImageListItem key={index}>
            <img src={window.URL.createObjectURL(file)} width={200} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default UploadFilePage;
