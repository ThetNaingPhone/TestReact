import '@ant-design/icons';
import './App.css';
import AppHeader from './Components/AppHeader';
import { Avatar, Layout, Menu, Space } from 'antd';
import SideMenu from './Components/SideMenu';
import PageContent from './Components/PageContent';
import AppFooter from './Components/AppFooter';
import Sider from 'antd/es/layout/Sider';
import { Content, Header } from 'antd/es/layout/layout';
import { ApartmentOutlined, AppstoreOutlined, BarChartOutlined, CloudOutlined, DeploymentUnitOutlined, NodeIndexOutlined, ShopOutlined, TeamOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import MenuItem from 'antd/es/menu/MenuItem';
import React from 'react';

function App() {
  const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }));
  return (
    <>
      <AppHeader />
      <Space>
      <SideMenu />
      <PageContent />
      </Space>
      <AppFooter />
    
    
    </>
//     <div className="App">
//       <Layout hasSider>
//       <Sider
//         style={{
//           paddingTop:"90px",
//           overflow: 'auto',
//           height: '100vh',
//           position: 'fixed',
//           left: 0,
//           top: 0,
//           bottom: 0,
//           zIndex:0,
//         }}
//       >
//         <div className="demo-logo-vertical">Hello
//         </div>
//         <Menu style={{ background: 'gray' }} mode='inline'>
//                     <MenuItem key="1" className='sidebar-item'>
//                         <Link to="/user" className="linkRemoveStyle" >
//                             <UserOutlined />
//                             <span className="sidebar-text">"user"</span>

//                         </Link>
//                     </MenuItem>
//                     <MenuItem key="2" className='sidebar-item'>
//                         <Link to="/usertype" className="linkRemoveStyle" >
//                             <DeploymentUnitOutlined />
//                             <span className="sidebar-text">"user_type"</span>
//                         </Link>
//                     </MenuItem>


//                     <MenuItem key="3" className='sidebar-item'>
//                         <Link to="/resource" className="linkRemoveStyle" >
//                             <NodeIndexOutlined />
//                             <span className="sidebar-text">'resource'</span>

//                         </Link>
//                     </MenuItem>
//                     <MenuItem key="4" className='sidebar-item'>


//                         <Link to='4' className="linkRemoveStyle" >
//                             <ApartmentOutlined />
//                             <span className="sidebar-text">'rolemanagement'</span>
//                         </Link>
//                     </MenuItem>
//                     <MenuItem key="5" className='sidebar-item'>
//                         <Link to='6' className="linkRemoveStyle" >
//                             <UserOutlined />
//                             <span className="sidebar-text">'account'</span>
//                         </Link>
//                     </MenuItem>
//                     <MenuItem key="1" className='sidebar-item'>
//                         <Link to="/user" className="linkRemoveStyle" >
//                             <UserOutlined />
//                             <span className="sidebar-text">"user"</span>

//                         </Link>
//                     </MenuItem>
//                     <MenuItem key="2" className='sidebar-item'>
//                         <Link to="/usertype" className="linkRemoveStyle" >
//                             <DeploymentUnitOutlined />
//                             <span className="sidebar-text">"user_type"</span>
//                         </Link>
//                     </MenuItem>


//                     <MenuItem key="3" className='sidebar-item'>
//                         <Link to="/resource" className="linkRemoveStyle" >
//                             <NodeIndexOutlined />
//                             <span className="sidebar-text">'resource'</span>

//                         </Link>
//                     </MenuItem>
//                     <MenuItem key="4" className='sidebar-item'>


//                         <Link to='4' className="linkRemoveStyle" >
//                             <ApartmentOutlined />
//                             <span className="sidebar-text">'rolemanagement'</span>
//                         </Link>
//                     </MenuItem>
//                     <MenuItem key="5" className='sidebar-item'>
//                         <Link to='6' className="linkRemoveStyle" >
//                             <UserOutlined />
//                             <span className="sidebar-text">'account'</span>
//                         </Link>
//                     </MenuItem>
//                 </Menu>
//       </Sider>
//       <Layout
//         className="site-layout"
//         style={{
//           // marginLeft: 200,
//           zIndex:2
//         }}
//       >
//       <Header
//           style={{
//             padding: 0,
//             background: 'gray',
//             zIndex:3
//           }}
//         ><AppHeader /></Header>
//         </Layout>
//         <Layout>
//       <Content
//           style={{
//             margin: '24px 16px 0',
//             overflow: 'initial',
//           }}
//         >
//       <PageContent></PageContent>
//       </Content>
// <AppFooter />
// </Layout> 
// </Layout> 
  
  );
}

export default App;
