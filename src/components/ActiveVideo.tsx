interface ActiveVideoProps {
  source: string;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ActiveVideo = ({ source, setActive }: ActiveVideoProps) => {
  return (
    <video
      className="rounded-lg shadow-lg"
      autoPlay
      muted
      onEnded={(e) => setActive(false)}
    >
      <source src={source} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
export default ActiveVideo;
