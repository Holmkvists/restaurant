import "./styles/genericButton.css";

interface IGenericProps {
  children: string;
  size: "s" | "m" | "l";
  fontSize: "s" | "m" | "l";
  handleNextClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const GenericButton = (props: IGenericProps) => {
  const styleObject = {
    width: props.size == "s" ? "50px" : props.size == "m" ? "100px" : "150px",
    fontSize: props.size == "s" ? "10px" : props.size == "m" ? "20px" : "30px",
  };

  return (
    <div>
      <button
        className="generic__btn"
        onClick={props.handleNextClick}
        style={styleObject}
      >
        {props.children}
      </button>
    </div>
  );
};