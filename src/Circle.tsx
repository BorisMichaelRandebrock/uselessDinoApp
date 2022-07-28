import { useState } from "react";
import "./CircleStyle.css";

const Circle = (): JSX.Element => {
  const [status, setStatus] = useState(false);

  const toggleStatus = () => {
    setStatus(!status);
  };

  return (
    <div
      className={`circle${status ? " circle--active" : ""}`}
      onClick={toggleStatus}
    ></div>
  );
};

export default Circle;
