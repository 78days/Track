export default function Button({ onClick, buttonType, children }) {
  return (
    <button
      type={onClick ? "button" : "submit"}
      onClick={onClick}
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
    >
      {children}
    </button>
  );
}
