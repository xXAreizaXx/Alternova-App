// Styles
import "./styles.css";

const Header = ({ title, isCart = false }) => {
    return (
        <header className="Header">
            <div className="Container">
                {isCart ? (
                    <div className="WrapperCart">
                        <img
                            alt="Cart"
                            height={100}
                            src={require("assets/images/cart.png")}
                            width={100}
                        />
                    </div>
                ) : (
                    <div className="WrapperLogo">
                        <img
                            alt="Alternova Logo"
                            height={100}
                            src={require("assets/images/logo.png")}
                            width={100}
                        />
                    </div>
                )}
                <h1>{title}</h1>
            </div>
        </header>
    );
};

export default Header;
