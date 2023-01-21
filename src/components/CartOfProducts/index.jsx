// ReactJS
import { Fragment, useState } from "react";

// Constants
import { formatPrice } from "constants/functions";

// Components
import Button from "components/Button";
import CartItem from "components/CartItem";
import Header from "components/Header";
import InputSearch from "components/InputSearch";

// Styles
import "./styles.css";

const CartOfProducts = ({ cart, handleClick }) => {
    const [search, setSearch] = useState("");

    return (
        <div className="Cart">
            <Header title="Cart" isCart />
            {cart.length !== 0 && (
                <div className="CartSearch">
                    <InputSearch search={search} setSearch={setSearch} />
                </div>
            )}
            <div className="CartContainer">
                {cart
                    .filter(
                        (product) =>
                            product.name
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                            product.type
                                .toLowerCase()
                                .includes(search.toLowerCase())
                    )
                    .map((product, index) => (
                        <Fragment key={index}>
                            <CartItem product={product} />
                            {index !== cart.length - 1 && (
                                <div className="Separator" />
                            )}
                        </Fragment>
                    ))}
            </div>
            <div className="CartTotal">
                <p className="CartTotalText">
                    Total:{" "}
                    <span>
                        $
                        {formatPrice(
                            cart.reduce(
                                (acc, product) => acc + product.total,
                                0
                            )
                        )}
                    </span>
                </p>
                <Button
                    disabled={cart.length === 0 ? true : false}
                    onClick={handleClick}
                >
                    Create Order
                </Button>
            </div>
        </div>
    );
};

export default CartOfProducts;
