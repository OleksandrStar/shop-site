import { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { fetchProducts, selectProduct } from "../../store/product.slice";

import styles from "./ProductsListing.module.scss";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

const ProductsListing: FC = () => {
    const dispatch: AppDispatch = useDispatch();

    const { filteredProducts, loading, searchTerm } = useSelector(
        (state: RootState) => state.products
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) {
        return <p>Loading products...</p>;
    }

    if (filteredProducts.length === 0) {
        return <p>No products found for "{searchTerm}".</p>;
    }

    return (
        <div className={styles.productList}>
            {filteredProducts.map((product: Product) => (
                <div
                    className={styles.productList__card}
                    key={product.id}
                    onClick={() => dispatch(selectProduct(product))}
                >
                    <h2 className={styles.productList__title}>
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
