import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, Space, Typography } from "antd";
import { useState } from "react";

function AppHeader() {
    const [commentsOpen, setCommentsOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    return <div className="AppHeader">
        <Image 
        width={40}
        src="https://www.pexels.com/@brett-sayles/">
        </Image>
        <Typography.Title>DashBoard</Typography.Title>
        <Space>
            <Badge count={10} dot>
            <MailOutlined style={{ fontSize: 24}} onClick={()=>{
            setCommentsOpen(true)}} />
            </Badge>
            <Badge count={20}>
                <BellFilled style={{ fontSize: 24}} onClick={()=>{
            setNotificationsOpen(true)}} />
            </Badge>
        </Space>
        <Drawer title="Comments" open={commentsOpen} onClose={()=>{
            setCommentsOpen(false)
        }} maskClosable></Drawer>
        <Drawer title="Notifications" open={notificationsOpen} onClose={()=>{
            setNotificationsOpen(false)
        }} maskClosable></Drawer>
    </div>
}
export default AppHeader;