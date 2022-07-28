interface ButtonProps {
  text: string;
  actionOnClick: () => void;
}

const Button = ({ actionOnClick, text }: ButtonProps): JSX.Element => {
  return (
    <button className="button button--select" onClick={actionOnClick}>
      {text}
    </button>
  );
};

export default Button;
