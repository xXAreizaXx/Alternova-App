// ReactJS
import { useState } from "react";

// Components
import ProductCard from "components/ProductCard";
import InputSearch from "components/InputSearch";

// Styles
import "./styles.css";

const ListOfProducts = ({ products }) => {
    const [search, setSearch] = useState("");

    return (
        <div className="Products">
            <InputSearch search={search} setSearch={setSearch} />
            <div className="ProductContainer">
                {products
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
                        <ProductCard product={product} key={index} />
                    ))}
            </div>
        </div>
    );
};

export default ListOfProducts;
