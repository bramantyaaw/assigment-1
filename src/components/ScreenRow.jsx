const ScreenRow = ({ value }) => {
  return (
    <div className="screen-row">
      <input type="text" value={value} readOnly />
    </div>
  );
};

export default ScreenRow;
