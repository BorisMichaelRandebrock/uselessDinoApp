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

// import { useState } from "react";

// const Display = (): JSX.Element => {
//   const = [number, setNumber] = useState(0);
//   return (
//     <input type="number" className="display" readOnly={number}>
//   );
// }
//  export default Display;
// coming from src/Display.tsx
