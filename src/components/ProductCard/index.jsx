// ReactJS
import { useContext } from "react";

// Context
import { ShoppingContext } from "context/ShoppingContext";

// Constants
import { capitalizeStr, formatPrice } from "constants/functions";

// Styles
import "./styles.css";
import Button from "components/Button";

const ProductCard = ({ product }) => {
    const { handleAddToCart } = useContext(ShoppingContext);

    return (
        <div className="Item">
            <img
                className="ItemImage"
                src={product.url ?? "https://via.placeholder.com/200x150"}
                alt={product.name}
                width={200}
                height={150}
            />
            <div className="ItemInfo">
                <h4>{product.name}</h4>
                <p className="ItemText">
                    Category: <span>{capitalizeStr(product.type)}</span>
                </p>
                <p className="ItemText">
                    Price: <span>${formatPrice(product.unit_price)}</span>
                </p>
                <p className="ItemText">
                    Stock:{" "}
                    <span>
                        {product.stock} {product.stock > 1 ? "Units" : "Unit"}
                    </span>
                </p>
            </div>
            <Button
                disabled={product.stock === 0 ? true : false}
                onClick={() => handleAddToCart(product)}
            >
                Add Cart
            </Button>
        </div>
    );
};

export default ProductCard;
