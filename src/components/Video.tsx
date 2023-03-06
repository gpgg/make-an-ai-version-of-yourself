import video from "../assets/videos/input_video.mp4";

const Video = () => {
  return (
    <video
      className="w-1/5 h-auto border border-gray-200 rounded-lg dark:border-gray-700"
      loop
      autoPlay
      muted
    >
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
export default Video;
