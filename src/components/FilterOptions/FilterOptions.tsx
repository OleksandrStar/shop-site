import styles from "./FilterOptions.module.scss";

interface FilterOptionsProps {
    onCategoryChange: (category: string) => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ onCategoryChange }) => {
    return (
        <div>
            <label className={styles.category}>
                <span className={styles.category__description}>Category:</span>
                <select onChange={(e) => onCategoryChange(e.target.value)}>
                    <option value="">All</option>
                    <option value="electronics">Еlectronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Mens clothing</option>
                    <option value="women's clothing">Womens clothing</option>
                </select>
            </label>
        </div>
    );
};

export default FilterOptions;
