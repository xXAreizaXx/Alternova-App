// ReactJS
import { useContext, useState } from "react";

// Context
import { ShoppingContext } from "context/ShoppingContext";

// Containers
import AppContainer from "containers/AppContainer";

// Components
import CartOfProducts from "components/CartOfProducts";
import ListOfProducts from "components/ListOfProducts";

const App = () => {
    const { products, cart } = useContext(ShoppingContext);

    const [order, setOrder] = useState(false);

    const handleCreateOrder = () => {
        setOrder(true);
        console.log("Create Order [JSON]: ", {
            cart,
            total: cart.reduce((acc, product) => acc + product.total, 0),
        });
    };

    return (
        <AppContainer>
            <ListOfProducts products={products} />
            <CartOfProducts
                cart={cart}
                order={order}
                handleClick={handleCreateOrder}
            />
        </AppContainer>
    );
};

export default App;
