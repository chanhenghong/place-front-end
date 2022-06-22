import ReactPlayer from "react-player";
const ShortVideos = ({ video_url }) => {
  return (
    <div>
      <ReactPlayer
        controls
        playing={true}
        muted={true}
        loop={true}
        width="225px"
        height="400px"
        url={video_url}
      ></ReactPlayer>
    </div>
  );
};

export default ShortVideos;
