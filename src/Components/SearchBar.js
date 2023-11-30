import React, { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../custom.css';

class SearchBar extends React.Component{
     constructor(props) {
          super(props);
          this.state = {
              searchValue:"",
              
          }
      }
     
     handleSearch = ()=>{
          console.log(this.state.searchValue)
     }
     handleInputChange=(e)=>{
          this.setState({searchValue: e.target.value});
     }

     render(){
          return(
    <div className="search-bar-container">
      <Input
        size="large"
        placeholder="Search..."
        prefix={<SearchOutlined style={{marginRight:"5px",color:"#3e4145"}}/>}
        className="google-search-bar"
        onPressEnter={this.handleSearch}
        onChange={this.handleInputChange}
      />
    </div>
          )
};
}
export default SearchBar;