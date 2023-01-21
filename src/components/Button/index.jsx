// Styles
import "./styles.css";

const Button = ({ children, onClick, disabled = false }) => {
    return (
        <button
            className={`Button ${disabled ? "Disabled" : ""}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
