import { BrowserRouter,Route,Routes} from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import Inventory from "../../Pages/Inventory";
import Customers from "../../Pages/Customers";
import Orders from "../../Pages/Orders";

function AppRoutes() {
    return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/orders" element={<Orders />} />
        </Routes>)
}
export default AppRoutes;