const WavyBreakLine = ({svgTransform, pathD, pathFill}) => {
  return (
    <svg
      width="100%"
      height="70"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{
        position: "relative",
        left: "0",
        right: "0",
        transform: {svgTransform},
      }}
    >
      <path
        d={pathD}
        fill={pathFill}
      />
    </svg>
  );
};

export default WavyBreakLine;
