import React, { Component } from 'react';
import { Table, Pagination } from 'antd';

class Paginationcom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pageSize: 5,
      totalPagination: 20,
    };
  }
  handlePaginationChange = (pageNumber,page, pageSize) => {
    const { totalPagination ,isFetching} = this.state
    // this.setState({
    //   currentPage: page,
    //   pageSize: pageSize,
    //  });
    if(isFetching){
       console.log("Server fetching")
    }else{
        if (totalPagination == pageNumber) {
            // this.fetchData()
            this.setState({ totalPagination: totalPagination + 20 })
        } else if (pageNumber < totalPagination) {
            var currentPage = 0
            for (let i = 20; i < totalPagination; i += 20) {
                if (pageNumber < i) {
                    this.setState({ totalPagination: i })
                    break
                }

            }
            
        }
    }
   

};
  

  render() {
    const { currentPage, pageSize,totalPagination } = this.state;
    const { data, columns } = this.props;

    // Calculate the index range of items to be displayed
    // const startIdx = (currentPage - 1) * pageSize;
    // const endIdx = currentPage * pageSize;
    // const currentItems = data.slice(startIdx, endIdx);
   
    return (
      <div>
         <Table
          columns={columns}
          dataSource={data}
          pagination={false}
        />
        <Pagination
          defaultPageSize={1}
          total={totalPagination}
          showSizeChanger={false}
          onChange={this.handlePaginationChange}
        />
      </div>
    );
  };
};

export default Paginationcom;