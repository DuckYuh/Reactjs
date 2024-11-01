import { Routes, Route } from "react-router-dom";
import Home  from "../components/home/home";
import Product from "../components/productlist/productlist";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/product" exact element={<Product />} />
        </Routes>
    )
}

export default AppRoutes;