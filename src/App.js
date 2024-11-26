import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/About/index";
import ServicesPage from "./pages/services/index";
import ProductsPage from "./pages/sale/index";

function App() {
  return (
      <Router>
        <Routes>

          <Route path="/" element={<MainPage/>}/>

          {/*<Route*/}
          {/*    path="/product-details"*/}
          {/*    element={selectedProduct ? <ProductDetails/> : <Navigate to="/"/>}*/}
          {/*/>*/}
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
      </Router>
  );
}

export default App;
