import { useQuery } from '@apollo/client';
import GetTrades from '../../../../graphql/Queries/Trades'
import React from "react"
import { Table, Tag, Space } from 'antd';

const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'LeagueID',
      dataIndex: 'leagueid',
      key: 'leagueid',
    },
    {
      title: 'UserID',
      dataIndex: 'userid',
      key: 'userid',
    },
    {
        title: 'ServiceID',
        dataIndex: 'serviceid',
        key: 'serviceid',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Currency',
        dataIndex: 'currency',
        key: 'currency',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
    },
  ];

const table = () => {
    const { loading, error, data } = useQuery(GetTrades);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

        console.log(data)

        return (
        <Table
            dataSource={data.trades}
            columns={columns}
        />
    );
  }

  export default table