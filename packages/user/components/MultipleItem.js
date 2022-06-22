import React from "react";

import Carousel from "react-elastic-carousel";
import { videos } from "./../web-admin/Videos/videosLink";
import ShortVideos from "./ShortVideos";
import "./../styles/video_slider.module.css";
import ReactPlayer from "react-player";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 600, itemsToShow: 2, itemsToScroll: 2 },
  { width: 900, itemsToShow: 3 },
  { width: 1200, itemsToShow: 5 },
];
const Multivideo = () => {
  return (
    <div className="App" style={{ marginTop: "50px" }}>
      <div className="carousel-wrapper">
        <Carousel
          breakPoints={breakPoints}
          swiping={true}
          style={{ color: "red" }}
          renderPagination={({ pages, activePage, onClick }) => {
            return <></>;
          }}
        >
          {videos.map((item, index) => {
            return (
              <ShortVideos key={index} video_url={item.video_url}></ShortVideos>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Multivideo;
