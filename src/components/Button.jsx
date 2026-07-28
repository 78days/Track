const Button = ({ type, text }) => {
    return (
      // biome-ignore lint/a11y/useButtonType: <explanation>
<button className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}>
        {text}
      </button>
    );
  };
  
  export default Button;