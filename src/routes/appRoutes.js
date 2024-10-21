import { Routes, Route } from "react-router-dom";
import Home  from "../components/home";
import Product from "../components/productlist";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/product" exact element={<Product />} />
        </Routes>
    )
}

export default AppRoutes;