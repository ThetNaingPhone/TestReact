import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function SideMenu() {
    const navigate = useNavigate();
    return <div className="SideMenu">
        <div><h4>Menu</h4></div>
    <Menu onClick={(item) => {
        navigate(item.key);
    }}
        items={[
            {
                label: "Dashboard",
                icon: <AppstoreOutlined />,
                key:'/',
            },
            {
                label: "Inventory",
                key:'/inventory',
                icon:<ShopOutlined />
            },
            {
                label: 'Orders',
                key:'/orders',
                icon:<ShoppingCartOutlined />
            },
            {
                label: "Customers",
                key:'/customers',
                icon:<UserOutlined />
            },
            {
                label: 'Orders',
                key:'/orders',
                icon:<ShoppingCartOutlined />
            },
            {
                label: "Customers",
                key:'/customers',
                icon:<UserOutlined />
            },
            
        ]} />
    </div>
}
export default SideMenu;