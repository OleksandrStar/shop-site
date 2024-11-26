import {useEffect, useState} from "react";

import styles from "./ProductsListing.css";

const ProductsListing = () => {
    const [data, setData] = useState()


    const functionA = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setData(data)
    }

    useEffect(() => {
        functionA()
    }, []);

    return (
        <div className='productList'>
            {data && data.length && data.map((product) => (
                <div
                    className='productList__card'
                    key={product.id}
                >
                    <h2 className='productList__title'>
                        {product.title}
                    </h2>
                    <img src={product.image} alt={product.title} width="150" />
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductsListing;
