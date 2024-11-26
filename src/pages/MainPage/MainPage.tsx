import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import {
    setCategoryFilter,
    setPriceSortOrder,
} from "../../store/product.slice";
import ProductsListing from "../../components/ProductListing/ProductsListing";
import FilterOptions from "../../components/FilterOptions/FilterOptions";
import SortOptions from "../../components/SortOptions/SortOptions";

import styles from "./MainPage.module.scss";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";

const MainPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleCategoryChange = (category: string) => {
        dispatch(setCategoryFilter(category));
    };

    const handleSortOrderChange = (order: "asc" | "desc") => {
        dispatch(setPriceSortOrder(order));
    };

    return (
        <div className={styles.wrap}>
            <header style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}><img
                style={{height: '100px', width: '100px'}}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&s'/>
                <div style={{display: "flex", gap: '20px'}}>
                    <div onClick={() => navigate("/")}>Home</div>
                    <div onClick={() => navigate("/about")}>About</div>
                    <div onClick={() => navigate("/services")}>Services</div>
                    <div onClick={() => navigate("/products")}>Products</div>
                </div>
            </header>
            <div className={styles.filters}>
                <SearchBar/>
                <FilterOptions onCategoryChange={handleCategoryChange}/>
                <SortOptions onSortOrderChange={handleSortOrderChange}/>
            </div>

            <ProductsListing/>
            <footer style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div/>
                <div style={{display: "flex", gap: '20px'}}>
                    <div>Home</div>
                    <div>About</div>
                    <div>Services</div>
                    <div>Products</div>
                    <div>Help</div>
                </div>
            </footer>
        </div>
    );
};

export default MainPage;
