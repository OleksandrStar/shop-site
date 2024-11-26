import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { RootState } from "./store/store";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/About/index";
import ServicesPage from "./pages/services/index";
import ProductsPage from "./pages/sale/index";
// import HelpPage from "./pages/";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const App: React.FC = () => {
    const selectedProduct = useSelector(
        (state: RootState) => state.products.selectedProduct
    );

    // <div onClick={() => navigate("/")}>Home</div>
    // <div onClick={() => navigate("/about")}>About</div>
    // <div onClick={() => navigate("/services")}>Services</div>
    // <div onClick={() => navigate("/products")}>Products</div>
    //



    return <Router>
        <Routes>

            <Route path="/" element={<MainPage/>}/>

            <Route
                path="/product-details"
                element={selectedProduct ? <ProductDetails/> : <Navigate to="/"/>}
            />
            <Route
                path="/about"
                element={<AboutPage/>}
            />
            <Route
                path="/services"
                element={<ServicesPage/>}
            />
            <Route
                path="/products"
                element={<ProductsPage/>}
            />
        </Routes>
    </Router>;
};

export default App;
