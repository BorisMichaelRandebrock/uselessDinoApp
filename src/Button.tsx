interface ButtonProps {
  text: string;
  actionOnClick: () => void;
  // type: string;
}

const Button = ({
  actionOnClick,
  text /*, type*/,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className="button button--select"
      onClick={actionOnClick} /*type={(type === "sum" ? "+" : "-")}*/
    >
      {text}
    </button>
  );
};

export default Button;
