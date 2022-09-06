import "./styles/genericButton.css";

interface IGenericProps {
  children: string;
  size: "s" | "m" | "l";
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const GenericButton = (props: IGenericProps) => {
  const styleObject = {
    width: props.size === "s" ? "50px" : props.size === "m" ? "100px" : "150px",
    fontSize:
      props.size === "s" ? "10px" : props.size === "m" ? "20px" : "30px",
  };

  return (
    <div className="generic__btn__div">
      <button
        className="generic__btn"
        onClick={props.handleClick}
        style={styleObject}
      >
        {props.children}
      </button>
    </div>
  );
};
