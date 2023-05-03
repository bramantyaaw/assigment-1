import ScreenRow from "./ScreenRow";

const Screen = ({ math, answer }) => {
  return (
    <div className="screen">
      <ScreenRow value={math} />
      <ScreenRow value={answer} />
    </div>
  );
};

export default Screen;
