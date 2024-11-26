// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../store/store";
// import { setSearchTerm } from "../../store/product.slice";
//
// import styles from "./SearchBar.css";
//
// const SearchBar: React.FC = () => {
//     const dispatch = useDispatch<AppDispatch>();
//
//     const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         dispatch(setSearchTerm(e.target.value));
//     };
//
//     return (
//         <div>
//             <input
//                 className={styles.searchbar}
//                 type="text"
//                 placeholder="Search products..."
//                 onChange={handleSearchChange}
//             />
//         </div>
//     );
// };
//
// export default SearchBar;
