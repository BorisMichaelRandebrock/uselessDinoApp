import "./SquareStyle.css";

interface SquareProps {
  number?: number;
  actionOnClick?: () => void;
  symbol?: string;
}

const Square = ({
  actionOnClick,
  symbol,
  number,
}: SquareProps): JSX.Element => {
  return (
    <div className="square" onClick={actionOnClick}>
      {number}
      {symbol}
    </div>
  );
};
export default Square;
