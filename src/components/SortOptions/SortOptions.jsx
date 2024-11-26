// import styles from "./SortOptions.css";
//
// interface SortOptionsProps {
//     onSortOrderChange: (order: "asc" | "desc") => void;
// }
//
// const SortOptions: React.FC<SortOptionsProps> = ({ onSortOrderChange }) => {
//     return (
//         <div>
//             <label className={styles.sort}>
//                 <span className={styles.sort__descr}>Sort by Price:</span>
//                 <select
//                     onChange={(e) =>
//                         onSortOrderChange(e.target.value as "asc" | "desc")
//                     }
//                 >
//                     <option value="asc">Low to High</option>
//                     <option value="desc">High to Low</option>
//                 </select>
//             </label>
//         </div>
//     );
// };
//
// export default SortOptions;
