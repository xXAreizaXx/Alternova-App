// ReactJS
import { useState, createContext } from 'react';

// Contants
import data from 'constants/products';
//import data from 'constants/newProducts';

export const ShoppingContext = createContext({
    products: data?.products || [],
    cart: [],
    handleAddToCart: () => { },
    handleRemoveToCart: () => { }
});

const ShoppingProvider = ({ children }) => {
    const [products, setProducts] = useState(data?.products || []);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        const newProducts = products.map((item) => {
            //if (item.id === product.id) {
            if (item.name === product.name) {
                return {
                    ...item,
                    stock: item.stock - 1
                }
            }

            return item;
        });

        if (product.stock === 0) return;

        setProducts(newProducts);

        //const productInCart = cart.find((item) => item.id === product.id);
        const productInCart = cart.find((item) => item.name === product.name);

        if (productInCart) {
            const newCart = cart.map((item) => {
                //if (item.id === product.id) {
                if (item.name === product.name) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                        total: item.unit_price * (item.quantity + 1)
                    }
                }

                return item;
            });

            setCart(newCart);

            return;
        }

        setCart([...cart, {
            //id: product.id,
            name: product.name,
            type: product.type,
            unit_price: product.unit_price,
            quantity: product.stock - (product.stock - 1),
            //url: product.url,
            total: product.unit_price * 1
        }]);
    }

    const handleRemoveToCart = (product) => {
    }

    return (
        <ShoppingContext.Provider value={{ products, cart, handleAddToCart, handleRemoveToCart }}>
            {children}
        </ShoppingContext.Provider>
    )
}

export default ShoppingProvider;
