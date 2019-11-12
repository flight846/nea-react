import React, { Component } from 'react';
import ReactTable from 'react-table';

import Paging from 'components/common/pagination';
import ShowList from 'components/ui/showlist';

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      pageSize: props.pageSize || 10,
      data: props.data || [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.data !== state.data) {
      return {
        page: 0,
        data: props.data || [],
      };
    }
    return null;
  }

  onChangePageSize = event => {
    this.setState({
      pageSize: event.target.value,
      page: 0,
    });
  };

  onChangePage = number => {
    this.setState({
      page: number,
    });
  };

  render() {
    const { page, pageSize, data } = this.state;
    const { columns, getTrProps, pageSizeHidden, title, tableClassName } = this.props;
    return (
      <>
        <ShowList
          pageSize={pageSize}
          totalItems={data.length}
          onChangePageSize={this.onChangePageSize}
          pageSizeHidden={pageSizeHidden}
          title={title}
        />
        <ReactTable
          className={`react__table ${tableClassName}`}
          data={data}
          columns={columns}
          page={page}
          pageSize={pageSize}
          showPagination={false}
          sortable={false}
          style={{ marginBottom: 16 }}
          getTrProps={getTrProps}
        />
        <Paging number={page} totalPages={data.length / pageSize} onClickPager={this.onChangePage} />
      </>
    );
  }
}

export default DataTable;
