import video from "../assets/video/input_video.mp4";
interface IdleVideoProps {
  source: string;
}
const IdleVideo = ({ source }: IdleVideoProps) => {
  return (
    <video className="rounded-lg shadow-lg" autoPlay loop muted>
      <source src={source} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
export default IdleVideo;
