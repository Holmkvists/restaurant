import "../GenericButton/styles/genericButton.css";

interface IGenericProps {
  children: string;
  size: "s" | "m" | "l";
  fontSize: "s" | "m" | "l";

  handleBackClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const BackButton = (props: IGenericProps) => {
  const styleObject = {
    width: props.size == "s" ? "50px" : props.size == "m" ? "100px" : "150px",
    fontSize: props.size == "s" ? "10px" : props.size == "m" ? "20px" : "30px",
  };

  return (
    <div>
      <button
        className="generic__btn"
        onClick={props.handleBackClick}
        style={styleObject}
      >
        {props.children}
      </button>
    </div>
  );
};
