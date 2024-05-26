import React from "react";

type PropsCircle = {
  numberOfCircles: number;
};

const LevelGenerate: React.FC<PropsCircle> = ({ numberOfCircles }) => {
  const circlesArray = Array.from(
    { length: numberOfCircles },
    (_, index) => index + 1,
  );
  return (
    <div className="circle-generator row  align-items-center  ms-1 ">
      {circlesArray.map((circleNumber) => (
        <div
          key={circleNumber}
          className="circle align-items-center  g-2  ms-1"
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "100%",
            backgroundColor: "#067655",
          }}
        ></div>
      ))}
    </div>
  );
};

export default LevelGenerate;
