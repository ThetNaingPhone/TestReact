import React from "react";
import { PhoneInput } from "react-contact-number-input";
import '../../custom.css'

class Customer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [
          { name: 'John Doe', age: 30, profession: 'Developer' },
          { name: 'Jane Smith', age: 25, profession: 'Designer' },
          { name: 'Michael Johnson', age: 35, profession: 'Engineer' }
          // ... other objects in the data array
        ],
        searchQuery: ''
      };
    }
  
    handleSearch = (e) => {
      if (e.key === 'Enter') {
        const { value } = e.target;
        this.setState({ searchQuery: value });
      }
    };
  
    render() {
      const { data, searchQuery } = this.state;
  
      // Filter the data based on the search query
      const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
      return (
        <div>
          <input
    
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={this.handleSearch}
            onKeyDown={this.handleSearch}
          />
          
          <ul>
            {filteredData.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
          <PhoneInput
            
        />
        </div>
        
      );
    }
  }
  export default Customer;