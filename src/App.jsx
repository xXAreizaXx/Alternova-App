// ReactJS
import { useContext } from "react";

// Context
import { ShoppingContext } from "context/ShoppingContext";

// Containers
import AppContainer from "containers/AppContainer";

// Components
import CartOfProducts from "components/CartOfProducts";
import ListOfProducts from "components/ListOfProducts";

const App = () => {
    const { products, cart } = useContext(ShoppingContext);

    const handleCreateOrder = () => {
        console.log("Create Order [JSON]: ", {
            cart,
            total: cart.reduce((acc, product) => acc + product.total, 0),
        });
    };

    return (
        <AppContainer>
            <ListOfProducts products={products} />
            <CartOfProducts cart={cart} handleClick={handleCreateOrder} />
        </AppContainer>
    );
};

export default App;
