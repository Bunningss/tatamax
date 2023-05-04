import "../Styles/ButtonPrimary.css";

const ButtonPrimary = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick} className="button button_primary">
      {text}
    </button>
  );
};

export default ButtonPrimary;
