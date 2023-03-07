import video from "../assets/videos/input_video.mp4";

const Video = () => {
  return (
    <video className="rounded-lg shadow-lg" loop autoPlay muted>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
export default Video;
