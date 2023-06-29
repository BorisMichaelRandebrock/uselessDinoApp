// import React, { useState } from "react";
import { useState } from "react";
import toast from "react-simple-toasts";
import "./App.css";
import Button from "./Button";
import Circle from "./Circle";
import Square from "./Square";

const App = (): JSX.Element => {
  let bichoInicial = {
    name: "Bicho",
    imageSource:
      "https://dinoworldexpo.com/wp-content/uploads/2022/01/dino-cartel-white.png",
    alternativeText: " angry t-rex",
    text: "this looks like a very angry T-rex... but if you tickle it...",
  };
  let [bicho, setBicho] = useState(bichoInicial);

  const trexToHappy = () => {
    setBicho({
      name: "Bicho happy",
      imageSource:
        "https://drive.google.com/uc?id=1l6oKkgUEXTqmK99TfCJkgd0b9ydCb0SW",
      alternativeText: " laughing t-rex",
      text: "...you will see that he actually really is...",
    });

    setTimeout(() => {
      setBicho({
        name: "Bicho",
        imageSource:
          "data:image/png;base64,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",
        alternativeText: "cuddly t-rex",
        text: "... a rather cuddly thingy",
      });
    }, 3000);
  };

  const circles = new Array(5).fill(1);

  const maxNumber = 20;
  const minNumber = 0;

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const decrementNumber = (): void => {
    if (numbers[0] > minNumber) {
      setNumbers(numbers.map((number) => number - 1));
    }
    return;
  };
  const addNumber = (): void => {
    if (numbers[numbers.length - 1] < maxNumber) {
      setNumbers(numbers.map((number) => number + 1));
    }
    return;
  };

  return (
    <>
      <h2>{bicho.name}</h2>
      <button onClick={trexToHappy}>tickles</button>
      <p>{bicho.text}</p>
      <div className="bichoImg">
        <img src={bicho.imageSource} alt={bicho.alternativeText} />
      </div>

      <Button text="Roaarrr" actionOnClick={() => toast("tickle me ... 🥹!")} />
      <div className="squares">
        <Square actionOnClick={() => decrementNumber()} symbol="<<" />
        <Square number={numbers[0]} />
        <Square number={numbers[1]} />
        <Square number={numbers[2]} />
        <Square number={numbers[3]} />
        <Square number={numbers[4]} />
        <Square actionOnClick={() => addNumber()} symbol=">>" />
      </div>
      <section className="circles">
        <div className="circled">
          {circles.map((circle, position) => (
            <Circle key={position} />
          ))}
        </div>
      </section>
    </>
  );
};

export default App;
