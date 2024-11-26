import { useSelector, useDispatch } from "react-redux";
import { clearSelectedProduct } from "../../store/product.slice";

import styles from "./ProductDetails.css";

const ProductDetails = () => {
    const dispatch = useDispatch();
    const selectedProduct = useSelector(
        (state) => state.products.selectedProduct
    );

    if (!selectedProduct) return null;

    return (
        <div>
            <button onClick={() => dispatch(clearSelectedProduct())}>
                Back to list
            </button>
            <div className={styles.product__item}>
                <h2>{selectedProduct.title}</h2>
                <img
                    className={styles.product__img}
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    width="300"
                />
                <p className={styles.product__price}>
                    Price: ${selectedProduct.price}
                </p>
                <p>Description: {selectedProduct.description}</p>
                <p>Category: {selectedProduct.category}</p>
            </div>
        </div>
    );
};

export default ProductDetails;
