interface Audio {
  source: string;
}
const Audio = ({ source }: Audio) => {
  return (
    <audio autoPlay>
      <source src={source} type="audio/wav" />
    </audio>
  );
};
export default Audio;
