import "../button/styles/genericButton.css";

interface IGenericProps {
  buttonText: string;
  handleClick: (e: React.FormEvent) => void;
}

export const GenericButton = (props: IGenericProps) => {
  return (
    <div>
      <button className="generic__btn" onClick={props.handleClick}>
        {props.buttonText}
      </button>
    </div>
  );
};
