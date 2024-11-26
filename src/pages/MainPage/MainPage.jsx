import ProductsListing from "../../components/ProductListing/ProductsListing";

import styles from "./MainPage.css";
import {useNavigate} from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();

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
                {/*<SearchBar/>*/}
                {/*<FilterOptions onCategoryChange={handleCategoryChange}/>*/}
                {/*<SortOptions onSortOrderChange={handleSortOrderChange}/>*/}
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
