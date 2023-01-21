// ReactJS
import { useContext } from "react";

// Context
import { ShoppingContext } from "context/ShoppingContext";

// Constants
import { capitalizeStr, formatPrice } from "constants/functions";

// Components
import Button from "components/Button";

// Styles
import "./styles.css";

const CartItem = ({ product, index }) => {
    const { handleRemoveToCart } = useContext(ShoppingContext);

    return (
        <div className="CartItem">
            <div className="CartInfo">
                <img
                    className="CartImage"
                    src={product.url ?? "https://via.placeholder.com/50x50"}
                    alt={product.name}
                    width={50}
                    height={50}
                />
                <div className="CardInfoText">
                    <h4>{product.name}</h4>
                    <p className="ItemText">
                        Category: <span>{capitalizeStr(product.type)}</span>
                    </p>
                </div>
            </div>
            <p>
                {product.quantity} {product.quantity > 1 ? "Units" : "Unit"}
            </p>
            <p>${formatPrice(product.unit_price)}</p>
            <p>${formatPrice(product.total)}</p>
            <Button onClick={() => handleRemoveToCart(product, index)}>
                <img
                    src={require("assets/icons/delete.svg").default}
                    alt="Delete"
                    width={20}
                    height={20}
                />
            </Button>
        </div>
    );
};

export default CartItem;
