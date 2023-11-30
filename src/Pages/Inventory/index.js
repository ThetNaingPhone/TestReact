import { Space, Table, Typography } from "antd"
import { useEffect, useState } from "react"
import { getInventory } from "../../API"
import SearchBar from "../../Components/SearchBar";

function Inventory(){
    const [loading,setLoading] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    useEffect(() => {
        setLoading(true);
        getInventory().then(res=>{
            setDataSource(res.products);
            setLoading(false)
        })
    }, [])
    return(
         <>
         <Space style={{background:"#e6e7e8"}} size={20} direction='vertical'>
        <Space direction="horizontal" style={{justifyContent:"space-between"}}><SearchBar /><Typography.Title level={4}>Inventory</Typography.Title></Space>
        <Table 
        loading = {loading}
        columns={[
        
        {
            title:"Title",
            dataIndex:'title'
        },
        {
            title:"Price",
            dataIndex:'price'
        },
        {
            title:"Rating",
            dataIndex:'rating'
        },
        {
            title:"Stock",
            dataIndex:'stock'
        },
        {
            title:"Thumbnail",
            dataIndex:'thumbnail'
        },
        {
            title:"Brand",
            dataIndex:'brand'
        },
        {
            title:"Category",
            dataIndex:'category'
        },
        
        ]}
        dataSource={dataSource}
        ></Table>
        </Space>
    </>
    )
}
export default Inventory